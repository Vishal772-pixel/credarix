"use client"

import { useState, useEffect } from "react"

interface CountUpProps {
  end: number
  duration?: number
  start?: number
}

const CountUp = ({ end, duration = 2, start = 0 }: CountUpProps) => {
  const [count, setCount] = useState(start)

  useEffect(() => {
    let startTime: number
    let animationFrameId: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * (end - start) + start))

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate)
      }
    }

    animationFrameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [end, duration, start])

  return <>{count}</>
}

export default CountUp
