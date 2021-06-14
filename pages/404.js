import Head from 'next/head'
import Link from 'next/link'

export default function Custom404() {
    return (
        <div style={{backgroundImage: `url(https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/aurora-background4.png)`}}>

        <Head>
          <meta charSet="utf-8"/>
          <meta name="description" content="404 Error - Page not found." />
          <meta name="robots" content="all" />
          <meta name="googlebot" content="all" />
          <title>Page not Found - ScanTag</title>
          <link rel="icon" href="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" />
        </Head>

        
        <header className="h-screen min-h-full">
            
            <div className="xl:pt-10 xl:pl-32 text-white xl:pr-32 pt-10 pl-5 pr-5">
                <Link href="/">
                <a>
                    <img className="float-left xl:w-20 w-12" src="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg"/>
                </a>
                </Link>
            </div>

            <div className="container xl:pl-32 xl:pt-48 pt-24 pl-5">
                <div className="items-center xl:flex">
                    <div className="w-full xl:w-2/3">
                        <div className="max-w-2xl pr-4">
                        <h1 className="text-7xl font-bold text-orange dark:text-white xl:text-9xl" style={{fontFamily: 'Rubik'}}>404</h1>
                            <h1 className="text-3xl font-bold text-white dark:text-white xl:text-7xl" style={{fontFamily: 'Rubik'}}>Page not found</h1>
                            <p className="mt-2 xl:text-4xl text-xl text-gray-300 dark:text-gray-400 pb-5">If only it had a ScanTag...</p>
                        </div>
                    </div>
            
                    <div className="fixed bottom-0 right-32">
                        <img className="xl:w-96 w-60 max-h-screen" src="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-mockup-edited2.png" alt=""/>
                    </div>
                </div>
            </div>
        </header>



        </div>
    )
}