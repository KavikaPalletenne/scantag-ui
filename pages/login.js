import Head from 'next/head'
import Link from 'next/link'


export default function Home() {
  return (
      
      <div>

        <Head>
          <meta charset="utf-8" />
          <meta name="description" content="Login to ScanTag - The Modern Name Tag" />
          <meta name="robots" content="all" />
          <meta name="googlebot" content="all" />
          <title>Login - ScanTag</title>
          <link rel="icon" href="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" />
        </Head>


        <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div class="max-w-md w-full space-y-8">
                <div>
                <img class="mx-auto h-100 w-auto" src="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" alt="Workflow"/>
                <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900" style={{fontFamily: "Rubik"}}>
                    Sign in to your account
                </h2>
                <p class="mt-2 text-center text-sm text-gray-600">
                    Or
                    <a href="/register" class="pl-1 font-medium text-orange hover:text-orange-light">
                    sign up for an account
                    </a>
                </p>
                </div>
                <form class="mt-8 space-y-6" action="https://api.scantag.com/api/v1/auth/authenticate" method="POST">
                <input type="hidden" name="remember" value="true"/>
                <div class="rounded-md shadow-sm -space-y-px">
                    <div>
                    <label for="username" class="sr-only">Email address</label>
                    <input id="email-address" name="username" type="email" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm" placeholder="Email address"/>
                    </div>
                    <div>
                    <label for="password" class="sr-only">Password</label>
                    <input id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orange focus:border-orange focus:z-10 sm:text-sm" placeholder="Password"/>
                    </div>
                </div>

                <div class="flex items-center justify-center">

                    <div class="text-sm">
                    <a href="#" class="font-medium text-orange hover:text-orange-light">
                        Forgot your password?
                    </a>
                    </div>
                </div>

                <div>
                    <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange hover:bg-orange-light rounded-3xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange">
                    Sign in
                    </button>
                </div>
                </form>
            </div>
        </div>


    </div>
  )
}
