"use client"

import { useEffect, useRef } from "react"

/**
 * Liga a posição de scroll de um container alto ao tempo de um vídeo,
 * criando o efeito de "scrubbing" (o vídeo avança/retrocede conforme o scroll).
 *
 * Para funcionar de forma consistente em qualquer dispositivo/rede, o vídeo é
 * baixado por completo como blob antes do scrubbing — assim o seeking é sempre
 * local e instantâneo, independente do suporte a byte-range do servidor.
 */
export function useScrollVideo(src: string) {
  const containerRef = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const targetTime = useRef(0)
  const currentTime = useRef(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const video = videoRef.current
    const container = containerRef.current
    if (!video || !container) return

    let duration = 0
    let objectUrl: string | null = null
    let cancelled = false

    const readDuration = () => {
      if (Number.isFinite(video.duration) && video.duration > 0) {
        duration = video.duration
      }
      // Força o decoder a pintar o primeiro frame imediatamente.
      try {
        video.currentTime = 0.001
      } catch {
        /* ainda não seekable */
      }
    }
    readDuration()
    video.addEventListener("loadedmetadata", readDuration)
    video.addEventListener("loadeddata", readDuration)
    video.addEventListener("durationchange", readDuration)

    fetch(new URL(src, window.location.origin).href)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        return res.blob()
      })
      .then((blob) => {
        if (cancelled) return
        objectUrl = URL.createObjectURL(blob)
        video.src = objectUrl
        video.load()
      })
      .catch(() => {
        /* mantém o <source> como fallback se o fetch falhar */
      })

    // Mapeia a posição de scroll dentro do container para a timeline do vídeo.
    const onScroll = () => {
      const scrollable = container.offsetHeight - window.innerHeight
      if (scrollable <= 0) return
      const scrolled = -container.getBoundingClientRect().top
      const progress = Math.min(1, Math.max(0, scrolled / scrollable))
      targetTime.current = progress * duration
    }

    // Só emite um novo seek quando o anterior terminou, evitando acúmulo de
    // requisições de seek (principal causa de travamento).
    let seeking = false
    video.addEventListener("seeked", () => {
      seeking = false
    })

    // Easing exponencial: o playhead persegue o alvo e desacelera ao se
    // aproximar, ficando levemente atrás do scroll sem nunca ultrapassá-lo.
    const EASE = 0.06

    const tick = () => {
      const diff = targetTime.current - currentTime.current
      currentTime.current += diff * EASE
      if (Math.abs(diff) < 0.0015) currentTime.current = targetTime.current

      if (
        !seeking &&
        video.readyState >= 2 &&
        Math.abs(video.currentTime - currentTime.current) > 0.02
      ) {
        try {
          seeking = true
          video.currentTime = currentTime.current
        } catch {
          seeking = false
        }
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()
    rafRef.current = requestAnimationFrame(tick)

    return () => {
      cancelled = true
      window.removeEventListener("scroll", onScroll)
      video.removeEventListener("loadedmetadata", readDuration)
      video.removeEventListener("loadeddata", readDuration)
      video.removeEventListener("durationchange", readDuration)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (objectUrl) URL.revokeObjectURL(objectUrl)
    }
  }, [src])

  return { containerRef, videoRef }
}
