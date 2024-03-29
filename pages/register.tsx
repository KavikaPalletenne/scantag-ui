import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {SyntheticEvent, useState} from  'react'
import PasswordStrengthBar from 'react-password-strength-bar';


export default function Register() {
    
    const [errorMessage, setErrorMessage] = useState('Emails do not match');

    const [email, setEmail] = useState('');
    const [confirmEmail, setConfirmEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [userExists, setUserExists] = useState(false);
    const role = "general"

    const router = useRouter()
   

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        var getUserURL = "https://api.scantag.co/v1/users/getByEmail?email=" + email

        setErrorMessage('')

        if(email != confirmEmail) {
            
            document.getElementById("confirmEmailText").className = "text-red-500 text-xs float-right pr-1"
            setErrorMessage('Email does not match')
            
            if(password != confirmPassword) {
                document.getElementById("confirmPasswordText").className = "text-red-500 text-xs float-right pr-1"
            }

            return
        }

        if(password != confirmPassword) {
            document.getElementById("confirmPasswordText").className = "text-red-500 text-xs float-right pr-1"
            return
        }

        await fetch(getUserURL, {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        }).then(function(response) {
            return response.json();
        }).then(function(json) {

            if(json.email != "empty") {
                document.getElementById("confirmEmailText").className = "text-red-500 text-xs float-right pr-1"
                setErrorMessage("User with email already exists")
                setUserExists(true)

                return
            }

            if(json.email == "empty") {
                console.log(JSON.stringify(json))

                router.push({
                    pathname: '/auth/flow/new',
                    query: { email: email, password: password}
                })
            }
        });

    }
    
    return (
      
      <div>

        <Head>
          <meta charSet="utf-8" />
          <meta name="description" content="Sign Up to ScanTag - The Modern Name Tag" />
          <meta name="robots" content="all" />
          <meta name="googlebot" content="all" />
          <title>Sign Up - ScanTag</title>
          <link rel="icon" href="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" />
        </Head>


        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="space-y-8">
                <div>
                <Link href="/">
                    <a>
                        <img className="mx-auto h-100 w-auto" src="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" alt="Workflow"/>
                    </a>
                </Link>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900" style={{fontFamily: "Rubik"}}>
                    Sign up for an account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Or
                    <Link href="/login">
                        <a className="pl-1 font-medium text-orange hover:text-orange-light">
                            sign in to your account
                        </a>
                    </Link>
                </p>
                </div>
                <form className="mt-8 space-y-6" onSubmit={submit}>
                <input type="hidden" name="remember" value="true"/>
                <div className="rounded-md -space-y-px">
                    
                    <div className="pb-5">
                    <label htmlFor="username" className="sr-only">Email address</label>
                    <input id="username" name="username" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm" placeholder="Email address" onChange={e => setEmail(e.target.value)}/>
                    </div>

                    <div>
                    <label htmlFor="confirmEmail" className="sr-only">Confirm email address</label>
                    <input id="confirmEmail" name="confirmEmail" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md rounded-b-md focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm" placeholder="Confirm email address" onChange={e => setConfirmEmail(e.target.value)}/>
                    <p id="confirmEmailText" className="text-transparent text-xs float-right pr-1">{errorMessage}</p>
                    </div>

                    <div className="pb-1 pt-5">
                    <label htmlFor="password" className="sr-only">Password</label>
                    <input id="password" name="password" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md rounded-b-md text-gray-900 focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    <PasswordStrengthBar password={password} />
                    </div>

                    <div>
                    <label htmlFor="confirmPassword" className="sr-only">Confirm password</label>
                    <input id="confirmPassword" name="confirmPassword" type="password" autoComplete="new-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md rounded-b-md text-gray-900 focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm" placeholder="Confirm password" onChange={e => setConfirmPassword(e.target.value)}/>
                    <p id="confirmPasswordText" className="text-transparent text-xs float-right pr-1">Password does not match</p>
                    </div>

                </div>

                <div>
                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange hover:bg-orange-light rounded-3xl focus:outline-none ">
                    Continue
                    </button>
                </div>
                </form>
            </div>
        </div>


    </div>
  )
}
