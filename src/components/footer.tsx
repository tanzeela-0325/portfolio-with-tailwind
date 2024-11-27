import { FaCopyright } from "react-icons/fa";

export default function Footer(){
    return(
        <div className="flex justify-center gap-[3px] w-[100%] h-[60px] bg-gray-950 text-gray-400 ">
          <p className="text-[10px] mt-[23px]"><FaCopyright /></p>
          <p className="text-[10px] mt-[20px]">Tanzeela Syeda | All Right upside Down</p>

        </div>
    )
}