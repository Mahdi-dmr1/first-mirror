"use client"

import { useEffect, useState } from 'react';

const Page = () => {
    // eslint-disable-next-line
    const [data, setData] = useState<any[]>([]);

    const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjo0NDk0OTk2ODU0OCwiaWF0IjoxNzQ5OTY4NTQ4LCJqdGkiOiJlNDMwNWRiYmJmM2M0ZjAzYTZhYWIzMTQ2NmZiMDc4NSIsInVzZXJfaWQiOjY1MSwicm9sZSI6IlJFQUxfRkFSTUVSIiwidXNlcl9hZ2VudCI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMzcuMC4wLjAgU2FmYXJpLzUzNy4zNiIsInRva2VuX2lkIjoiZDZlNzY5MjAtZWQxMS00ZTE3LTlkZWMtN2FjOGU4MzE3NDI5IiwiaXAiOiI2NTRhOTM2MDBlYTBjNTNjOGFiMDY0NjE0Y2ZjOWEzZTg4NzJkN2YyYmI4YzRiOTJjZTE5NWQyZDgzNjMwMWNjIn0.heTXxpb6AHYSRgowRNREuEwKAXplBvXnVQgH6al25k4"

    const sendBooleanToParent = () => {
        if (typeof window !== 'undefined' && window.parent) {
            window.parent.postMessage(true, '*');
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined' && window.parent){
            window.parent.postMessage(access_token , '*');
            }
        }, []);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
                 setData(event.data.data);
        };
        window.addEventListener('message', handleMessage);
        return () => window.removeEventListener('message', handleMessage);
    }, [data]);


    console.log("this is data:" , data)

    return(
        <div className="h-dvh w-full flex justify-center items-center">
            <div className="w-full bg-gray-200 flex flex-col gap-4 justify-center h-full items-center">
                <p className="text-2xl text-black font-semibold">Hello World this is first mirror</p>
                <button
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    onClick={sendBooleanToParent}
                >
                    Open
                </button>
                <div className="text-black bg-white p-4 rounded w-full max-w-xl overflow-x-auto">
                    {data?.length > 0 ? (
                        <ul className="list-disc pl-5">
                            {data.map((item, index) => (
                                <li key={index}>
                                    {item.product && item.product.name ? item.product.name : 'No product name'}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>لیست خالی است</p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Page;
