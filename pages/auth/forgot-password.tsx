import Head from 'next/head'
import Link from 'next/link'
import {SyntheticEvent, useState} from  'react'


export default function Home() {
    
    const [username, setUsername] = useState('');

    var message;
    
    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch("https://api.scantag.co/api/v1/auth/forgotPassword?email=" + username, {
            method: 'POST'
        }).then(function(response) {
            return response.json();
        }).then(function(json) {
            message = json.body;
        });
    }
    
    return (
      
      <div>

        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Login to ScanTag - The Modern Name Tag" />
          <meta name="robots" content="all" />
          <meta name="googlebot" content="all" />
          <title>Login - ScanTag</title>
          <link rel="icon" href="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" />
        </Head>


        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8" style={{backgroundImage: `url(https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/aurora-background4.png)`}}>
            <div className="max-w-md w-full space-y-8 bg-gray-50 rounded-2xl p-10">
                <div>
                <Link href="/">
                    <a>
                        <img className="mx-auto h-100 w-auto" src="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" alt="Workflow"/>
                    </a>
                </Link>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900" style={{fontFamily: "Rubik"}}>
                    Forgot your password?
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    <Link href="/login">
                        <a className="pl-1 font-medium text-orange hover:text-orange-light">
                            I remember my password
                        </a>
                    </Link>
                </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={submit}>
                <input type="hidden" name="remember" value="true"/>
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                    <label htmlFor="username" className="sr-only">Email address</label>
                    <input id="username" name="username" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm" placeholder="Email address" onChange={e => setUsername(e.target.value)}/>
                    </div>
                </div>

                <div>
                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange hover:bg-orange-light rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange">
                        Submit
                    </button>
                </div>
                </form>
            </div>
        </div>


    </div>
  )
}
