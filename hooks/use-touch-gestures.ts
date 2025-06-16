"use client"

import type React from "react"

import { useRef, useCallback } from "react"

interface TouchGestureHandlers {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onSwipeUp?: () => void
  onSwipeDown?: () => void
}

export function useTouchGestures(handlers: TouchGestureHandlers) {
  const touchStartRef = useRef<{ x: number; y: number } | null>(null)
  const minSwipeDistance = 50

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    const touch = e.touches[0]
    touchStartRef.current = {
      x: touch.clientX,
      y: touch.clientY,
    }
  }, [])

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStartRef.current) return

      const touch = e.changedTouches[0]
      const deltaX = touch.clientX - touchStartRef.current.x
      const deltaY = touch.clientY - touchStartRef.current.y

      const absDeltaX = Math.abs(deltaX)
      const absDeltaY = Math.abs(deltaY)

      // Determine if it's a horizontal or vertical swipe
      if (absDeltaX > absDeltaY && absDeltaX > minSwipeDistance) {
        // Horizontal swipe
        if (deltaX > 0) {
          handlers.onSwipeRight?.()
        } else {
          handlers.onSwipeLeft?.()
        }
      } else if (absDeltaY > absDeltaX && absDeltaY > minSwipeDistance) {
        // Vertical swipe
        if (deltaY > 0) {
          handlers.onSwipeDown?.()
        } else {
          handlers.onSwipeUp?.()
        }
      }

      touchStartRef.current = null
    },
    [handlers, minSwipeDistance],
  )

  return {
    onTouchStart: handleTouchStart,
    onTouchEnd: handleTouchEnd,
  }
}
