import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {SyntheticEvent, useEffect, useState} from  'react'
import EditTag from '../../components/EditTag'
import CreateTag from '../../components/CreateTag'


export default function MyTags() {
    
    const router = useRouter()

    const [jwt, setJwt] = useState('')
    const [tagId, setTagId] = useState('')

    const [tagName, setTagName] = useState('')
    const [email, setEmail] = useState('')
    const [userId, setUserId] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [info, setInfo] = useState('')
    const [address, setAddress] = useState('')
    const [enableNotifications, setEnableNotifications] = useState(false)

    const [tagUpdateMessage, setUpdateMessage] = useState('')
    const [tagLink, setTagLink] = useState('')

    const [dataLoaded, setDataLoaded] = useState(false)

    var tempJwt

    useEffect (() => {

        setUserId(localStorage.getItem('userId'))

        var tempUserId = localStorage.getItem('userId')

        let isMounted = true
        tempJwt = localStorage.getItem('token')
        setJwt(tempJwt)

        var bearer = 'Bearer ' + tempJwt

        async function getTag() {
            
        await fetch(`https://api.scantag.co/api/v1/tags/getAllByUserId?userId=${tempUserId}`, {
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

                    setTagId(json[0].tagId)

                    setFirstName(json[0].firstName)
                    setLastName(json[0].lastName)
                    setTagName(json[0].tagName)
                    setEmail(json[0].email)
                    setContactNumber(json[0].contactNumber)
                    setAddress(json[0].address)
                    setInfo(json[0].info)
                    setEnableNotifications(json[0].enableNotifications)
                    setTagLink("https://scantag.co/t/" + json[0].tagId)

                    setDataLoaded(true)
                    
                    console.log("tagId length" + tagId.length)
                }
            });

            
        }
        
        getTag()
        console.log("tagId length" + tagId.length)
        return () => { isMounted=false }

    }, [])

    return (

            <div>
            
                <Head>
                <meta charSet="utf-8" />
                <meta name="robots" content="noindex" />
                <meta name="googlebot" content="noindex" />
                <title>My Tags - ScanTag</title>
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
                            <Link href="/account">
                                <a className="md:text-xl font-semibold float-right text-md pl-5 pr-5 pt-2 pb-2 text-orange hover:text-orange-light transition-colors duration:200">My Account</a>
                            </Link>
                            </div>
                        </div>
                    </div>

                    
                </header>





                <div className="mt-10 sm:mt-0">
                    {
                        tagId.length != 12 ?
                        <CreateTag/> :
                        <EditTag/>
                    }
                </div>



            </div>


        )
    
}
