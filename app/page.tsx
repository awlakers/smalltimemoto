import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BeforeAfterSlider } from "@/components/before-after-slider"
import { MobileNav } from "@/components/mobile-nav"
import { OptimizedImage } from "@/components/optimized-image"
import { AnimatedSection } from "@/components/animated-section"
import { AccessibleGallery } from "@/components/accessible-gallery"
import { ErrorBoundary } from "@/components/error-boundary"
import { Paintbrush, Wrench, Camera, Phone, Mail, MapPin, Clock } from "lucide-react"
import { BrandedMap } from "@/components/branded-map"

const galleryItems = [
  {
    id: 1,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Restored%20Motorcycle%20Fender%20in%20Detail-HWSKRjzbzLxK1g94cPO49UboV8L1ed.png",
    alt: "Restored motorcycle fender detail",
    title: "Deep Burgundy Finish",
    description: "Hand-laid gold pinstriping on deep burgundy paint with mirror finish",
  },
  {
    id: 2,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Yamaha%20RZ350%20parts%20%281%29.jpg-dNT5uXhNiQVOlVQR5F0MlDVJsahSSj.jpeg",
    alt: "Yamaha RZ350 Racing Livery",
    title: "Yamaha RZ350 Kenny Roberts Replica",
    description: "Iconic yellow and black racing livery with precision graphics",
  },
  {
    id: 3,
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1955%20NSU%20Max%20250.jpg-puTBtXFXNmXDdWmqcZVGb2lpRV30bp.jpeg",
    alt: "1955 NSU Max 250 Restoration",
    title: "1955 NSU Max 250",
    description: "Complete vintage restoration in original blue and cream colors",
  },
]

export default function HomePage() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-stone-50">
        {/* Skip to main content link for screen readers */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-yellow-500 text-black px-4 py-2 rounded font-serif z-50"
        >
          Skip to main content
        </a>

        {/* Navigation */}
        <MobileNav />

        {/* Main Content */}
        <main id="main-content">
          {/* Hero Section */}
          <section
            className="relative bg-cover bg-center bg-no-repeat text-stone-100 py-16 sm:py-24 lg:py-32 px-4 sm:px-6 min-h-[70vh] sm:min-h-[80vh] flex items-center parallax-bg"
            style={{
              backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1973%20Ducati%20Sport%20%282%29.jpg-mHf58xFnA51EETljQW9Nk67XvHUx53.jpeg')`,
            }}
            role="banner"
            aria-label="SmallTimeMoto hero section"
          >
            {/* Dark gradient overlay for text readability */}
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50"
              aria-hidden="true"
            ></div>
            <div
              className="absolute inset-0 bg-gradient-to-t from-red-900/60 via-transparent to-black/40"
              aria-hidden="true"
            ></div>

            <div className="relative max-w-7xl mx-auto w-full">
              <div className="max-w-4xl">
                <AnimatedSection className="space-y-6 sm:space-y-8">
                  <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight font-display text-shadow-lg">
                    MASTER CRAFTED
                    <span className="block text-stone-200">MOTORCYCLE</span>
                    <span className="block text-yellow-400 drop-shadow-lg">FINISHES</span>
                  </h1>
                  <p className="text-lg sm:text-xl lg:text-2xl text-stone-100 leading-relaxed max-w-2xl font-serif text-shadow-md">
                    Transforming rides with unparalleled artistry and meticulous attention to detail. SmallTimeMoto is
                    Dallas's destination for bespoke custom motorcycle painting and concourse-level vintage restoration.
                  </p>
                  <Link href="/contact">
                    <Button
                      size="lg"
                      className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 sm:px-10 py-4 sm:py-5 text-lg sm:text-xl font-serif shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
                      aria-label="Contact us to start your motorcycle project"
                    >
                      LET'S TALK
                    </Button>
                  </Link>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Welcome Section */}
          <section className="py-16 sm:py-20 px-4 sm:px-6 bg-stone-100" aria-labelledby="welcome-heading">
            <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
              <AnimatedSection>
                <h2 id="welcome-heading" className="text-3xl sm:text-4xl font-bold text-stone-900 font-display">
                  More Than Metal: It's a Legacy
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <p className="text-base sm:text-lg text-stone-700 leading-relaxed font-serif">
                  At SmallTimeMoto, we believe every classic and vintage motorcycle holds a story waiting to be told, a
                  heritage yearning to shine. Nestled in Dallas, TX, our boutique workshop is dedicated to the art of
                  motorcycle transformation. With meticulous care, unparalleled craftsmanship, and a deep respect for
                  the golden era of two wheels, we bring your vision to life.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Before/After Transformation */}
          <section className="py-16 sm:py-20 px-4 sm:px-6 bg-white" aria-labelledby="transformation-heading">
            <div className="max-w-7xl mx-auto">
              <AnimatedSection>
                <div className="text-center mb-12 sm:mb-16">
                  <h2
                    id="transformation-heading"
                    className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4 font-display"
                  >
                    Witness the Transformation
                  </h2>
                  <p className="text-lg sm:text-xl text-stone-700 font-serif">
                    From weathered classic to stunning masterpiece
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <div className="max-w-4xl mx-auto">
                  <ErrorBoundary>
                    <BeforeAfterSlider
                      beforeImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moto-before.jpg-EduPxG15hAE3arXMN0cTF8IBYHuQg5.jpeg"
                      afterImage="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/moto-after.jpg-XWIqUzHwH2LfOR82ODw4oxq0t6LqnU.jpeg"
                      beforeAlt="BSA Motorcycle Before Restoration - weathered condition"
                      afterAlt="BSA Motorcycle After Restoration - pristine condition"
                    />
                  </ErrorBoundary>
                  <p className="text-center mt-6 text-stone-600 font-serif italic text-sm sm:text-base">
                    Drag the slider to see the complete transformation of this classic BSA motorcycle
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Services Overview */}
          <section className="py-16 sm:py-20 px-4 sm:px-6 bg-stone-50" aria-labelledby="services-heading">
            <div className="max-w-7xl mx-auto">
              <AnimatedSection>
                <div className="text-center mb-12 sm:mb-16">
                  <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-stone-900 mb-4 font-display">
                    Dedicated to the Craft
                  </h2>
                </div>
              </AnimatedSection>

              <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                <AnimatedSection animation="slideInLeft" delay={200}>
                  <Card className="bg-white border-stone-200 hover:shadow-xl transition-all duration-300 hover-lift h-full">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                        <div className="bg-red-100 p-3 rounded-full mb-4 sm:mb-0 sm:mr-4 self-start" aria-hidden="true">
                          <Paintbrush className="h-6 w-6 sm:h-8 sm:w-8 text-red-700" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display">
                          Bespoke Custom Painting
                        </h3>
                      </div>
                      <div className="mb-6">
                        <OptimizedImage
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Craftsman%20Adding%20Gold%20Pinstripes-8hOOl1zr1NIagJYusJskCmaKWKdZNH.png"
                          alt="Craftsman carefully adding gold pinstripes to motorcycle tank"
                          width={400}
                          height={250}
                          className="w-full h-40 sm:h-48 object-cover rounded-lg"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <p className="text-stone-700 mb-6 leading-relaxed font-serif text-sm sm:text-base">
                        From subtle elegance to wild custom designs. We use only the finest materials for a lasting,
                        show-quality finish that truly reflects your vision.
                      </p>
                      <Link href="/services">
                        <Button
                          variant="outline"
                          className="border-red-700 text-red-700 hover:bg-red-700 hover:text-white font-serif w-full sm:w-auto focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                          aria-label="Learn more about our custom painting services"
                        >
                          Learn More About Painting
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </AnimatedSection>

                <AnimatedSection animation="slideInRight" delay={400}>
                  <Card className="bg-white border-stone-200 hover:shadow-xl transition-all duration-300 hover-lift h-full">
                    <CardContent className="p-6 sm:p-8">
                      <div className="flex flex-col sm:flex-row sm:items-center mb-6">
                        <div className="bg-red-100 p-3 rounded-full mb-4 sm:mb-0 sm:mr-4 self-start" aria-hidden="true">
                          <Wrench className="h-6 w-6 sm:h-8 sm:w-8 text-red-700" />
                        </div>
                        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 font-display">
                          Meticulous Vintage Restoration
                        </h3>
                      </div>
                      <div className="mb-6">
                        <OptimizedImage
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Vintage%20Motorcycle%20Workshop%20in%20Action-KHDnL031FMxjEV31MiS1fv4J2AVEAw.png"
                          alt="Vintage motorcycle workshop with craftsman working on Vincent engine"
                          width={400}
                          height={250}
                          className="w-full h-40 sm:h-48 object-cover rounded-lg"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </div>
                      <p className="text-stone-700 mb-6 leading-relaxed font-serif text-sm sm:text-base">
                        Bringing classic motorcycles back to their original glory. Our passion for heritage and
                        precision ensures a faithful and stunning restoration.
                      </p>
                      <Link href="/services">
                        <Button
                          variant="outline"
                          className="border-red-700 text-red-700 hover:bg-red-700 hover:text-white font-serif w-full sm:w-auto focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                          aria-label="Learn more about our vintage restoration services"
                        >
                          Explore Restoration
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Gallery Preview */}
          <section
            className="py-16 sm:py-20 px-4 sm:px-6 bg-stone-900 text-stone-100"
            aria-labelledby="gallery-heading"
          >
            <div className="max-w-7xl mx-auto">
              <AnimatedSection>
                <div className="text-center mb-12 sm:mb-16">
                  <h2 id="gallery-heading" className="text-3xl sm:text-4xl font-bold mb-4 font-display">
                    Featured Masterpieces
                  </h2>
                  <p className="text-lg sm:text-xl text-stone-300 font-serif">
                    Every motorcycle that leaves our Dallas workshop carries our commitment to excellence.
                  </p>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={300}>
                <ErrorBoundary>
                  <AccessibleGallery items={galleryItems} className="mb-8 sm:mb-12" />
                </ErrorBoundary>
              </AnimatedSection>

              <AnimatedSection delay={500}>
                <div className="text-center">
                  <Link href="/gallery">
                    <Button
                      size="lg"
                      className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 font-serif hover-lift focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
                      aria-label="View our complete gallery of motorcycle projects"
                    >
                      <Camera className="mr-2 h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                      VIEW FULL GALLERY
                    </Button>
                  </Link>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Call to Action */}
          <section className="py-16 sm:py-20 px-4 sm:px-6 bg-red-900 text-stone-100" aria-labelledby="cta-heading">
            <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
              <AnimatedSection>
                <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold font-display">
                  Ready to Transform Your Ride?
                </h2>
              </AnimatedSection>
              <AnimatedSection delay={200}>
                <p className="text-lg sm:text-xl text-stone-200 font-serif">
                  Whether you have a clear vision or are seeking inspiration, we're here to discuss your project. Let's
                  talk about how SmallTimeMoto can bring your classic motorcycle to its full glory.
                </p>
              </AnimatedSection>
              <AnimatedSection delay={400}>
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 text-lg font-serif hover-lift focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2"
                    aria-label="Contact SmallTimeMoto to start your motorcycle project"
                  >
                    LET'S TALK
                  </Button>
                </Link>
              </AnimatedSection>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-stone-900 text-stone-300 py-12 sm:py-16 px-4 sm:px-6" role="contentinfo">
          <div className="max-w-7xl mx-auto">
            {/* Main Footer Content */}
            <div className="grid gap-8 lg:grid-cols-4 md:grid-cols-2 mb-8">
              {/* Company Info */}
              <div className="lg:col-span-1">
                <Link href="/">
                  <OptimizedImage
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/smt-logo-wb.JPG-98Z0xFj3UKDiWchmJUNzS5YhMdBtzV.jpeg"
                    alt="SmallTimeMoto logo"
                    width={180}
                    height={60}
                    className="h-12 w-auto mb-6 hover:opacity-80 transition-opacity"
                  />
                </Link>
                <p className="text-stone-400 font-serif text-sm leading-relaxed mb-6">
                  Boutique motorcycle painting and restoration in Dallas, TX. Where classic meets craftsmanship.
                </p>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com/smalltimemoto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-stone-800"
                    aria-label="Follow us on Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  <a
                    href="https://facebook.com/smalltimemoto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-stone-800"
                    aria-label="Follow us on Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://youtube.com/@smalltimemoto"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-stone-400 hover:text-red-400 transition-colors p-2 rounded-lg hover:bg-stone-800"
                    aria-label="Subscribe to our YouTube channel"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <nav className="lg:col-span-1" aria-label="Footer navigation">
                <h3 className="text-white font-bold mb-6 font-display text-lg">Quick Links</h3>
                <div className="space-y-3">
                  <Link
                    href="/services"
                    className="block hover:text-red-400 transition-colors font-serif text-sm hover:translate-x-1 transform duration-200"
                  >
                    Our Services
                  </Link>
                  <Link
                    href="/gallery"
                    className="block hover:text-red-400 transition-colors font-serif text-sm hover:translate-x-1 transform duration-200"
                  >
                    Project Gallery
                  </Link>
                  <Link
                    href="/about"
                    className="block hover:text-red-400 transition-colors font-serif text-sm hover:translate-x-1 transform duration-200"
                  >
                    About SmallTimeMoto
                  </Link>
                  <Link
                    href="/contact"
                    className="block hover:text-red-400 transition-colors font-serif text-sm hover:translate-x-1 transform duration-200"
                  >
                    Get In Touch
                  </Link>
                  <Link
                    href="/contact"
                    className="block hover:text-red-400 transition-colors font-serif text-sm hover:translate-x-1 transform duration-200"
                  >
                    Request Quote
                  </Link>
                  <Link
                    href="/contact"
                    className="block hover:text-red-400 transition-colors font-serif text-sm hover:translate-x-1 transform duration-200"
                  >
                    Workshop Tours
                  </Link>
                </div>
              </nav>

              {/* Services */}
              <div className="lg:col-span-1">
                <h3 className="text-white font-bold mb-6 font-display text-lg">Our Expertise</h3>
                <div className="space-y-3">
                  <div className="text-stone-400 font-serif text-sm">Custom Paint Jobs</div>
                  <div className="text-stone-400 font-serif text-sm">Vintage Restoration</div>
                  <div className="text-stone-400 font-serif text-sm">Hand Pinstriping</div>
                  <div className="text-stone-400 font-serif text-sm">Gold Leaf Work</div>
                  <div className="text-stone-400 font-serif text-sm">Clear Coat Finishing</div>
                  <div className="text-stone-400 font-serif text-sm">Color Matching</div>
                </div>
              </div>

              {/* Contact & Hours */}
              <div className="lg:col-span-1">
                <h3 className="text-white font-bold mb-6 font-display text-lg">Workshop Info</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <a
                        href="tel:+12145556686"
                        className="font-serif text-sm hover:text-red-400 transition-colors block"
                        aria-label="Call SmallTimeMoto"
                      >
                        (214) 555-MOTO
                      </a>
                      <span className="text-xs text-stone-500">Mon-Fri 9AM-5PM</span>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Mail className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <a
                      href="mailto:info@smalltimemoto.com"
                      className="font-serif text-sm hover:text-red-400 transition-colors"
                      aria-label="Email SmallTimeMoto"
                    >
                      info@smalltimemoto.com
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="font-serif text-sm">
                      <div>Mon-Fri: 9:00 AM - 5:00 PM</div>
                      <div>Sat-Sun: By Appointment</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="font-serif text-sm">
                      <div>Dallas, TX</div>
                      <div className="text-xs text-stone-500">Workshop visits by appointment</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Section */}
            <div className="mb-8">
              <h3 className="text-white font-bold mb-6 font-display text-lg">Find Our Workshop</h3>
              <a
                href="https://maps.google.com/?q=Dallas,TX"
                target="_blank"
                rel="noopener noreferrer"
                className="block cursor-pointer"
                aria-label="View SmallTimeMoto location on Google Maps"
              >
                <BrandedMap />
              </a>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-stone-700 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                <p className="font-serif text-sm text-center md:text-left">
                  &copy; 2025 SmallTimeMoto. All Rights Reserved. Dallas, TX.
                </p>
                <div className="flex space-x-6 text-sm">
                  <a href="#" className="hover:text-red-400 transition-colors font-serif">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-red-400 transition-colors font-serif">
                    Terms of Service
                  </a>
                  <a href="#" className="hover:text-red-400 transition-colors font-serif">
                    Sitemap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </ErrorBoundary>
  )
}
