'use client'
import { motion } from "framer-motion"

type Props={
    skil?:string,
    direcctionLeft?:boolean

}

export const Skill = ({direcctionLeft,skil}:Props)=>{
    const Url =`https://skillicons.dev/icons?i=${skil}`
    return(

        <div>
    <motion.img
    initial={{
        x: direcctionLeft ? -100 :100,
        opacity:0
    }}

    transition={{
        duration:1
    }}
    whileInView={{
        opacity:1,
        x:0
    }}
   

    
    className=" hover:grayscale hover:scale-110 transition duration-300  " src={Url} />
    
   
    
    </div>
    
    )
}
