import axios from "axios";
import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EmojiSadIcon, TrashIcon } from "@heroicons/react/solid";



const EmergencyContact = () => {
    return (
        <div>
            <Navbar />
            <Contacts />
        </div>
    )
}

const Contacts = () => {
    // Add CSRF token
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";

    // Get user contact data and populate cards with it
    const [contacts, setContacts] = useState([]);
    
    useEffect(() => {
        axios.get("http://127.0.0.1:8080/api/user/get-contacts").then((response) => {
            setContacts(response.data);
        });
    }, []);

    // const contacts = [
    //     {id:"1", first_name: "Shivang", last_name: "Mathur", contact:"9718336329", email:"shivang.mathur@gmail.com", address:"Anardana Chowk"}, 
    //     {id: "2", first_name: "Shivang", last_name: "Mathur", contact:"9718336329", email:"shivang.mathur@gmail.com", address:"Anardana Chowk"}, 
    // ];
    const cards = contacts.map((props) => 
        <div className="w-fill h-min p-2">
            <ContactCard {...props}/>
        </div>);
    
    if(contacts.length===0)
    {
        return(
            <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-primary opacity-75 flex flex-col items-center justify-center">
                <h className="text-center text-white">
                    <EmojiSadIcon className="fill-gray-400"/>
                    Seems like you don't have any contacts.
                </h>
            </div>
        )
    }

    return (
        <div>
            {cards}
        </div>
    )
}

//Individual Card: make into grid (maybe remove cards enirely in exchage for grid)
const ContactCard = (props) => {
    return (
        <div className="flex card card-normal card-bordered place-content-center">
            <div className='bg-blue-400 h-20'>
                <h2 className="card-title px-10 py-5">{props.first_name} {props.last_name}</h2>
            </div>
            <div className="card-body flex flex-col">
                <div>Number: {props.contact}</div>
                <div>Email: {props.email}</div>
                <div>Address: {props.address}</div>

                <div className="justify-end card-actions">
                    <TrashIcon className="h-5 w-5 hover:scale-125 transition-all"/>
                </div>
            </div>
        </div>
    )    
}

// async function deleteContact(id) {
//     useEffect(() => {
//         axios.delete("http://127.0.0.1:8080/api/user/delete-contact/".concat(id)).then((response) => {
//             setContacts(response.data);
//         });
//     }, []);
// } 

export default EmergencyContact;