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
        x: direcctionLeft ? -200 :200,
        opacity:0
    }}

    transition={{
        duration:1
    }}
    whileInView={{
        opacity:1,
        x:0
    }}


    
    className="object-cover filter hover:grayscale transition duration-300 ease-in-out " src={Url} />
    
   
    
    </div>
    
    )
}
