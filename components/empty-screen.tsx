import { ExternalLink } from '@/components/external-link'
import Script from 'next/script'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-2xl bg-zinc-50 sm:p-8 p-4 text-sm sm:text-base">
        <h1 className="text-2xl sm:text-3xl tracking-tight font-semibold max-w-fit inline-block">
          BingBlong Chatbot
        </h1>
        <p className="leading-normal text-zinc-900">
          This is an open source AI chatbot app{' '}
          <ExternalLink href="https://www.tiktok.com/@bingblong.com">
            Follow us on TikTok
          </ExternalLink>
          .
        </p>
        <p className="leading-normal text-zinc-900">
          It uses{' '}
          <ExternalLink href="https://www.google.com/">
            Google Server
          </ExternalLink>{' '}
          making it the best Free AI in the market that can help everyJUAN.
        </p>

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
      </div>
    </div>
  )
}
