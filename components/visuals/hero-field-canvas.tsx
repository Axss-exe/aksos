'use client'

import { useReducedMotion } from '@/hooks/use-reduced-motion'
import { useEffect, useRef } from 'react'

type Node = {
  x: number
  y: number
  vx: number
  vy: number
  r: number
}

const MAX_DPR = 1.75
const NODE_COUNT = 70
const LINK_DISTANCE = 130

/**
 * A quiet field of drifting nodes and the connections between nearby ones —
 * a visual metaphor for scattered signals resolving into structure.
 * Capped device-pixel-ratio, single RAF loop, fully torn down on unmount.
 */
export function HeroFieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const reducedMotion = useReducedMotion()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = 1
    let nodes: Node[] = []
    let rafId = 0
    let visible = true

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR)
      width = rect.width
      height = rect.height
      canvas!.width = Math.round(width * dpr)
      canvas!.height = Math.round(height * dpr)
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        r: Math.random() * 1.2 + 0.6,
      }))
    }

    function drawStatic() {
      ctx!.clearRect(0, 0, width, height)
      ctx!.fillStyle = 'rgba(245,245,245,0.35)'
      for (const n of nodes) {
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx!.fill()
      }
    }

    function tick() {
      if (!visible) return
      ctx!.clearRect(0, 0, width, height)

      for (const n of nodes) {
        n.x += n.vx
        n.y += n.vy
        if (n.x < 0 || n.x > width) n.vx *= -1
        if (n.y < 0 || n.y > height) n.vy *= -1
      }

      ctx!.lineWidth = 0.6
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i]
          const b = nodes[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < LINK_DISTANCE) {
            const alpha = (1 - dist / LINK_DISTANCE) * 0.18
            ctx!.strokeStyle = `rgba(245,245,245,${alpha})`
            ctx!.beginPath()
            ctx!.moveTo(a.x, a.y)
            ctx!.lineTo(b.x, b.y)
            ctx!.stroke()
          }
        }
      }

      ctx!.fillStyle = 'rgba(245,245,245,0.55)'
      for (const n of nodes) {
        ctx!.beginPath()
        ctx!.arc(n.x, n.y, n.r, 0, Math.PI * 2)
        ctx!.fill()
      }

      rafId = requestAnimationFrame(tick)
    }

    resize()

    if (reducedMotion) {
      drawStatic()
    } else {
      rafId = requestAnimationFrame(tick)
    }

    const resizeObserver = new ResizeObserver(() => {
      resize()
      if (reducedMotion) drawStatic()
    })
    resizeObserver.observe(canvas)

    function onVisibility() {
      visible = document.visibilityState === 'visible'
      if (visible && !reducedMotion) {
        cancelAnimationFrame(rafId)
        rafId = requestAnimationFrame(tick)
      }
    }
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      cancelAnimationFrame(rafId)
      resizeObserver.disconnect()
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [reducedMotion])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="absolute inset-0 h-full w-full"
    />
  )
}
