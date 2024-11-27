import Link from "next/link";
import 'animate.css';
import Image from "next/image";
import main_img from "../public/istockphoto-1992823299-1024x1024.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";  

export default function HeroSection(){
    return(
        <div>
           <div className="flex sm:flex-row flex-col justify-center sm:gap-[90px] gap-8 ">
           <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"/>
              <div className="pt-[30px] animate__animated animate__fadeInLeft animate__delay-2s animate__repeat-2 sm:m-[20px] ml-[50px] mr-[40px]">           
                    <h1 className="sm:text-[30px] text-[20px] font-bold">Hello I Am <span className="sm:text-[35px] text-[16px] text-pink-600 ">Tanzeela Syeda!</span></h1>
                    <h2 className="sm:text-[30px] text-[20px] font-bold ">I Am a  <span className="sm:text-[40px] text-[18px] text-pink-600 animate-pulse relative">Web Developer...</span></h2>
                    <p className="sm:text-sm text-xs" >I am a student of GIAIC,quater 02: but curently i learning <br />
                    <i> next.js #15,</i> Language in this <b>Quater 02:</b></p>
                    <br />

                  <ul className="flex gap-[30px] sm:ml-[8%] mr-[20px]">
                  <li className="text-[20px] border-[2px] border-solid hover:animate-pulse animate__delay-2s  shadow-lg hover:shadow-pink-800 border-pink-600 rounded-full p-[10px] text-white"><Link href="https://github.com/tanzeela-0325"><FaGithub /></Link></li>
                  <li className="text-[20px] border-[2px] border-solid hover:animate-pulse animate__delay-2s  shadow-lg hover:shadow-pink-800 border-pink-600 rounded-full p-[10px] text-white"><Link href={"https://www.linkedin.com/in/tanzeela-syeda-b609532ba/"}><FaLinkedin /></Link></li>
                  <li className="text-[20px] border-[2px] border-solid hover:animate-pulse animate__delay-2s  shadow-lg hover:shadow-pink-800 border-pink-600 rounded-full p-[10px] text-white"><Link href={"https://www.instagram.com"}></Link> <FaInstagramSquare /></li>
                  </ul>

                 <button className="sm:mt-[30px] sm:ml-[50px]  mt-[30px] ml-[15px] pt-[5px] hover:animate-pulse animate__delay-2s pr-[25px] pb-[5px] pl-[25px] border-[1px] rounded-3xl border-solid border-pink-600 shadow-lg hover:shadow-pink-800">Download CV</button>
             </div>

              <Image src={main_img} alt="Image" width={1000} height={1000} className="sm:w-[300px] w-[250px] sm:h-[300px] h-[250px] animate-pulse rounded-full sm:mt-[30px] sm:ml-[6%] ml-[10%] mr-[30px] border-[2px] border-pink-600"/>
           </div>

        </div>
    )
}