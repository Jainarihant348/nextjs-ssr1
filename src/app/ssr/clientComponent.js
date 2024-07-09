// src/app/components/ClientComponent.js

"use client";

import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const ClientComponent = ({ serverData }) => {
    const [clientData, setClientData] = useState(null);
    
    const handleLang = (language) => {
        Cookies.set('preferredLanguage', language);
        console.log(typeof(Cookies.get('preferredLanguage')))
        
    }
    useEffect(() => {

        const fetchClientData = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');
            // const res = await fetch('http://localhost:3000/api/data');      
            const data = await res.json();
            

            // Simulate a delay
            setTimeout(() => {
                setClientData(data);
            }, 2000); // 2 seconds delay
        };

        fetchClientData();
    }, []);

    return (
        <div>
            <h1>Server-Side Rendering (SSR) Example with Client-Side Data</h1>
            <button onClick={() => handleLang('en')}>English</button>
            <button onClick={() => handleLang('hi')}>Hindi</button>

            <h2>Server-Side Data:</h2>
            <pre>{JSON.stringify(serverData, null, 2)}</pre>
            {/* <pre>{JSON.stringify(serverData, null, 2)}</pre> */}
            <h2>Client-Side Data:</h2>
            {clientData ? (
                <pre>{JSON.stringify(clientData, null, 2)}</pre>
            ) : (
                <p>Loading client-side data...</p>
            )}
        </div>
    );
};

export default ClientComponent;
