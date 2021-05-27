import Head from 'next/head'
import Link from 'next/link'



export default function ForgotPasswordSuccess() {
    
    return (
      
      <div>

        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" />
          <title>Success! - Forgot Password</title>
          <link rel="icon" href="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" />
        </Head>


        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-md w-full space-y-8">
                <div>
                <Link href="/">
                    <a>
                        <img className="mx-auto h-100 w-auto" src="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" alt="Workflow"/>
                    </a>
                </Link>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900" style={{fontFamily: "Rubik"}}>
                    Success!
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                        <a className="pl-1 text-xl">
                        If your email has been used to register an account, a reset password link has been sent to your email.
                        </a>
                    
                    <Link href="/login">
                        <a className="pl-1 font-medium text-orange hover:text-orange-light">
                            Back to Login
                        </a>
                    </Link>
                </p>
                </div>
                
            </div>
        </div>


    </div>
  )
}
