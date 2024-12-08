import React from 'react'
import { toast } from 'react-toastify';
import { motion } from "motion/react"

const contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "262e4d7d-fa04-4c2b-a042-6dda0b81be92");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("");
          toast.success("Form Submitted Successfully")
          event.target.reset();
        } else {
          console.log("Error", data);
          toast.error(data.message)
          setResult("");
        }
      };

  return (
    <motion.div
    className='text-center text-white p-6 py-20 lg:px-32 w-full overflow-hidden' id='contact'>
        <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>Contact Me</h1>


        <form onSubmit={onSubmit} className='max-w-2xl mx-auto text-white pt-8'>
            <div className='flex flex-wrap'>
                <div className='w-full md:w-1/2 text-left text-white'>Your Name
                    <input className='w-full border text-black border-gray-300 rounded py-3 px-4 mt-2' type="text" name='Name' placeholder='Your Name' required/>
                </div>
                <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
                    <input className='w-full border text-black border-gray-300 rounded py-3 px-4 mt-2' type="Email" name='Email' placeholder='Your Email' required/>
                </div>
            </div>
            <div className='my-6 text-left'>Message
                <textarea className='w-full border text-black border-gray-300 rounded py-3 px-4 mt-2 h-48' name="Message" placeholder='Message' required></textarea>
            </div>
            <button className='bg-[#465697] px-12 py-3 mb-10 rounded-full text-white'>{result ? result : "Send Message"}</button>
        </form>

    </motion.div>
  )
}

export default contact