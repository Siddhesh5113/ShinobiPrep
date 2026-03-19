import React from 'react'
import { FaRobot } from "react-icons/fa";
import { IoSparkles } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

import { motion } from "motion/react"
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from '../Utils/firebase';

const Auth = () => {

  const handleGoogleAuth=async()=>{
    try{
        const response=await signInWithPopup(auth,provider)
        console.log(response)
    }catch(error){
        console.log(error)
    }
  }




  return (
    <div className='w-full min-h-screen bg-[#f3f3f3] flex item-center justify-center px-6 py-20'>

      <motion.div 
      initial={{opacity:0 ,y:-40}}
      animate={{opacity:1 ,y:0}}
      transition={{duration:1.05}}
      className='w-full h-fit max-w-md p-8 rounded-3xl bg-white shadow-2xl border border-gray-200'>
         <div className='flex items-center justify-center gap-1.5 mb-6 '>
              <div className='bg-blacktext-white p-2 rounded-r-lg '>
                  <FaRobot size={20} />
              </div>
              <h2 className='font-semibold text-lg'>InterviewIQ.AI</h2>
         </div>

         <h1 className='text-2xl md:text-3xl font-semibold text-center leading-snug pb-4'>
            Continue with
            <span className='bg-green-100 text-green-600 px-3 py-1 rounded-full inline-flex items-center gsp-2'>
              <IoSparkles size={16} />
              AI Smart Interview
            </span>
         </h1>

         <p className='text-gray-500 text-center text-sm md:text-base leading-relaxed mb-8'> 
          Sign in to start AI-powered mock interviews, track your progress, and unlock detailed performance insights.
         </p>

         <motion.button 
         onClick={handleGoogleAuth}
         whileHover={{opacity:0.9,scale:1.03}}
         whileTap={{opacity:1, scale:0.95}}
         className='w-full flex items-center justify-center gap-3 py-3 bg-black text-white rounded-full shadow-md'>
            <FcGoogle /> Continue with google
         </motion.button>

      </motion.div>

    </div>
  )
}

export default Auth