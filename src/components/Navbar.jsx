export function Navbar() {
  return (
    <div className="flex justify-center items-center gap-[290px] w-screen  mt-[19px] border-b pb-[15px] ">
      <div className="flex gap-[20px]">
        <div>
          <img src="https://assets.republic.com/assets/logo/full/black/logo-2c113fd1a194abf7fa3c5809c1470ca753c7a8dda7c2a3e86544990495e3056e.svg" />
        </div>
        <div className="text-black font-sans font-normal text-[17px]">
          Investors
        </div>
        <div className="text-black font-sans font-normal text-[17px]">
          Buisnesses
        </div>
        <div className="abosulte text-gray-600 flex items-center ">
          <svg
            className="h-4 w-4 fill-current absolute ml-2"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Capa_1"
            viewBox="0 0 56.966 56.966"
            // style="enable-background:new 0 0 56.966 56.966;"
            width="512px"
            height="512px"
          >
            <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
          <input
            type="search"
            name="serch"
            placeholder="Search"
            className="bg-slate-200 h-10 px-7  rounded-full text-sm focus:outline-none"
          />
        </div>
      </div>
      <div className="flex gap-[20px] text-lg">
        <div className="flex">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="size-6"
            >
              <path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
            </svg>
          </div>
          US
        </div>
        <div>Log in</div>
        <div>Sign up</div>
      </div>
    </div>
  );
}
