import 'tailwindcss/tailwind.css'
import '../styles/global.css'

import Footer from 'components/Footer'
import Header from 'components/Header'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { lazy } from 'react'

export interface SharedPageProps {
  draftMode: boolean
  token: string
}

const PreviewProvider = lazy(() => import('components/PreviewProvider'))

export default function App({
  Component,
  pageProps,
}: AppProps<SharedPageProps>) {
  const { draftMode, token } = pageProps
  return (
    <>
      <Header />
      {draftMode ? (
        <PreviewProvider token={token}>
          <Component {...pageProps} />
        </PreviewProvider>
      ) : (
        <Component {...pageProps} />
      )}
      <Footer />
    </>
  )
}
