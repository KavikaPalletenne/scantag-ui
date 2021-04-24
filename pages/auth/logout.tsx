import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
import {SyntheticEvent, useEffect, useState} from  'react'


export default function Login() {
    
    const router = useRouter()

    useEffect(() => {
        
        function Logout() {

            localStorage.removeItem('token')
            localStorage.removeItem('userId')
            
            router.push("/")
        }

        Logout()
    })
    
    
    return (
      
      <div>

        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" />
          <title>Logging out of your account... - ScanTag</title>
          <link rel="icon" href="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" />
        </Head>


        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-md w-full space-y-8">
                <Link href="/">
                    <a>
                        <img className="mx-auto w-28" src="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" alt="Workflow"/>
                    </a>
                </Link>
                <h2 className="mt-6 text-center text-5xl font-extrabold text-gray-900" style={{fontFamily: "Rubik"}}>
                    Logging out of your account...
                </h2>
                       
            </div>
        </div>


    </div>
  )
}