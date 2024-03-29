import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from  'react'
import ScaleLoader from "react-spinners/ScaleLoader";



export default function TagView() {

    const router = useRouter()

    const { tid } = router.query

    // react-spiners variables
    const [loading, setLoading] = useState(true)
    const [color, setColor] = useState('#FF9369')

    const [tagName, setTagName] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [info, setInfo] = useState('')
    const [address, setAddress] = useState('')



    useEffect (() => {

        if(!router.isReady) return;

        let isMounted = true
    

        async function getTag() {
            
        await fetch(`https://api.scantag.co/v1/tags/get?tagId=${tid}`, {
                method: 'GET'
            }).then(function(response) {                
                
                
                if(isMounted) {
                return response.json();
                }
            }).then(function(json) {  
                
                if(json.tagName == "empty") {
                    router.push({
                        pathname: '/'
                    })
                    isMounted = false
                }
                
                if(isMounted) {
                    
                    

                    setFirstName(json.firstName)
                    setLastName(json.lastName)
                    setTagName(json.tagName)
                    setEmail(json.email)
                    setContactNumber(json.contactNumber)
                    setAddress(json.address)
                    setInfo(json.info)

                    setLoading(false)
                    
                }
            });

            
        }
        
        getTag()
        return () => { isMounted=false }

    }, [router.isReady, firstName, lastName, tagName, email, contactNumber, address, info])

  
    if(loading) {
        return (
        
        <div>
            <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="noindex" />
                <meta name="googlebot" content="noindex" />
                <title>{firstName}'s ScanTag</title>
                <link rel="icon" href="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" />
            </Head>

        
            <h1 className="text-center md:pt-52 pt-20  " style={{fontFamily: "Rubik"}}>
                <ScaleLoader color={"#FF9369"} width={6} height={50} radius={10} margin={'10px'}/>
            </h1> 
        </div> 
        

        )
    }


    return (
        
        <div>
        
        <Head>
            <title>{firstName}'s ScanTag</title>
            <meta charSet="utf-8" />
            <meta name="robots" content="noindex" />
            <meta name="googlebot" content="noindex" />
            <link rel="icon" href="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" />
        </Head>
        
        <div className="mt-10 sm:mt-0">
            

            <div className="max-w-3xl md:m-auto md:w-1/2 md:py-5">
                
                <div className="mt-5 md:mt-0 md:col-span-2">
                <img src="https://raw.githubusercontent.com/KavikaPalletenne/scantag-assets/main/scantag-logo.svg" />
                <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    
                    
                    
                    <h1 className="md:text-4xl text-2xl font-medium pb-10" style={{fontFamily: 'Rubik'}}>{firstName}'s ScanTag</h1>

                    <h2 className="md:text-xl text-md pb-1 font-medium" style={{fontFamily: 'Rubik'}}>First name</h2>
                    <h2 className="md:text-xl text-md pb-5" style={{fontFamily: 'Rubik'}}>{firstName}</h2>

                    <h2 className="md:text-xl text-md pb-1 font-medium" style={{fontFamily: 'Rubik'}}>Last name</h2>
                    <h2 className="md:text-xl text-md pb-5" style={{fontFamily: 'Rubik'}}>{lastName}</h2>

                    <h2 className="md:text-xl text-md pb-1 font-medium" style={{fontFamily: 'Rubik'}}>Email</h2>
                    <h2 className="md:text-xl text-md pb-5" style={{fontFamily: 'Rubik'}}>{email}</h2>

                    <h2 className="md:text-xl text-md pb-1 font-medium" style={{fontFamily: 'Rubik'}}>Contact number</h2>
                    <h2 className="md:text-xl text-md pb-5" style={{fontFamily: 'Rubik'}}>{contactNumber}</h2>

                    <h2 className="md:text-xl text-md pb-1 font-medium" style={{fontFamily: 'Rubik'}}>Address</h2>
                    <h2 className="md:text-xl text-md pb-5" style={{fontFamily: 'Rubik'}}>{address}</h2>

                    <h2 className="md:text-xl text-md pb-1 font-medium" style={{fontFamily: 'Rubik'}}>Info</h2>
                    <h2 className="md:text-xl text-md pb-5" style={{fontFamily: 'Rubik'}}>{info}</h2>
                    
                    <p className="mt-2 pt-5 text-center text-sm text-gray-600">
                    
                        <Link href="/register">
                            <a className="font-medium text-orange hover:text-orange-light">
                                Sign up for an account
                            </a>
                        </Link>
                    </p>

                    
                </div>

                
            
                </div>
                
                </div>
            </div>
        </div>
        </div>
    )
}