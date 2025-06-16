"use client"

import { useState, useRef, useEffect } from "react"
import { OptimizedImage } from "./optimized-image"
import { useTouchGestures } from "@/hooks/use-touch-gestures"
import { ChevronLeft, ChevronRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface GalleryItem {
  id: number
  src: string
  alt: string
  title: string
  description: string
}

interface AccessibleGalleryProps {
  items: GalleryItem[]
  className?: string
}

export function AccessibleGallery({ items, className }: AccessibleGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const modalRef = useRef<HTMLDivElement>(null)
  const previousFocusRef = useRef<HTMLElement | null>(null)

  const touchGestures = useTouchGestures({
    onSwipeLeft: () => selectedIndex !== null && navigateGallery(1),
    onSwipeRight: () => selectedIndex !== null && navigateGallery(-1),
  })

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (selectedIndex !== null) {
      previousFocusRef.current = document.activeElement as HTMLElement
      modalRef.current?.focus()
    } else if (previousFocusRef.current) {
      previousFocusRef.current.focus()
    }
  }, [selectedIndex])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return

      switch (e.key) {
        case "Escape":
          closeModal()
          break
        case "ArrowLeft":
          e.preventDefault()
          navigateGallery(-1)
          break
        case "ArrowRight":
          e.preventDefault()
          navigateGallery(1)
          break
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [selectedIndex])

  const navigateGallery = (direction: number) => {
    if (selectedIndex === null) return

    const newIndex = selectedIndex + direction
    if (newIndex >= 0 && newIndex < items.length) {
      setSelectedIndex(newIndex)
    }
  }

  const openModal = (index: number) => {
    setSelectedIndex(index)
  }

  const closeModal = () => {
    setSelectedIndex(null)
  }

  if (isLoading) {
    return (
      <div className={`grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 ${className}`}>
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="animate-pulse">
            <div className="bg-stone-200 h-48 sm:h-64 rounded-lg mb-4" />
            <div className="bg-stone-200 h-4 rounded mb-2" />
            <div className="bg-stone-200 h-3 rounded w-2/3" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <>
      <div
        className={`grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 ${className}`}
        role="grid"
        aria-label="Motorcycle gallery"
      >
        {items.map((item, index) => (
          <div
            key={item.id}
            role="gridcell"
            className="relative group overflow-hidden rounded-lg hover-lift cursor-pointer focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2"
            onClick={() => openModal(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                openModal(index)
              }
            }}
            tabIndex={0}
            aria-label={`View ${item.title} in full size`}
          >
            <OptimizedImage
              src={item.src}
              alt={item.alt}
              width={400}
              height={300}
              className="w-full h-48 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4">
              <h3 className="text-white font-semibold font-serif text-sm sm:text-base mb-1">{item.title}</h3>
              <p className="text-white/90 font-serif text-xs sm:text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          {...touchGestures}
        >
          <div ref={modalRef} className="relative max-w-4xl w-full max-h-full" tabIndex={-1}>
            {/* Close button */}
            <Button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white border-none"
              size="sm"
              aria-label="Close gallery"
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Navigation buttons */}
            {selectedIndex > 0 && (
              <Button
                onClick={() => navigateGallery(-1)}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white border-none"
                size="sm"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
            )}

            {selectedIndex < items.length - 1 && (
              <Button
                onClick={() => navigateGallery(1)}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white border-none"
                size="sm"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            )}

            {/* Image */}
            <OptimizedImage
              src={items[selectedIndex].src}
              alt={items[selectedIndex].alt}
              width={800}
              height={600}
              className="w-full h-auto max-h-[80vh] object-contain"
              priority
            />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <h2 id="modal-title" className="text-white font-bold text-xl mb-2 font-display">
                {items[selectedIndex].title}
              </h2>
              <p id="modal-description" className="text-white/90 font-serif">
                {items[selectedIndex].description}
              </p>
              <p className="text-white/70 text-sm mt-2">
                {selectedIndex + 1} of {items.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
