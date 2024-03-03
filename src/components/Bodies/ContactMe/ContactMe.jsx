import HeaderTitle from "../../HeaderTitle/HeaderTitle";
import React, { useEffect, useState } from 'react';
import emailjs from 'emailjs-com';
import AOS from 'aos'
import 'aos/dist/aos.css'

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isMessageSent, setMessageSent] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Replace these values with your own Email.js template ID and user ID
        const templateId = 'template_nflya5a';
        const userId = 'XD0bAru-QLDJFLHxg';

        // Send email using Email.js
        emailjs.send('default_service', templateId, { from_name: name, message, reply_to: email }, userId)
            .then((response) => {
                console.log('Email sent successfully:', response);
                setMessageSent(true);
            })
            .catch((error) => {
                console.error('Error sending email:', error);
            });

        // Clear the form after submission
        setName('');
        setEmail('');
        setMessage('');
    };


    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    return (
        <div className="container mx-auto px-4">
            <div data-aos="fade-down" data-aos-duration='3500' className="py-8">
                <HeaderTitle heading={'Contact Me'} />
            </div>
            <div data-aos="fade-down" data-aos-duration='2000' className="flex lg:flex-row flex-col items-center justify-center gap-10">
                <div>
                    <img src="https://i.ibb.co/1ZXjsF9/Contact-1-5635e3dbeb21e6e987c0.gif" alt="" />
                </div>
                <div className="lg:w-1/2 w-full p-5  drop-shadow-2xl">
                    <form onSubmit={handleSubmit} className="space-y-4 text-purple-500">
                        <div>
                            <label className="block">Name:</label>
                            <input required type="text" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full rounded-md outline-none p-2 border-2 border-transparent border-b-purple-500 " />
                        </div>
                        <div>
                            <label className="block">Email:</label>
                            <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 block w-full rounded-md outline-none p-2 border-2 border-transparent border-b-purple-500 " />
                        </div>
                        <div>
                            <label className="block">Message:</label>
                            <textarea value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 block w-full rounded-md outline-none p-2 border-2 border-transparent border-b-purple-500 " />
                        </div>
                        <div>
                            <button type="submit" className="w-full effect active:scale-95 ease-in-out duration-200 transition-transform text-white py-2 px-4 rounded-md ">Send Email</button>
                        </div>
                    </form>
                    {isMessageSent && <div className="mt-4 text-purple-500">Message sent successfully!</div>}
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
