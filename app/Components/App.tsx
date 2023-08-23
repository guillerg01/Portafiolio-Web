'use client'

import { Cursor,useTypewriter } from "react-simple-typewriter"
import { BackgroundCircles } from "./Background"



export const Hero = ()=>{
    const[text,count] =useTypewriter({
        words:["Hi it's Guille","I'm ReactJs Developer","<Guy-who-loves-Coffie.tsx/>"],
        loop:true,
        delaySpeed:2000
    })
    return(
 

    
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles></BackgroundCircles>
      
        <h1 className="text-xl text-white">
            <span>{text}</span>
            
        <Cursor cursorColor="#F7AB0A"></Cursor>
            </h1>
       </div>






       
    )
}