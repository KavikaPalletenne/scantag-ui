import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router';
import {SyntheticEvent, useEffect, useState} from  'react'


export default function Login() {
    
    const router = useRouter()

    var [jwt, setJwt] = useState('');

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const {email} = router.query
    const {password} = router.query

    const [userId, setUserId] = useState('')

    var tempFirstName
    var tempLastName
    var tempUserId

    useEffect(() => {
        
        let isMounted = true

        var tempJwt

        function Login() {
            
            
            if(email != null && password != null) {
                
                fetch("https://api.scantag.co/api/v1/auth/authenticate", {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        'username': email,
                        'password': password
                    })
                }).then(function(response) {
                    return response.json();
                }).then(function(json) {  
                    if(isMounted) {
                    if(json.jwt == null) {
                        router.push("/login")
                        return
                    }

                    localStorage.setItem('token', json.jwt)
                    setJwt(json.jwt)
                    tempJwt = json.jwt
                    }
                });

            }
        }
        
        async function getUser() {

            await fetch("https://api.scantag.co/api/v1/users/get/current", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': bearer
                }
            }).then(function(response) {                
                if(response.ok == false) {
                    router.push({
                        pathname: '/login',
                        query: { autologin: false }
                    })
                    isMounted = false
                }
                if(isMounted) {
                return response.json();
                }
            }).then(function(json) {  
                if(isMounted) {


                    setUserId(json.userId)
                    setFirstName(json.firstName)
                    setLastName(json.lastName)
                    localStorage.setItem('userId', json.userId)
                    
                    tempUserId = json.userId
                    tempFirstName = json.firstName
                    tempLastName = json.lastName

                    router.push({
                        pathname: "/auth/flow/first-tag",
                        query: { userId: tempUserId, email: email, firstName: tempFirstName, lastName: tempLastName}
                    })
                }
            });
            
        }

        Login()

        var bearer = 'Bearer ' + tempJwt

        getUser()
        

        return () => { isMounted=false }
    }, [])
    
    
    return (
      
      <div>

        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" />
          <title>Logging you in... - ScanTag</title>
          <link rel="icon" href="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" />
        </Head>


        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
            <div className="max-w-md w-full space-y-8">
                <Link href="/">
                    <a>
                        <img className="mx-auto w-28" src="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" alt="Workflow"/>
                    </a>
                </Link>
                <h2 className="mt-6 text-center text-5xl font-extrabold text-gray-900" style={{fontFamily: "Rubik"}}>
                    Logging you in...
                </h2>
                       
            </div>
        </div>


    </div>
  )
}