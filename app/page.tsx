const Page = () => {
    window.parent.postMessage('Hello from iframe', '*');
    return(
        <div className="h-dvh w-full flex justify-center items-center">
            <div className="w-1/3 bg-gray-200 flex justify-center h-full items-center">
                <p className="text-2xl text-black font-semibold">Hello World this is first mirror</p>
            </div>
        </div>
    )
}

export default Page;