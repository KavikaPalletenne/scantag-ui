import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {SyntheticEvent, useEffect, useState} from  'react'



export default function EditTag() {

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
                    
                }
            });

            
        }
        
        getTag()
        return () => { isMounted=false }

    }, [])

    const submit = (e: SyntheticEvent) => {
        e.preventDefault()

        setUpdateMessage('')

        fetch(`https://api.scantag.co/api/v1/tags/update?tagId=${tagId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + jwt
            },
            body: JSON.stringify({
                'firstName': firstName,
                'lastName': lastName,
                'tagName': tagName,
                'email': email,
                'contactNumber': contactNumber,
                'address': address,
                'info': info,
                'enableNotifications': enableNotifications
            })
        }).then(function (response) {
            if(response.ok) {
                setUpdateMessage('Successfully updated tag')
                setTimeout(function(){ setUpdateMessage('') }, 5000)
                console.log("Successfully updated tag")
            }

            if(!response.ok) {
                document.getElementById("details-message").className = 'text-red-500 text-sm float-left'
                setUpdateMessage('Unable to update tag')
                setTimeout(function(){ setUpdateMessage('') }, 5000)
                setUpdateMessage('')
            }
        })

    }

    return (
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

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="tagname" className="block text-sm font-medium text-gray-700">Tag name</label>
                            <input type="text" defaultValue={tagName} name="tagname" id="tagname" autoComplete="none" className="mt-1 focus:ring-orange focus:border-orange block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={e => setTagName(e.target.value)}/>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="emailaddress" className="block text-sm font-medium text-gray-700">Email address</label>
                            <input type="text" defaultValue={email} name="emailaddress" id="emailaddress" autoComplete="email" className="mt-1 focus:ring-orange focus:border-orange block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={e => setEmail(e.target.value)}/>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="contactnumber" className="block text-sm font-medium text-gray-700">Mobile number</label>
                            <input type="text" defaultValue={contactNumber} name="contactnumber" id="contactnumber" autoComplete="tel" className="mt-1 focus:ring-orange focus:border-orange block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={e => setContactNumber(e.target.value)}/>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Return address</label>
                            <input type="text" defaultValue={address} name="address" id="address" autoComplete="street-address" className="mt-1 focus:ring-orange focus:border-orange block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={e => setAddress(e.target.value)}/>
                        </div>

                        <div className="col-span-6 sm:col-span-4">
                            <label htmlFor="info" className="block text-sm font-medium text-gray-700">Additional info</label>
                            <input type="text" defaultValue={info} name="info" id="info" autoComplete="none" className="mt-1 focus:ring-orange focus:border-orange block w-full shadow-sm sm:text-sm border-gray-300 rounded-md" onChange={e => setInfo(e.target.value)}/>
                        </div>

                        </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <p id="details-message" className = "text-orange text-sm float-left">{tagUpdateMessage}</p>
                        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-orange hover:bg-orange-light">
                        Save
                        </button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}