"use client"

import React, { useEffect, useState } from "react";

const Page = () => {
    // eslint-disable-next-line
    const [data, setData] = useState<any[]>([]);

    useEffect(() => {
        const handleMessage = (event: MessageEvent) => {
            if (Array.isArray(event.data)) {
                setData(event.data);
            }
        };

        window.addEventListener("message", handleMessage);
        return () => window.removeEventListener("message", handleMessage);
    }, []);

    return (
        <div className="h-dvh w-full flex justify-center items-center">
            <div className="w-full bg-gray-200 flex flex-col gap-4 justify-center h-full items-center">
                <p className="text-2xl text-black font-semibold">Hello World this is first mirror</p>
                <pre className="text-black bg-white p-4 rounded w-full max-w-xl overflow-x-auto">
                    {JSON.stringify(data, null, 2)}
                </pre>
            </div>
        </div>
    );
};

export default Page;

