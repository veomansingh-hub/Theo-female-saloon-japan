import { useEffect } from 'react'

import { domAnimation, LazyMotion } from 'framer-motion'
import { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

import Head from '@/components/common/head'
import Layout from '@/components/layout'
import { TheomediaDock } from '@/components/layout/TheomediaDock'
import { TheomediaSplash } from '@/components/layout/TheomediaSplash'

import '@/style/main.css'

const App = ({ Component, pageProps, ...props }: AppProps) => {
  // see chrome-bug.css
  useEffect(() => {
    document.body.classList?.remove('loading')
  }, [])

  return (
    <>
      <Head />
      <TheomediaSplash />
      <LazyMotion features={domAnimation}>
        <TheomediaDock />
        <Layout pageProps={pageProps}>
          <Component pageProps={pageProps} />
        </Layout>
      </LazyMotion>
    </>
  )
}

export default appWithTranslation(App)
