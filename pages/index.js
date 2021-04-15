import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
      <div className="pl-32" style={{paddingBottom: 170,backgroundImage:`url(https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/aurora-background4.png)`, backgroundRepeat: "stretch", backgroundSize: 1920}}>
        <div className="pt-10 text-white pr-32">
          <Link  href="/">
            <a>
              <img className="float-left" src="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg"/>
            </a>
          </Link>
          <Link href="/register">
            <a className="text-xl font-semibold float-right" style={{borderRadius: 25, backgroundColor: "#FF9369", paddingLeft: 36, paddingRight: 36, paddingTop: 12, paddingBottom: 12}}>Sign Up</a>
          </Link>
          <Link href="/login">
            <a className="text-xl font-semibold float-right pt-3 pr-5">Login</a>
          </Link>
        </div>
        
        <div className="text-white pr-32 inline">
          <h1 className="font-bold sm:text-6xl text-3xl pt-52 pb-5" style={{fontFamily: "Rubik", width: 550}}>The modern name<br/>tag you've been<br/>missing.</h1>
          <h2 className="sm:text-xl pb-10 text-gray-100 text-sm" style={{width: 550}}>The simple way for anyone to assist locating their lost items.</h2>
          
          <Link href="/register">
            <a className="text-3xl font-semibold" style={{borderRadius: 25, backgroundColor: "#FF9369", paddingLeft: 36, paddingRight: 36, paddingTop: 12, paddingBottom: 12}}>Sign Up</a>
          </Link>
          <img className="absolute sm:right-52 bottom-0 sm:w-96 w-52" src="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-mockup-edited2.png"/>
          
        </div>
      </div>
  )
}
