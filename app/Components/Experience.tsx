'use client'
import { motion } from "framer-motion"
import { ExperienceCard } from "./ExperienceCard"



export const Experience = ()=>{
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
        }} className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
           
           
           
            <h3
            className="absolute top-24 xl:top-16 md:top-16 uppercase tracking-[20px] text-gray-500 text-2xl"
            >Experience</h3>
            

            <div className="w-full absolute top-32 xl:top-20 md:top-20 flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
            <ExperienceCard></ExperienceCard>
            <ExperienceCard></ExperienceCard>
            <ExperienceCard></ExperienceCard>
            <ExperienceCard></ExperienceCard>

            </div>



        </motion.div>
    )
}