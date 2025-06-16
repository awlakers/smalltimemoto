import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Crimson_Text } from "next/font/google"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const crimson = Crimson_Text({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-crimson",
  display: "swap",
})

export const metadata: Metadata = {
  title: "SmallTimeMoto - Dallas Motorcycle Paint & Restoration",
  description:
    "Expert custom motorcycle painting and vintage restoration in Dallas. High-quality craftsmanship for unique bikes.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${crimson.variable} font-serif`}>{children}</body>
    </html>
  )
}
