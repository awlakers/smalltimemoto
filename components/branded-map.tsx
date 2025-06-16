"use client"

import { useState } from "react"
import { MapPin, Navigation } from "lucide-react"

export function BrandedMap() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-stone-800 via-stone-900 to-red-900 h-80 group">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-red-500/20 to-transparent transform -skew-x-12 animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(239,68,68,0.1),transparent_50%)]" />
      </div>

      {/* Map grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 400 320">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-stone-400"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Dallas street layout inspired design */}
      <div className="absolute inset-0 p-8">
        {/* Main roads */}
        <div className="absolute top-1/3 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-red-400/60 to-transparent" />
        <div className="absolute top-2/3 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-stone-400/40 to-transparent" />
        <div className="absolute left-1/4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-transparent via-stone-400/40 to-transparent" />
        <div className="absolute left-3/4 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-red-400/60 to-transparent" />

        {/* Workshop location marker */}
        <div
          className="absolute left-3/4 top-1/3 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative">
            {/* Pulsing circle */}
            <div className="absolute inset-0 bg-red-500 rounded-full animate-ping opacity-75" />
            <div className="relative bg-red-600 rounded-full p-3 shadow-lg border-2 border-red-400">
              <MapPin className="h-6 w-6 text-white" />
            </div>

            {/* Tooltip */}
            <div
              className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 transition-all duration-300 ${
                isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2 pointer-events-none"
              }`}
            >
              <div className="bg-stone-900 text-white px-4 py-2 rounded-lg shadow-xl border border-red-400/30 whitespace-nowrap">
                <div className="font-bold text-red-400 font-display">SmallTimeMoto</div>
                <div className="text-sm font-serif">Dallas, TX Workshop</div>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-stone-900" />
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 text-stone-400/60">
          <Navigation className="h-8 w-8" />
        </div>

        {/* Dallas label */}
        <div className="absolute bottom-4 left-4">
          <div className="text-stone-300 font-display text-2xl font-bold opacity-60">DALLAS</div>
          <div className="text-stone-400 font-serif text-sm opacity-80">TEXAS</div>
        </div>

        {/* Coordinates */}
        <div className="absolute top-4 left-4 text-stone-400/60 font-mono text-xs">
          32.7767° N<br />
          96.7970° W
        </div>
      </div>

      {/* Interactive overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Click to view larger map hint */}
      <div className="absolute bottom-2 right-2 text-stone-400/60 text-xs font-serif opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        Click to view in Google Maps
      </div>
    </div>
  )
}
