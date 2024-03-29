import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
    
    return (
      
      <div>

        <Head>
          <meta charset="utf-8" />
          <meta name="description" content="ScanTag allows you to easily find your lost items. Stick your tag on a book, phone, or anything else and help people return it to you easily." />
          <meta name="robots" content="all" />
          <meta name="googlebot" content="all" />
          <title>ScanTag Beta</title>
          <link rel="icon" href="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" />
        </Head>

        
        <header className="pt-10 xl:pl-10 xl:pr-10 pl-5 pr-5">
            
            <div className="xl:pb-28 pb-16">
            <Link  href="/">
                <a>
                    <img className="float-left md:w-20 w-12" src="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg"/>
                </a>
            </Link>
            </div>

            <h1 style={{fontFamily: 'Rubik'}} className="text-2xl font-bold">
            About the Beta
            </h1>
            
            <h1 style={{fontFamily: 'Rubik'}} className="text-xl">
            While using this beta, the privacy of your data is not guaranteed.
            ScanTag does not take any responsibility for data breaches and does not adhere to GDPR standards. Breaking changes
            are often implemented, and your account will thus be deleted. This beta is intended for
            internal use only and anyone using this does so with the knowledge of the above.
            </h1>

            <h1 style={{fontFamily: 'Rubik'}} className="text-2xl font-medium">
            If you would like to use ScanTag, please <a href="https://www.scantag.co" style={{textDecorationLine: 'underline'}}>sign up to our mailing list</a> to be notified when we launch. 
            </h1>
        </header>
        

      </div>
  )
}
