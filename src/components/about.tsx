import Image from "next/image";
import pic_1 from "../public/istockphoto-1307774382-1024x1024.jpg";


export default function About(){
    return(
        <div className="flex justify-center sm:flex-row flex-col sm:w-[98%] w-[300px]  sm:gap-[20px] sm:m-[1%] m-[10px]  border-[1px] animate__animated animate__zoomIn animate__delay-2s border-solid border-slate-300 rounded-lg ">
            <div className="flex  sm:w-[600px] w-[280px] sm:h-[390px] h-[350px] sm:m-[2%] m-[10px] border-[3px] border-solid border-pink-600 rounded-lg">
                <Image src={pic_1} alt="image" width={1000} height={1000}/>
            </div>
            <div className="flex  flex-col  justify-items-center w-[50%] animate__animated animate__zoomIn animate__delay-2s">
              <h2 className="flex justify-center text-[30px] text-white text-center ml-28 sm:mr-[20%] sm:mt-[10px] "> <b>About</b>  <span className="flex justify-center text-[30px] text-pink-600 text-center ml-2 sm:mt-[2px] sm:mr-[10px]"><b>Me</b></span> </h2>
              <p className="flex sm:w-[90%] w-[180%] sm:h-[100%] h-[200%] sm:mt-[60px] m-6">Hi, I Am Tanzeela Syeda, a matric student passionate about learning new things, especially in science,
                technology, and coding! I enjoy solving problems and exploring creative ways to improve my skills. 
                Outside of academics, I like my best hobbies writing code , blogging, photography etc. I am excited 
                to see where my studies will take me, and I am always eager to take on new challenges and grow!</p>
            </div>
            
        </div>
    )
}