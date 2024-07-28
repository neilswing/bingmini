import { UIState } from '@/lib/chat/actions'
import { Session } from '@/lib/types'
import { ExclamationTriangleIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import Script from 'next/script'

export interface ChatList {
  messages: UIState
  session?: Session
  isShared: boolean
}

export function ChatList({ messages, session, isShared }: ChatList) {
  return messages.length ? (
    <div className="relative mx-auto max-w-2xl grid auto-rows-max gap-8 px-4">
      {!isShared && !session ? (
        <>
          <div className="group relative flex items-start md:-ml-12">
            <div className="bg-background flex size-[25px] shrink-0 select-none items-center justify-center rounded-lg border shadow-sm">
              <ExclamationTriangleIcon />
            </div>
            <div className="ml-5 flex-1 space-y-2 overflow-hidden px-1">
              <p className="text-muted-foreground leading-normal">
                Please{' '}
                <Link href="/login" className="underline underline-offset-4">
                  log in
                </Link>{' '}
                or{' '}
                <Link href="/signup" className="underline underline-offset-4">
                  sign up
                </Link>{' '}
                to save and revisit your chat history!
              </p>
            </div>
          </div>
        </>
      ) : null}

      {messages.map(message => (
        <div key={message.id}>
          {message.spinner}
          {message.display}
          {message.attachments}
        </div>
      ))}

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
  ) : null
}
