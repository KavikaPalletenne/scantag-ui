import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {SyntheticEvent, useEffect, useState} from  'react'
import CreateTag from '../../../components/CreateTag'


export default function FirstTag() {
    
    return (
      
    <div>
        
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" />
          <title>Create your First Tag - ScanTag</title>
          <link rel="icon" href="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" />
        </Head>

        
        <header>
            
            <div className="md:pt-10 md:pl-32 text-white md:pr-32 pt-10 pl-5 pr-5">    
                <img className="float-left md:w-20 w-12" src="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg"/>                
            </div>

            
        </header>





        <div className="mt-10 sm:mt-0">
            <h1 className="text-2xl pl-24 md:text-4xl md:pt-5 md:pr-20 md:float-right font-medium text-orange" style={{fontFamily: 'Rubik'}}>Create your first tag!</h1>
            <CreateTag/>
        </div>



    </div>
  )
}
