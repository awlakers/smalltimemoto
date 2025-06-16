"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  beforeAlt: string
  afterAlt: string
}

export function BeforeAfterSlider({ beforeImage, afterImage, beforeAlt, afterAlt }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50)

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  return (
    <div className="relative w-full h-64 sm:h-80 md:h-96 overflow-hidden rounded-lg shadow-xl bg-stone-200 hover-lift">
      {/* After Image (Background) */}
      <div className="absolute inset-0">
        <Image src={afterImage || "/placeholder.svg"} alt={afterAlt} fill className="object-cover" />
      </div>

      {/* Before Image (Overlay that gets clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}>
        <Image src={beforeImage || "/placeholder.svg"} alt={beforeAlt} fill className="object-cover" />
      </div>

      {/* Slider Line */}
      <div className="absolute top-0 bottom-0 w-1 bg-white shadow-lg z-10" style={{ left: `${sliderPosition}%` }}>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-red-700 rounded-full"></div>
        </div>
      </div>

      {/* Slider Input */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-col-resize z-20"
        aria-label="Drag to compare before and after restoration"
      />

      {/* Labels */}
      <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 bg-black/70 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold">
        BEFORE
      </div>
      <div className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 bg-black/70 text-white px-2 sm:px-3 py-1 rounded text-xs sm:text-sm font-semibold">
        AFTER
      </div>
    </div>
  )
}
