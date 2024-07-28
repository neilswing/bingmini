import { ExternalLink } from '@/components/external-link'

export function EmptyScreen() {
  return (
    <div className="mx-auto max-w-2xl px-4">
      <div className="flex flex-col gap-2 rounded-2xl bg-zinc-50 sm:p-8 p-4 text-sm sm:text-base">
        <h1 className="text-2xl sm:text-3xl tracking-tight font-semibold max-w-fit inline-block">
        BingBlong Chatbot
        </h1>
        <p className="leading-normal text-zinc-900">
        This is an open source AI chatbot app{' '}
        <ExternalLink href="https://www.tiktok.com/@bingblong.com"> Follow us on TikTok</ExternalLink>
          .
        </p>
        <p className="leading-normal text-zinc-900">
          It uses{' '}
          <ExternalLink href="https://www.google.com/">
          Google Server
          </ExternalLink>{' '}
          making it the best Free AI in the market that can help everyJUAN.
        </p>
      </div>
    </div>
  )
}
