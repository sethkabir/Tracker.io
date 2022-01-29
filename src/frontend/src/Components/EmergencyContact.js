import axios from "axios";
import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { EmojiSadIcon, TrashIcon } from "@heroicons/react/solid";

const AddContact = () => {
    return (
        <div className=" flex flex-col  space-y-5 mt-20 ">
            <div className="bg-stone-200 sm:w-1/3 space-y-2 rounded-lg p-5">
                <div className="flex flex-col">
                    <div>Name:</div>
                    <input
                        className="rounded-lg px-2 w-full"
                        type="text"
                    />
                </div>
                <div className="flex flex-col">
                    <div>Number:</div>
                    <input

                        className="rounded-lg px-2"
                        type="text"
                    />
                </div>
                <div className="flex flex-col">
                    <div>Email:</div>
                    <input

                        className="rounded-lg px-2"
                        type="text"
                    />
                </div>
                <div className="flex flex-col">
                    <div>Address:</div>
                    <input

                        className="rounded-lg px-2"
                        type="text"
                    />
                </div>
            </div>
            <button
                className="rounded-lg bg-blue-600 p-1 text-white w-44"
            >
                Add Contact
            </button>
        </div>
    );
}

const EmergencyContact = () => {
    return (
        <div>
            <Navbar />
            <Contacts />
            <AddContact />
        </div>
    )
}

const Contacts = () => {
    // Add CSRF token
    axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
    axios.defaults.xsrfCookieName = "csrftoken";

    // Get user contact data and populate cards with it
    // const [contacts, setContacts] = useState([]);

    // useEffect(() => {
    //     axios.get("http://127.0.0.1:8080/api/user/get-contacts").then((response) => {
    //         setContacts(response.data);
    //     });
    // }, []);

    const contacts = [
        { id: "1", first_name: "Shivang", last_name: "Mathur", contact: "9718336329", email: "shivang.mathur@gmail.com", address: "Anardana Chowk" },
    ];
    const cards = contacts.map((props) =>
        <div className="w-fill h-min p-2">
            <ContactCard {...props} />
        </div>);

    if (contacts.length === 0) {
        return (
            <div className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-primary opacity-75 flex flex-col items-center justify-center">
                <h className="text-center text-white">
                    <EmojiSadIcon className="fill-gray-400" />
                    Seems like you don't have any contacts.
                </h>
            </div>
        )
    }

    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-1 gap-4">
                {cards}
            </div>
        </div>
    )
}

//Individual Card: make into grid (maybe remove cards enirely in exchage for grid)
const ContactCard = (props) => {
    return (
        <div className="">
            <div className="flex flex-col place-content-center bg-stone-300 p-3 space-y-2 rounded-lg">
                <div className='bg-blue-400 h-20 flex rounded-lg'>
                    <h2 className="place-self-center mx-auto text-3xl">{props.first_name} {props.last_name}</h2>
                </div>
                <div className="flex flex-col ">
                    <div className="flex place-content-center">Number: {props.contact}</div>
                    <div className="flex place-content-center">Email: {props.email}</div>
                    <div className="flex place-content-center">Address: {props.address}</div>

                    {/* <div className="justify-end">
                        <TrashIcon className="h-5 w-5 hover:scale-125 transition-all" />
                    </div> */}
                </div>
            </div></div>
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