"use client"

const Page = () => {
    const sendBooleanToParent = () => {
        if (typeof window !== 'undefined' && window.parent) {
            window.parent.postMessage(true, '*');
        }
    };

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
            </div>
        </div>
    )
}

export default Page;

