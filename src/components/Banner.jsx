

export function Banner() {
    return <div className="pt-[30px] flex flex-col justify-center items-center gap-[23px] pb-[70px]"> 
        <div className="flex items-center gap-[6px]">
            <div>
                <img  src="https://uploads.republic.com/p/offerings/hierarchical_offerings/logos/small/000/007/717/7717-1706912407-d30bb81eff1885a766825f78ca98af1da48b4550.png"/>
            </div>
            <div className="text-6xl font-extrabold">
                Avawatz
            </div>
        </div>
        <div className="flex pl-[60px] items-center">
            <div>
            <button type="button" className="w-[275px] h-[54px] text-white bg-blue-800 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-xl px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Invest in Avawatz</button>
            </div>
            <div className="pb-[8px]">
                <button type="button" className="border rounded text-[14px] font-medium pb-[8px] w-[69px] h-[27px] hover:border-blue-500 hover:text-blue-500">Follow</button>
            </div>
        </div>
    </div>
}