'use client'

import { ComponentProps, MouseEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type TransitionLinkProps = Omit<ComponentProps<typeof Link>, 'onClick' | 'href'> & {
  href: ComponentProps<typeof Link>['href']
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void
  skipTransition?: boolean
}

function resolveHref(href: TransitionLinkProps['href']): string {
  if (typeof href === 'string') {
    return href
  }
  const pathname = href.pathname ?? ''
  const search = href.search ?? ''
  const hash = href.hash ?? ''
  return `${pathname}${search}${hash}`
}

function isExternalLink(href: string) {
  return (
    href.startsWith('http://') ||
    href.startsWith('https://') ||
    href.startsWith('mailto:') ||
    href.startsWith('tel:') ||
    href.startsWith('#')
  )
}

export default function TransitionLink({
  href,
  onClick,
  skipTransition = false,
  replace,
  scroll,
  ...rest
}: TransitionLinkProps) {
  const router = useRouter()

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event)
    if (event.defaultPrevented) return
    if (event.button !== 0 || event.metaKey || event.altKey || event.ctrlKey || event.shiftKey) {
      return
    }

    const hrefString = resolveHref(href)
    if (skipTransition || isExternalLink(hrefString)) {
      return
    }

    event.preventDefault()

    const navigate = () => {
      if (replace) {
        router.replace(hrefString, { scroll })
      } else {
        router.push(hrefString, { scroll })
      }
    }

    const transitionEvent = new CustomEvent('global-page-transition', {
      detail: { navigate },
    })
    window.dispatchEvent(transitionEvent)
  }

  return (
    <Link {...rest} href={href} replace={replace} scroll={scroll} onClick={handleClick} />
  )
}


