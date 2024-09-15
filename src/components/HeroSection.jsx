export function HeroSection() {
  return (
    <div className="flex justify-center pt-[30px]">
      <div>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="h-[38px]"
                src="https://uploads.republic.com/p/offerings/hierarchical_offerings/logos/small/000/007/717/7717-1706912407-d30bb81eff1885a766825f78ca98af1da48b4550.png"
              />
              <div className="text-5xl font-bold pb-[5px]">Avawatz</div>
            </div>
            <div className="flex gap-[25px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="grey"
                className="size-7 cursor-pointer"
              >
                <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="grey"
                className="size-7 cursor-pointer"
              >
                <path d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
              </svg>
            </div>
        </div>
          <div className="text-slate-500 text-xl pb-[13px]">
            <p>
              Trusted AI Robotics: Transforming Safety Across High-Risk and
              Tedious Tasks
            </p>
          </div>
        </div>
        <div className="flex gap-[4px]">
          <div className="border rounded border-red-500 text-xs pl-[9px] pr-[9px] text-red-500 cursor-pointer">
            SPECIAL
          </div>
          <div className="border rounded  text-xs pl-[9px] pr-[9px] bg-[#fff6b9] cursor-pointer">
            AAPI FOUNDERS
          </div>
          <div className="border rounded  text-xs pl-[9px] pr-[9px] bg-[#FFC4A8] cursor-pointer">
            IMIGRANT FOUNDERS
          </div>
          <div className="border rounded  text-xs pl-[9px] pr-[9px] bg-[#c2f9f4] cursor-pointer">
            WOMEN FOUNDERS
          </div>
          <div className="border rounded  text-xs pl-[9px] pr-[9px] bg-[#e9e9e9] cursor-pointer">
            SECURITY & DEFENCE
          </div>
          <div className="border rounded  text-xs pl-[9px] pr-[9px] bg-[#e9e9e9] cursor-pointer">
            B2B
          </div>
          <div className="border rounded  text-xs pl-[9px] pr-[9px] bg-[#e9e9e9] cursor-pointer">
            B2G
          </div>
          <div className="border rounded  text-xs pl-[9px] pr-[9px] bg-[#e9e9e9] cursor-pointer">
            ROBOTICS
          </div>
        </div>
        <div className="pt-[18px] flex gap-[60px]">
          <iframe
            width="754"
            height="374"
            src="https://www.youtube.com/embed/fO7xdLL3ziI"
            title="AVAWATZ - Why You Should Invest Now"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <div>
            <div className="border rounded font-bold text-red-500 text-[10px] pl-[9px] pr-[9px] bg-[#eee] cursor-pointer w-[190px]">
              SPECIAL TERMS: 47D 10H 37M LEFT
            </div>
            <div className="pt-[17px] border-b pb-[9px]">
              <div className="text-4xl font-bold pb-[8px]">$361,384</div>
              <div className="text-slate-500 text-lg">Committed</div>
            </div>
            <div className="pt-[17px] border-b pb-[9px]">
              <div className="text-4xl font-bold pb-[8px]">19</div>
              <div className="text-slate-500 text-lg">Investors</div>
            </div>
            <div className="pt-[17px] pb-[9px]">
              <div className="text-4xl font-bold pb-[8px]">17 days</div>
              <div className="text-slate-500 text-lg">Left to invest</div>
            </div>
            <div className="pt-[30px] flex flex-col items-center">
              <button
                type="button"
                className="static text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded text-lg px-[75px] py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Invest in Avawatz
              </button>
              <div className="text-sm text-slate-500">
                <b>$2,500</b> minimum investment ·{" "}
                <a
                  className="underline text-blue-500"
                  href="https://files.brokercheck.finra.org/crs_291387.pdf"
                >
                  Form CRS
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
