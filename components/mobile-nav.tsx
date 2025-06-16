"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => setIsOpen(!isOpen)

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const navItems = [
    { href: "/", label: "HOME" },
    { href: "/services", label: "SERVICES" },
    { href: "/gallery", label: "GALLERY" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ]

  return (
    <>
      {/* Desktop & Mobile Navigation Bar */}
      <nav className="bg-stone-900 text-stone-100 px-4 sm:px-6 py-4 relative z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center z-50 relative">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smt-logo-wb.JPG-98Z0xFj3UKDiWchmJUNzS5YhMdBtzV.jpeg"
              alt="SmallTimeMoto"
              width={180}
              height={60}
              className="h-10 sm:h-12 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-red-400 transition-colors font-medium font-serif relative group ${
                  pathname === item.href ? "text-red-400" : ""
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-400 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-stone-800 transition-all duration-200 z-50 relative flex items-center justify-center"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span
                className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-30 transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-stone-900/95 backdrop-blur-md transition-all duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={toggleMenu}
        />

        {/* Menu Content */}
        <div
          className={`relative h-full flex flex-col transition-all duration-500 ease-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Header Space */}
          <div className="h-20" />

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-center px-8 space-y-8">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={toggleMenu}
                className={`text-4xl font-bold text-center transition-all duration-300 hover:text-red-400 font-serif relative group ${
                  pathname === item.href ? "text-red-400" : "text-white"
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 100}ms` : "0ms",
                  transform: isOpen ? "translateY(0)" : "translateY(20px)",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                {item.label}
                <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-red-400 transition-all duration-300 group-hover:w-16"></span>
              </Link>
            ))}
          </div>

          {/* Footer Info */}
          <div
            className="px-8 pb-8 text-center space-y-4"
            style={{
              transitionDelay: isOpen ? "500ms" : "0ms",
              transform: isOpen ? "translateY(0)" : "translateY(20px)",
              opacity: isOpen ? 1 : 0,
              transition: "all 0.3s ease-out",
            }}
          >
            <div className="text-stone-300 font-serif">
              <p className="text-lg font-semibold">Dallas, TX</p>
              <p className="text-sm">(214) 555-MOTO</p>
              <p className="text-sm">info@smalltimemoto.com</p>
            </div>
            <div className="flex justify-center space-x-6 pt-4">
              <a href="#" className="text-stone-400 hover:text-red-400 transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-stone-400 hover:text-red-400 transition-colors" aria-label="Facebook">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
