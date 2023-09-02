'use client'
import {motion} from 'framer-motion'
import Imagen from '../../img/img2.jpg'

export const About = () =>{


    return(
        <motion.div 
        initial={{
            opacity:0
        }}
        whileInView={{
            opacity:1
        }}
        transition={{
            duration:2
        }}
        
        
        className="flex flex-col text-center md:text-left relative h-screen md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">About</h3>

        <motion.img 
        initial={{
            x:-200,
            opacity:0
        }}
        transition={{
            duration:1.2,
        }}
        whileInView={{opacity:1,x:0}}
        viewport={{once:true}}
        src={Imagen.src}
      
        className='-mb-20 mt-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[400px]'
        />


        <div className='space-y-10 px-0 md:px-10'>
            <h4 className='text-xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A] '>little</span>  background</h4>

            <p className='text-base'>
            I am a web developer with a year of experience in React, which I learned quickly thanks to my passion for learning and the help of expert friends. I have done several personal projects using style components, tailwind css, hooks, usecontext, server calls and apis. I like to be informed, face challenges and do things well. I have skills to create specialized modules, work with quality and meet deadlines.
            </p>
        </div>



        </motion.div>
    )
}