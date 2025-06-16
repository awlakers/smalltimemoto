"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  fill?: boolean
  sizes?: string
  quality?: number
  placeholder?: "blur" | "empty"
  blurDataURL?: string
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  fill = false,
  sizes,
  quality = 85,
  placeholder = "empty",
  blurDataURL,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  const handleLoad = () => {
    setIsLoading(false)
  }

  const handleError = () => {
    setIsLoading(false)
    setHasError(true)
  }

  if (hasError) {
    return (
      <div
        className={cn("flex items-center justify-center bg-stone-200 text-stone-500", className)}
        style={fill ? undefined : { width, height }}
        role="img"
        aria-label={`Failed to load image: ${alt}`}
      >
        <div className="text-center p-4">
          <div className="text-2xl mb-2">📷</div>
          <div className="text-sm">Image unavailable</div>
        </div>
      </div>
    )
  }

  return (
    <div className={cn("relative", className)}>
      {isLoading && (
        <div
          className={cn(
            "absolute inset-0 bg-stone-200 animate-pulse flex items-center justify-center",
            fill ? "w-full h-full" : "",
          )}
          style={fill ? undefined : { width, height }}
          aria-hidden="true"
        >
          <div className="w-8 h-8 border-2 border-stone-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={fill ? undefined : width}
        height={fill ? undefined : height}
        fill={fill}
        priority={priority}
        quality={quality}
        sizes={sizes}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        className={cn("transition-opacity duration-300", isLoading ? "opacity-0" : "opacity-100", className)}
        onLoad={handleLoad}
        onError={handleError}
        {...props}
      />
    </div>
  )
}
