'use client'
import { motion } from "framer-motion"
import { Skill } from "./Skill"
import { log } from "console"

type Props ={
    direcctionLeft?: boolean
}

export  const SkillsUrl = ['git','css','discord','docker','vscode','figma','github','bootstrap','html','js','materialui','nextjs','nodejs','react','tailwind','ts' ]
export const Skills= ({direcctionLeft} :Props)=>{


  

    return(<>
        <motion.div
        className="h-screen flex relative flex-col  text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"

        >
          
<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Skills</h3>

<h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 text-sm">Hover over a skill for currency profieciency</h3>

<a className="group relative flex cursor-pointer" href="https://github.com/guillerg01">
<div className="grid grid-cols-4 gap-5">

{SkillsUrl.map((s,i)=>{
    let es= false
i%2===0? es=true :es=false


    return( <Skill direcctionLeft={es} key={i} skil={s}></Skill>)
})}

    
    
 
  </div>
  </a>

        </motion.div>
        
        </>
    )
}