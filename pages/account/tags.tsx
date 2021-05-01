import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {SyntheticEvent, useEffect, useState} from  'react'
import EditTag from '../../components/EditTag'


export default function MyTags() {
       
    return (
      
    <div>
        
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" />
          <title>My Tags - ScanTag</title>
          <link rel="icon" href="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" />
        </Head>

        
        <header>
            
            <div className="md:pt-10 md:pl-32 text-white md:pr-32 pt-10 pl-5 pr-5">
                <Link  href="/account">
                    <a>
                        <img className="float-left md:w-20 w-12" src="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg"/>
                    </a>
                </Link>
                <div className="pt-2">
                    <div>
                    <Link href="/auth/logout">
                        <a className="md:text-xl font-semibold float-right md:rounded-3xl md:pl-6 md:pr-6 md:pt-2 md:pb-2 text-md pl-5 pr-5 pt-2 pb-2 rounded-3xl bg-orange hover:bg-orange-light transition-colors duration-200">Logout</a>
                    </Link>
                    </div>
                    <div className="pr-24 md:pr-32">
                    <Link href="/account">
                        <a className="md:text-xl font-semibold float-right text-md pl-5 pr-5 pt-2 pb-2 text-orange hover:text-orange-light transition-colors duration:200">My Account</a>
                    </Link>
                    </div>
                </div>
            </div>

            
        </header>





        <div className="mt-10 sm:mt-0">
            <EditTag/>
        </div>



    </div>
  )
}
