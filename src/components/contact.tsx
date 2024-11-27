export default function Contact(){
    return(
        <div className="sm:w-[98%] w-[300px] border-[1px] sm:m-[1%] border-solid border-gray-300 rounded-lg  ml-[10px]  mr-[10px] animate__animated animate__zoomIn animate__delay-2s">
            <h2 className="text-[30px] text-white text-center mr-[10px] justify-center"> <b>Contact</b> <span className="text-[30px] text-pink-600 text-center mr-[10px] justify-center"><b>Me</b></span></h2>
            <form className="justify-center sm:ml-[30%] ml-[25px] sm:mt-[20px] animate__animated animate__zoomIn">

                <label>Full Name:</label><br />
                <input className="sm:w-[500px] w-[250px] text-center border-[1px] border-solid border-gray-600  bg-pink-600 rounded-lg " type="text" name="name" placeholder="Enter Your Name" required/><br />

                <label>Email Addres:</label><br />
                <input className="sm:w-[500px] w-[250px] text-center   border-[1px] border-solid border-gray-600 bg-pink-600 rounded-lg" type="email" name="email" placeholder="Enter Your Email" required/><br />

                <label>Phone Nuber:</label><br />
                <input className="sm:w-[500px] w-[250px]  text-center border-[1px] border-solid border-gray-600 bg-pink-600 rounded-lg" type="phone" name="number" placeholder="Enter Your mobile No" required/><br/>

                <label>Message:</label><br />
                <textarea className="sm:w-[500px] w-[250px]  text-center border-[1px] border-solid border-gray-600 bg-pink-600 rounded-lg" id="msg" rows={6} cols={20} placeholder="Enter Yore Message"></textarea><br/>

                <button className="pt-[5px] pr-[35px] pb-[5px] pl-[35px] mb-[8px] border-[1px] border-solid border-pink-600 hover:animate-pulse animate__delay-2s  shadow-lg hover:shadow-pink-800  rounded-3xl ">Submit</button>

            </form>
        </div>
    )
}