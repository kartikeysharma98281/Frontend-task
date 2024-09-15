import { FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { ImFacebook2 } from "react-icons/im";
import { FaYoutube } from "react-icons/fa";
import { BiLogoMediumOld } from "react-icons/bi";
import map from "../../public/map.png";

export function About() {
  return (
    <div className="flex flex-col justify-center items-center pt-[45px] border-b pb-[30px]">
        <div className="text-[#666] text-2xl font-extrabold ">About Avawatz</div>
        <hr className="w-[112px] h-[2px] mx-auto  border-0 rounded mt-[10px] mb-[34px] dark:bg-blue-700"></hr>
      <div className="flex space-x-3 gap-[245px] w-full justify-center">
        <div>
            <div className="pb-[15px]">
                <div className="text-slate-500 text-lg">
                Legal Name
                </div>
                <div className="text-xl">
                AvaWatz Company
                </div>
            </div>

            <div className="pb-[15px]">
                <div className="text-slate-500 text-lg">
                Founded
                </div>
                <div className="text-xl">
                Feb 2019
                </div>
            </div>

            <div className="pb-[15px]">
                <div className="text-slate-500 text-lg">
                Form
                </div>
                <div className="text-xl">
                Texas Corporation
                </div>
            </div>
        </div>
        <div>
            <div className="pb-[15px]">
                <div className="text-slate-500 text-lg">
                    Employees
                </div>
                <div className="text-xl">
                    17
                </div>
            </div>
            <div className="pb-[15px]">
                <div className="text-slate-500 text-lg">
                    Website
                </div>
                <div className="text-xl text-blue-500 hover:underline">
                    <a href="https://avawatz.com/">avawatz.com</a>
                </div>
            </div>
            <div className="pb-[15px]">
                <div className="text-slate-500 text-lg">
                    Social Media
                </div>
                <div className="text-xl">
                    <ul className="flex gap-[15px]">
                        <li><FaXTwitter /></li>
                        <li><IoLogoInstagram /> </li>
                        <li><FaLinkedin /> </li>
                        <li><ImFacebook2 /> </li>
                        <li><FaYoutube/> </li>
                        <li><BiLogoMediumOld /> </li>
                    </ul>
                </div>
            </div>

        </div>
        <div>
            <div className="text-slate-500 text-lg">
                Headquaters
            </div>
            <div>
                <img src={map} alt="map" className="w-[330px] h-[170px]"/>
            </div>
        </div>
      </div>
    </div>
  );
}
