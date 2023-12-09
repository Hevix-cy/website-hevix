import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export default function NotFound() {
  return (
    <Container className="flex h-full items-center pt-24 sm:pt-32 lg:pt-40">
      <FadeIn className="flex max-w-xl flex-col items-center text-center">
        <h1 className="mt-4 font-display text-2xl font-semibold text-neutral-950">
        Thank You! Your Message Has Been Received
        </h1>
        <p className="mt-2 text-sm text-neutral-600">
        We appreciate you getting in touch with us. One of our team members will review your message and get back to you shortly.

In the meantime, feel free to continue browsing our site for more information.

Have a wonderful day!
        </p>
        <Link
          href="/"
          className="mt-4 text-sm font-semibold text-neutral-950 transition hover:text-neutral-700"
        >
          Go to the home page
        </Link>
      </FadeIn>
    </Container>
  )
}
