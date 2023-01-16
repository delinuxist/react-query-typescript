import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Layout/Navbar'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import { useState, useEffect } from 'react'

export const queryClient = new QueryClient;

const App = ({ Component, pageProps }: AppProps) => {
  const [isSSR, setISSR] = useState(true);

  useEffect(() => {
    setISSR(false)
  }, [])
  if (isSSR) return null;

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ReactQueryDevtools position='bottom-right' />
          <Navbar />
          <Component {...pageProps} />
        </Hydrate>
      </QueryClientProvider>
    </>
  )
}


export default App;