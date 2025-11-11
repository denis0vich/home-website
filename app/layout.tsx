import type { Metadata } from 'next'
import './globals.css'
import GlobalPageTransition from '@/components/GlobalPageTransition'
import PageContentFade from '@/components/PageContentFade'
import { ImageLightboxProvider } from '@/components/ImageLightbox'

export const metadata: Metadata = {
  title: 'The Haven - Dream Homes',
  description: 'An exploration of how our deepest emotional wells become the true foundation of our perfect sanctuary. A production thesis exploring Generation Z\'s conceptualization of the "dream home" in Metro Manila.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className="h-full">
        <ImageLightboxProvider>
          <GlobalPageTransition />
          <PageContentFade>{children}</PageContentFade>
        </ImageLightboxProvider>
      </body>
    </html>
  )
}

