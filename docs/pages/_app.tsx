import type { AppProps } from 'next/app'
import type { ReactElement } from 'react'
import '../style.css'
import * as NextraThemeDocs from 'nextra-theme-docs';

export default function App({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />
}
