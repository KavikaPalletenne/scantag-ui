import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {SyntheticEvent, useEffect, useState} from  'react'


export default function AuthFlowNew() {
    
    const router = useRouter()
    
    // User Variables
    const [jwt, setJwt] = useState('')
    const [userId, setUserId] = useState('')
    const [email, setEmail] = useState('')
    const [firstName, setFirstname] = useState('')
    const [lastName, setLastName] = useState('')
    const [contactNumber, setContactNumber] = useState('')
    const [address, setAddress] = useState('')
    const [info, setInfo] = useState('')
    const [enableNotifications, setEnableNotifications] = useState(true)


    useEffect(() => {
        
        let isMounted = true

        setJwt(localStorage.getItem('token'))

        async function getUser() {

            await fetch("https://api.scantag.co/api/v1/users/get/current", {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + jwt
                }
            }).then(function(response) {                
                return response.json();
            }).then(function(json) {  
                if(isMounted) {

                    if(json.email == "empty") {
                        router.push("/login")
                    }

                    setUserId(json.userId)
                    localStorage.setItem('userId', userId)

                    setFirstname(json.firstName)
                    setLastName(json.lastName)
                    setEmail(json.email)
                    setContactNumber(json.contactNumber)
                    setAddress(json.address)
                    setInfo(json.info)
                    setEnableNotifications(json.enableNotifications)
                }
            });
            
        }
        
        getUser()
        return () => { isMounted=false }
    })

    
    return (
      
    <div>
        <h1>{jwt}</h1>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
        <h1>{email}</h1>
        <h1>{contactNumber}</h1>
        <h1>{info}</h1>
        <h1>{enableNotifications}</h1>


    </div>
  )
}
