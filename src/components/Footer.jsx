export function Footer() {
  return (
    <div className="w-screen pt-[40px] bg-[#161d2d] flex justify-center gap-[70px] pb-[23px]">
      <div className="flex flex-col  gap-[30px]">
        <div>
          <img src="https://assets.republic.com/assets/logo/full/white/logo-f84869c4f7fd2d0fe2ff22e9a15c82b63809ed42014f19c2a8e3bb455778c6df.svg" />
        </div>
        <div className="font-normal text-gray-500 w-[187px]">
          Giving everyone access to early-stage startup investing
        </div>
        <div>
          <ul className="flex space-x-4">
            <li>
              <span className="[&>svg]:h-8 [&>svg]:w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  viewBox="0 0 320 512"
                >
                  <path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                </svg>
              </span>
            </li>
            <li>
              <svg
                className="h-8 w-8 text-gray-500"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                {" "}
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />{" "}
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />{" "}
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </li>
            <li>
              <svg
                className="h-8 w-8 text-gray-500"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
              </svg>
            </li>
            <li>
              <span className="[&>svg]:h-8 [&>svg]:w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  viewBox="0 0 448 512"
                >
                  <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
            </li>
            <li>
              <span className="[&>svg]:h-8 [&>svg]:w-8">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="gray"
                  viewBox="0 0 640 512"
                >
                  <path d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z" />
                </svg>
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <div className="font-normal text-gray-500">For investors</div>
        <hr className="w-[190px] h-[0.4px] mx-auto  border-0 rounded mt-[13px] mb-[34px] bg-gray-500"></hr>
        <div>
          <ul className="text-gray-300 text-[19px]">
            <li className="hover:text-white">Why invest</li>
            <li className="hover:text-white">How it works</li>
            <li className="hover:text-white">FAQ</li>
            <li className="hover:text-white">Risks</li>
            <li className="hover:text-white">Privacy policy</li>
            <li className="hover:text-white">Accessibility</li>
            <li className="hover:text-white">Cookie Preferences</li>
            <li className="hover:text-white">Form CRS</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="font-normal text-gray-500">For startups</div>
        <hr className="w-[190px] h-[0.4px] mx-auto  border-0 rounded mt-[13px] mb-[34px] bg-gray-500"></hr>
        <div>
          <ul className="text-gray-300 text-[19px]">
            <li className="hover:text-white">Why raise</li>
            <li className="hover:text-white">Learn</li>
            <li className="hover:text-white">FAQ</li>
            <li className="hover:text-white">Instruments</li>
            <li className="hover:text-white">Crowd SAFE</li>
            <li className="hover:text-white">Tokenized assets</li>
          </ul>
        </div>
      </div>
      <div>
        <div className="font-normal text-gray-500">Company</div>
        <hr className="w-[190px] h-[0.4px] mx-auto  border-0 rounded mt-[13px] mb-[34px] bg-gray-500"></hr>
        <div>
          <ul className="text-gray-300 text-[19px]">
            <li className="hover:text-white">About</li>
            <li className="hover:text-white">Jounral</li>
            <li className="hover:text-white">Events</li>
            <li className="hover:text-white">Contact</li>
            <li className="hover:text-white">We&apos;re hiring</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
