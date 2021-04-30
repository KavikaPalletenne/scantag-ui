import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
      
      <div>

        <Head>
          <meta charset="utf-8" />
          <meta name="description" content="ScanTag allows you to easily find your lost items. Whenever someone scans your QR code, we send you a notification. The finder can also see your contact details on your personal ScanTag page." />
          <meta name="robots" content="all" />
          <meta name="googlebot" content="all" />
          <title>ScanTag - Find Your Lost Items Quicker</title>
          <link rel="icon" href="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" />
        </Head>

        
        <header style={{backgroundImage: `url(https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/aurora-background4.png)`}}>
            
            <div className="md:pt-10 md:pl-32 text-white md:pr-32 pt-10 pl-5 pr-5">
                <Link  href="/">
                    <a>
                        <img className="float-left md:w-20 w-12" src="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg"/>
                    </a>
                </Link>
                <div className="pt-2">
                    <Link href="/register">
                        <a className="md:text-xl font-semibold float-right md:rounded-3xl md:pl-6 md:pr-6 md:pt-2 md:pb-2 text-lg pl-5 pr-5 pt-2 pb-2 rounded-3xl bg-orange hover:bg-orange-light transition-colors duration-200">Sign Up</a>
                    </Link>
                    <Link href="/login">
                        <a className="md:text-xl font-semibold float-right md:pt-2 md:pr-5 text-lg pt-2 pr-3">Login</a>
                    </Link>
                </div>
            </div>

            <div className="container md:pl-32 md:pt-28 pt-24 mx-auto pl-5">
                <div className="items-center md:flex">
                    <div className="w-full md:w-1/2">
                        <div className="max-w-2xl pr-4">
                            <h1 className="text-3xl font-bold text-white dark:text-white md:text-7xl" style={{fontFamily: 'Rubik'}}>The modern name tag you've been missing.</h1>
                            <p className="mt-2 md:text-4xl text-xl text-gray-300 dark:text-gray-400 pb-10">Find your lost items quicker.</p>
                            <Link href="/register">
                                <a className="md:text-3xl text-white font-semibold md:rounded-full md:pl-9 md:pr-9 md:pt-3 md:pb-3 text-lg pl-5 pr-5 pt-2 pb-2 rounded-3xl bg-orange hover:bg-orange-light transition-colors duration-200">Sign Up</a>
                            </Link>
                        </div>
                    </div>
            
                    <div className="flex items-center justify-center md:justify-center md:pl-32">
                        <img className="md:w-96 w-60" src="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-mockup-edited2.png" alt=""/>
                    </div>
                </div>
            </div>
        </header>
        
        <section>
            <div className="container max-w-7xl mx-auto pb-20 lg:pb-40 p-4 sm:p-6 pt-20 lg:pt-20 lg:p-8 bg-white dark:bg-gray-800">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full lg:w-1/2 px-8">
                        <div className="mb-12 lg:pt-10 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                            <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading dark:text-white">
                                Ease of use, peace of mind.
                            </h2>
                            <p className="mb-8 leading-loose text-gray-500 dark:text-gray-300">
                                Simply register your account, then input your desired information. Your personalised QR code will then be generated. Use this on anything you wish; your wallet, luggage, even your dog. Whenever someone scans your code, we send you a notification so you know someone's found it.
                            </p>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-8">
                        <ul className="space-y-12">
                            <li className="flex -mx-4">
                                <div className="px-4">
                                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full" style={{backgroundColor: "#ffebe3", color: "#FF9369"}}>
                                        1
                                    </span>
                                </div>
                                <div className="px-4">
                                    <h3 className="my-1 text-xl font-semibold dark:text-white">
                                        Easily customise your information at anytime, on any device.
                                    </h3>
                                </div>
                            </li>
                            <li className="flex -mx-4">
                                <div className="px-4">
                                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full" style={{backgroundColor: "#ffebe3", color: "#FF9369"}}>
                                        2
                                    </span>
                                </div>
                                <div className="px-4">
                                    <h3 className="my-1 text-xl font-semibold dark:text-white">
                                        With no upfront costs, you only pay when you need stickers.
                                    </h3>
                                </div>
                            </li>
                            <li className="flex -mx-4">
                                <div className="px-4">
                                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full" style={{backgroundColor: "#ffebe3", color: "#FF9369"}}>
                                        3
                                    </span>
                                </div>
                                <div className="px-4">
                                    <h3 className="my-1 text-xl font-semibold dark:text-white">
                                        We keep your private and personal information locked and secure. 
                                    </h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
        
        <footer className="dark:bg-gray-800 w-full py-8" style={{backgroundColor: "#FF9369"}}>
            <div className="max-w-screen-xl mx-auto px-4">
                <ul className="max-w-screen-md mx-auto text-lg font-light flex flex-wrap justify-between">
                    <li className="my-2">
                        <a className="text-white hover:text-gray-200 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="/faq">
                            FAQ
                        </a>
                    </li>
                    <li className="my-2">
                        <a className="text-white hover:text-gray-200 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="/site-map">
                            Site Map
                        </a>
                    </li>
                    <li className="my-2">
                        <a className="text-white hover:text-gray-200 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="/contact">
                            Contact
                        </a>
                    </li>
                    <li className="my-2">
                        <a className="text-white hover:text-gray-200 dark:text-gray-300 dark:hover:text-white transition-colors duration-200" href="/legal">
                            Legal
                        </a>
                    </li>
                </ul>
                
                <div className="text-center text-white dark:text-gray-200 pt-10 sm:pt-12 font-light flex items-center justify-center">
                    Created by <a href="/about/team" className="pl-1 hover:text-gray-200 transition-colors duration-200">the ScanTag Team</a>
                </div>
            </div>
        </footer>

      </div>
  )
}
