import Link from "next/link";
import Image from "next/image";
import pic_1 from "../public/ratul-ghosh-e5hucrUutDE-unsplash.jpg";
import pic_2 from "../public/resume-apply-work-form-concept.jpg";
import pic_3 from "../public/nicola-styles-qWFMm1iRJkM-unsplash.jpg";
import pic_4 from "../public/dennis-cortes-6Mnof7cxaS4-unsplash.jpg";

export default function Projects(){
    return(
        <div>
            <h2 className="flex justify-center text-[30px] text-white animate__animated animate__zoomIn animate__delay-3s "><b>My</b>  <span className="flex justify-center text-[33px] ml-2 text-pink-600 animate__animated animate__zoomIn animate__delay-3s"><b>Projects</b></span></h2>
         <div className="flex justify-center sm:flex-row flex-col sm:w-[98%] w-[300px] sm:gap-[5%] sm:m-[1%] border-[1px] ml-[10px] mr-[10px] mb-[8px] border-solid border-gray-300 rounded-lg">
                {/* card-01 */}
                <div className="justify-center text-center sm:mt-[10px] sm:mb-[10px]  m-[10px] border-[1px] border-solid border-pink-600 shadow-2xl hover:shadow-pink-800 rounded-lg animate__animated animate__zoomIn animate__delay-1s ">
                 <Image className="sm:w-[380px] w-[265px] sm:h-[350px] sm:m-[5px] h-[300px] m-[5px] animate__animated animate__zoomIn animate__delay-2s border-[1px] border-solid border-pink-600 rounded-lg"  src={pic_1} alt="Img-1" width={1000} height={1000} />
                    <h3  className="text-[30px] text-pink-600 justify-center text-center"><b>Assignment Vagetable</b></h3>
                    <p>.This is my Assignment no 4th & 5th</p>
                    <div className="flex flex-row gap-[10%] mt-[10px] mb-[10px] sm:ml-[55px]">
                  <Link className="mt-[10px] ml-[8px] pt-[5px] pr-[30px] pb-[5px] pl-[30px]  border-[1px] border-solid hover:animate-pulse animate__delay-2s  shadow-lg hover:shadow-pink-800 border-pink-600 rounded-3xl" href={"https://github.com/tanzeela-0325/assignment_04_and_05"}>GitHub</Link>
                  <Link className="mt-[10px] pt-[5px] pr-[30px] pb-[5px] pl-[30px]  border-[1px] border-solid hover:animate-pulse animate__delay-2s  shadow-lg hover:shadow-pink-800 border-pink-600 rounded-3xl" href={"/https://vercel.com/tanzeela-syedas-projects/assignment04-and-05-isbt"}>Go Live</Link>
                  </div>
                </div>

                {/*Card-02*/}
              <div className="justify-center text-center sm:mt-[10px] sm:mb-[10px] m-[10px] animate__animated animate__zoomIn animate__delay-2s border-[1px] border-solid border-pink-600 shadow-2xl hover:shadow-pink-800 rounded-lg ">
                <Image className="sm:w-[380px] w-[265px] sm:h-[350px] h-[300px] sm:m-[5px] m-[5px] border-[1px] animate__animated animate__zoomIn border-solid border-pink-600 rounded-lg" src={pic_2} alt="img-2" width={1000} height={1000}/>
                  <h2  className="text-[30px] text-pink-600 justify-center text-center" ><b>Resume Builder</b></h2>
                   <p>.This is my Resumr Builder Assignment</p> 
                <div className="flex flex-row gap-[10%] mt-[10px] mb-[10px] sm:ml-[55px]">
                <Link className="mt-[10px] ml-[8px] pt-[5px] pr-[30px] pb-[5px] pl-[30px]  border-[1px] border-solid hover:animate-pulse animate__delay-2s  shadow-lg hover:shadow-pink-800 border-pink-600 rounded-3xl" href={"https://github.com/tanzeela-0325/hackathone-static-resume"} >GitHub</Link>
                <Link className="mt-[10px] pt-[5px] pr-[30px] pb-[5px] pl-[30px]  border-[1px] border-solid hover:animate-pulse animate__delay-2s  shadow-lg hover:shadow-pink-800 border-pink-600 rounded-3xl" href={"https://hackathone-static-resume.vercel.app/"} >Go Live</Link>
                </div>

                
              </div>
              
         </div>
         
         <div className="flex justify-center sm:w-[98%] w-[300px] sm:flex-row flex-col gap-[5%] sm:mt-[10px] sm:mb-[10px] ml-[10px] mr-[10px]  border-[1px] border-solid border-gray-300 rounded-lg ">
               {/* Card-03 */}
               <div className="justify-items-center sm:mt[10px] sm:mb[10px] m-[5px] border-[1px] border-solid border-pink-600 shadow-2xl hover:shadow-pink-800 rounded-lg animate__animated animate__zoomIn animate__delay-3s">
                  <Image className="sm:w-[380px] w-[265px] sm:h-[350px] h-[280px] sm:m-[5px] m-[5px] border-[1px] animate__animated animate__zoomIn border-solid hover:animate-pulse animate__delay-2s  shadow-lg hover:shadow-pink-800 border-pink-600 rounded-lg" src={pic_3} alt="img-3" width={1000} height={1000}/>
                  <h2 className="text-[30px] text-pink-600 justify-center text-center"><b>ToDo List</b></h2>
                  <p>.This is My To Do List Assignment</p>
                  <div className="mt-[10px] mb-[10px]">
                    <Link className="mt-[10px] pt-[5px] pr-[30px] pb-[5px] pl-[30px] border-[1px] border-solid hover:animate-pulse animate__delay-2s shadow-lg hover:shadow-pink-800 border-pink-600 rounded-3xl" href={"https://github.com/tanzeela-0325/simple-todos"}>GitHub</Link>
                  </div>

                </div>
                {/* Card-04 */}
                <div className="justify-items-center sm:mt-[10px] sm:mb-[10px] m-[10px] animate__animated animate__zoomIn animate__delay-4s border-[1px] border-solid border-pink-600 shadow-2xl hover:shadow-pink-800 rounded-lg ">
                  <Image className="sm:w-[380px] w-[265px] sm:h-[350px] h-[280px] sm:m-[5px] m-[5px] animate__animated animate__zoomIn border-[1px] border-solid border-pink-600 rounded-lg" src={pic_4} alt="img-4" width={1000} height={1000}/>
                  <h2 className="text-[30px] text-pink-600 text-center justify-center"><b>Simple Calculator</b></h2>
                  <p>.This is Simple Calculator Assignment</p>
                 <div className=" mt-[10px] mb-[10px] ">
                   <Link className="mt-[10px] mb-[20px] pt-[5px] pr-[30px] pb-[5px] pl-[30px] border-[1px] border-solid hover:animate-pulse animate__delay-2s shadow-lg hover:shadow-pink-800 border-pink-600 rounded-3xl" href={"https://github.com/tanzeela-0325/simple-todos"}>GitHub</Link>
                 </div> 

                </div>
          </div>      

        </div>
    )
}