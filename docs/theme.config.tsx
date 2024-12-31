import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { Link, useConfig } from 'nextra-theme-docs'
import { AppLogo } from '@components/logo'

const logo = (
  <AppLogo />
)

const config: DocsThemeConfig = {
  banner: {
    key: '3.0-release',
    content: (
      <div className='before:content-["🎉_"]'>
        Join Insihts For Free{' '}
        <Link
          href="https://insihts.com/auth/sign-up"
          className='after:content-["_→"]'
        >
          Sign-Up
        </Link>
      </div>
    )
  },
  chat: {
    link: 'https://discord.gg/A8HQH6DW'
  },
  project: {
    link: 'https://x.com/insihts',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path fill="currentColor" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  },
  // docsRepositoryBase: 'https://github.com/shuding/nextra/tree/main/docs',
  logo,
  head: function useHead() {
    const config = useConfig()
    const { route } = useRouter()
    const isDefault = route === '/' || !config.title
    const image =
      'https://nextra.site/' +
      (isDefault ? 'og.jpeg' : `/og?title=${config.title}`)

    const description =
      config.frontMatter.description ||
      'Make beautiful websites with Next.js & MDX.'
    const title = config.title + (route === '/' ? '' : ' - Nextra')

    return (
      <>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        <meta name="msapplication-TileColor" content="#fff" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site:domain" content="nextra.site" />
        <meta name="twitter:url" content="https://nextra.site" />
        <meta name="apple-mobile-web-app-title" content="Nextra" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  editLink: {
    content: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
    toggleButton: true
  },
  footer: {
    content: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Insihts, Corp.
        </p>
      </div>
    )
  }
}

export default config
