"use client"
import Link from "next/link";
import { RxCross2 } from "react-icons/rx";
import { HiMenu } from "react-icons/hi";
import { useState } from "react";


export default function NavBar(){
    const [isClick ,setisClick] = useState(false)

    const toggleNevbar =():void => {
        setisClick(!isClick)
    }
    return(
        <div>
               <nav className="flex  w-[100%] h-[70px] text-center justify-around bg-gray-950 text-white p-10px">
                 <h1 className="text-xl mr-8 mt-6 sm:text-4xl sm:ml-12 slideRight sm:mt-3  text-pink-600 font-bold   "><b>Tanzeela Syeda</b></h1>
  
                    <ul className="sm:flex hidden gap-[30px] sm:text-2x1 hover:rounded-full slideTop mt-[20px]">
                       <Link href={"/"}> <li className=" hover:text-pink-600 hover:shadow-xl p-2  hover:rounded-xl hover:shadow-pink-600 hover:direction-300 hover:delay-300 font-myFont font-bold" >Home</li></Link>
                       <Link href={"/about"}><li className=" hover:text-pink-600 hover:shadow-xl p-2 hover:rounded-xl hover:shadow-pink-600 hover:direction-300 hover:delay-300 font-myFont font-bold">About</li></Link>
                       <Link href={"/project"}><li className=" hover:text-pink-600 hover:shadow-xl p-2 hover:rounded-xl hover:shadow-pink-600 hover:direction-300 hover:delay-300 font-myFont font-bold">Projects</li></Link>
                       <Link href={"/contact"}><li className=" hover:text-pink-600 hover:shadow-xl p-2 hover:rounded-xl hover:shadow-pink-600 hover:direction-300 hover:delay-300 font-myFont font-bold">Contact</li></Link>
                    </ul>
   
                 <button className="  pl-[30px] pt-[5px] pb-[5px] pr-[30px] mt-[15px] mb-[15px] rounded-full border-[1px] border-solid border-pink-600 
                  transition-0.2s ease-in-out cursor-pointer hover:animate-pulse animate__delay-2s hidden md:block shadow-lg hover:shadow-pink-800 ">Contact Me</button>
                

                 {/* Navbar for Small device */}
                     <div className="md:hidden flex items-center mr-3">

                        <div onClick={toggleNevbar}>
                            {isClick?(<div><RxCross2 color="#EF56C6" size={30} /></div> ):<div><HiMenu color="#EF56C6" size={30}/></div>}

                        </div>
                     </div>
                </nav>

                {isClick && (
                    <div className="gap-3 fixed rounded-lg bg-slate-700 z-50">
                        
                    <ul className="flex flex-col text-center pr-3 pb-6 pt-6 text-white text-2xl hover:direction-300 hover:delay-300">
                       <Link href={"/"} className=" hover:text-black hover:rounded-lg p-2 hover:bg-white hover:direction-300 hover:delay-300" ><li >Home</li></Link>
                       <Link href={"/about"} className=" hover:text-black hover:rounded-lg p-2 hover:bg-white hover:direction-300 hover:delay-300"> <li>About</li></Link>
                       <Link href={"/project"} className=" hover:text-black hover:rounded-lg p-2 hover:bg-white hover:direction-300 hover:delay-300"><li>Projects</li></Link>
                       <Link href={"/contact"} className=" hover:text-black hover:rounded-lg p-2 hover:bg-white hover:direction-300 hover:delay-300"><li>Contact</li></Link>
                    </ul>
                    </div>
                )}
        </div>
    )
}