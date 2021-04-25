import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {SyntheticEvent, useEffect, useState} from  'react'


export default function AuthFlowNew() {
    
    const router = useRouter()

    const [isBusy, setBusy] = useState(true);
    
    // User Variables
    const [jwt, setJwt] = useState('')
    const [userId, setUserId] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [address, setAddress] = useState('')
    const [info, setInfo] = useState('')
    const [enableNotifications, setEnableNotifications] = useState(true)
    const [role, setRole] = useState('general')

    var tempJwt


    useEffect(() => {
        
        let isMounted = true

        tempJwt = localStorage.getItem('token')

        setJwt(tempJwt)

        var bearer = 'Bearer ' + tempJwt;

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
                    localStorage.setItem('userId', userId)

                    setFirstName(json.firstName)
                    setLastName(json.lastName)
                    setEmail(json.email)
                    setContactNumber(json.contactNumber)
                    setAddress(json.address)
                    setInfo(json.info)
                    setEnableNotifications(json.enableNotifications)
                    setRole(json.role)
                    
                }
            });
            
        }
        
        getUser()
        return () => { isMounted=false }
    }, [])
    

    const submit = (e: SyntheticEvent) => {
        e.preventDefault();
        

        fetch(`https://api.scantag.co/api/v1/users/update?id=${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + jwt
            },
            body: JSON.stringify({
                'username': email,
                'email': email,
                'firstName': firstName,
                'lastName': lastName,
                'contactNumber': contactNumber,
                'address': address,
                'role': role
            })
        }).then(function (response) {
            if(response.ok) {
                console.log("Successfully updated details")
            }
        })
    }

    
    return (
      
    <div>
        
        <Head>
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex" />
          <meta name="googlebot" content="noindex" />
          <title>My Account - ScanTag</title>
          <link rel="icon" href="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" />
        </Head>
        
        <header>
            
            <div className="md:pt-10 md:pl-32 text-white md:pr-32 pt-10 pl-5 pr-5">
                <Link  href="/account">
                    <a>
                        <img className="float-left md:w-20 w-12" src="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg"/>
                    </a>
                </Link>
                <div className="pt-2">
                    <div>
                    <Link href="/auth/logout">
                        <a className="md:text-xl font-semibold float-right md:rounded-3xl md:pl-6 md:pr-6 md:pt-2 md:pb-2 text-md pl-5 pr-5 pt-2 pb-2 rounded-3xl bg-orange hover:bg-orange-light transition-colors duration-200">Logout</a>
                    </Link>
                    </div>
                    <div className="pr-24 md:pr-32">
                    <Link href="/account/settings">
                        <a className="md:text-xl font-semibold float-right text-md pl-5 pr-5 pt-2 pb-2 text-orange hover:text-orange-light transition-colors duration:200">Account Settings</a>
                    </Link>
                    </div>
                </div>
            </div>

            
        </header>





        <div className="mt-10 sm:mt-0">
            <div className="max-w-3xl md:m-auto md:w-1/2 md:py-32">
                
                <div className="mt-5 md:mt-0 md:col-span-2">
                <form onSubmit={submit}>
                    <div className="shadow overflow-hidden sm:rounded-md">
                    <div className="px-4 py-5 bg-white sm:p-6">
                        <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">First name</label>
                            <input type="text" defaultValue={firstName} name="firstname" id="firstname" autoComplete="given-name" className="mt-1 focus:ring-orange focus:border-orange block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={e => setFirstName(e.target.value)}/>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Last name</label>
                            <input type="text" defaultValue={lastName} name="lastname" id="lastname" autoComplete="family-name" className="mt-1 focus:ring-orange focus:border-orange block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={e => setLastName(e.target.value)}/>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="emailaddress" className="block text-sm font-medium text-gray-700">Email address</label>
                            <input type="text" defaultValue={email} name="emailaddress" id="emailaddress" autoComplete="email" className="mt-1 focus:ring-orange focus:border-orange block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <div className="col-span-6">
                            <label htmlFor="streetaddress" className="block text-sm font-medium text-gray-700">Street address</label>
                            <input type="text" defaultValue={address} name="streetaddress" id="streetaddress" autoComplete="street-address" className="mt-1 focus:ring-orange focus:border-orange block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={e => setAddress(e.target.value)}/>
                        </div>
                      
                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="mobilenumber" className="block text-sm font-medium text-gray-700">Mobile Number</label>
                            <input type="text" defaultValue={contactNumber} name="mobilenumber" id="mobilenumber" autoComplete="tel" className="mt-1 focus:ring-orange focus:border-orange block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={e => setContactNumber(e.target.value)}/>
                        </div>
                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange hover:bg-orange-light">
                        Save
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>



    </div>
  )
}
