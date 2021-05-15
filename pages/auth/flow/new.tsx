import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {SyntheticEvent, useState} from  'react'


export default function AuthFlowNew() {
    
    const router = useRouter()

    const {email} = router.query
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const {password} = router.query
    const [role, setRole] = useState('general');



    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        
        await fetch("https://api.scantag.co/v1/users/create", {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                'email': email,
                'password': password,
                'firstName': firstName,
                'lastName': lastName,
                'role': 'general'
            })
        })
            
        router.push({
            pathname: '/auth/flow/login',
            query: { email: email, password: password }
        })
        
    }
    
    return (
      
      <div>

        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Sign Up to ScanTag - The Modern Name Tag" />
          <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" />
          <title>Sign Up - ScanTag</title>
          <link rel="icon" href="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" />
        </Head>


        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 ">
            <div className="max-w-md w-full space-y-8">
                <div>
                <Link href="/">
                    <a>
                        <img className="mx-auto h-100 w-auto" src="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" alt="Workflow"/>
                    </a>
                </Link>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900" style={{fontFamily: "Rubik"}}>
                    Continue signing up
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Or
                    <Link href="/">
                        <a className="pl-1 font-medium text-orange hover:text-orange-light">
                            cancel sign up
                        </a>
                    </Link>
                </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={submit}>
                <input type="hidden" name="remember" value="true"/>
                <div className="rounded-md -space-y-px">
                    
                    <div className="pb-2">
                    <p className="text-xs text-gray-400 float-left pl-1">Required</p>
                    <label htmlFor="firstName" className="sr-only">First Name</label>
                    <input id="firstName" name="firstName" type="text" autoComplete="given-name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md rounded-b-md text-gray-900 focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm" placeholder="First Name" onChange={e => setFirstName(e.target.value)}/>
                    </div>

                    <div className="pb-5">
                    <p className="text-xs text-gray-400 float-left pl-1">Required</p>
                    <label htmlFor="lastName" className="sr-only">Last Name</label>
                    <input id="lastName" name="lastName" type="text" autoComplete="family-name" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md rounded-b-md text-gray-900 focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm" placeholder="Last Name" onChange={e => setLastName(e.target.value)}/>
                    </div>

                </div>

                <div>
                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange hover:bg-orange-light rounded-3xl focus:outline-none ">
                    Sign up
                    </button>
                </div>
                </form>
            </div>
        </div>


    </div>
  )
}
