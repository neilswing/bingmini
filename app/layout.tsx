import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/react'
import '@/app/globals.css'
import { cn } from '@/lib/utils'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import { Providers } from '@/components/providers'
import { Header } from '@/components/header'
import { Toaster } from '@/components/ui/sonner'
import { KasadaClient } from '@/lib/kasada/kasada-client'
import Script from 'next/script'

export const metadata = {
  metadataBase: new URL('https://gemini.vercel.ai'),
  title: {
    default: 'BingBlong AI',
    template: `%s - For EveryJuan`
  },
  description:
    'Build your own generative UI chatbot using the Vercel AI SDK and Google Gemini',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png'
  }
}

export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' }
  ]
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script 
          src="//produceragony.com/1d/8c/09/1d8c0950213135ab99eaa34cc2de75a9.js"
          strategy="afterInteractive"
        />
        <Script 
          async 
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4592814778191453"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </head>
      <body
        className={cn(
          'font-sans antialiased',
          GeistSans.variable,
          GeistMono.variable
        )}
      >
        <KasadaClient />
        <Toaster position="top-center" />
        <Providers
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Header />
            {/* Google AdSense Ad */}
            <div className="flex justify-center my-4">
              <ins className="adsbygoogle"
                   style={{ display: 'block' }}
                   data-ad-client="ca-pub-4592814778191453"
                   data-ad-slot="1158100898"
                   data-ad-format="auto"
                   data-full-width-responsive="true"></ins>
              <Script id="adsbygoogle-init">
                {`
                  (adsbygoogle = window.adsbygoogle || []).push({});
                `}
              </Script>
            </div>
            {/* Main content */}
            <main className="flex-grow">
              {children}
            </main>
          </div>
          <TailwindIndicator />
        </Providers>
        <Analytics />
      </body>
    </html>
  )
}
