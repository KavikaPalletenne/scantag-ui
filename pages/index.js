import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
      
      <div>

        <Head>
          <meta charset="utf-8" />
          <meta name="description" content="ScanTag allows you to easily locate your lost items. Whenever someone scans your QR code, we send you a notification. The finder can also see your contact details on your person ScanTag page." />
          <meta name="robots" content="all" />
          <meta name="googlebot" content="all" />
          <title>ScanTag - The Modern Name Tag</title>
          <link rel="icon" href="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" />
        </Head>

        
        <header class="" style={{backgroundImage: `url(https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/aurora-background4.png)`}}>
            
            <div class="md:pt-10 md:pl-32 text-white md:pr-32 pt-10 pl-10 pr-10">
                <Link  href="/">
                    <a>
                        <img class="float-left md:w-20 w-12" src="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg"/>
                    </a>
                </Link>
                <div class="pt-2">
                    <Link href="/register">
                        <a class="md:text-xl font-semibold float-right md:rounded-3xl md:pl-9 md:pr-9 md:pt-3 md:pb-3 text-lg pl-5 pr-5 pt-2 pb-2 rounded-3xl" style={{backgroundColor: "#FF9369"}}>Sign Up</a>
                    </Link>
                    <Link href="/login">
                        <a class="md:text-xl font-semibold float-right md:pt-3 md:pr-5 text-lg pt-2 pr-3">Login</a>
                    </Link>
                </div>
            </div>

            <div class="container md:pl-32 md:pt-32 pt-32 mx-auto pl-10">
                <div class="items-center md:flex">
                    <div class="w-full md:w-1/2">
                        <div class="max-w-xl pr-4">
                            <h1 class="text-3xl font-bold text-white dark:text-white md:text-7xl">The modern name tag you've been missing.</h1>
                            <p class="mt-2 text-gray-300 dark:text-gray-400 pb-10">The simple way for anyone to assist locating their lost items.</p>
                            <Link href="/register">
                                <a class="md:text-xl text-white font-semibold md:rounded-3xl md:pl-9 md:pr-9 md:pt-3 md:pb-3 text-lg pl-5 pr-5 pt-2 pb-2 rounded-3xl" style={{backgroundColor: "#FF9369"}}>Sign Up</a>
                            </Link>
                        </div>
                    </div>
            
                    <div class="flex items-center justify-center md:justify-center pr-10 md:pr-0 md:pl-32">
                        <img class="md:w-96 w-60" src="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-mockup-edited2.png" alt=""/>
                    </div>
                </div>
            </div>
        </header>

        
      </div>
  )
}
