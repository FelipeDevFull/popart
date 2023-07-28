import type { AppProps } from 'next/app'
import {Router} from 'next/router'
import { useState, useEffect } from 'react';
import { ApolloProvider } from "@apollo/client"
import { client } from "@/lib/apollo"
import '../styles/globals.css'


import Loading from '../components/loading';


export default function App({ Component, pageProps }: AppProps) {

  const [isLoading, setIsLoading] = useState(false);
  
  useEffect(() => {
    Router.events.on("routeChangeStart", (url)=>{
      setIsLoading(true)
    });
  
    Router.events.on("routeChangeComplete", (url)=>{
      setIsLoading(false)
    });
  
    Router.events.on("routeChangeError", (url) =>{
      setIsLoading(false)
    });
  
  }, [Router])
  
  
  return (
    <ApolloProvider client={client}>
      <main>
      {isLoading && <Loading/>}
        <Component {...pageProps} />
      </main>
    </ApolloProvider>  
  )
}
