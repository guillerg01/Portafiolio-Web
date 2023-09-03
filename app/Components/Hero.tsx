'use client'

import { Cursor, useTypewriter } from "react-simple-typewriter"
import { BackgroundCircles } from "./Background"
import Image from "next/image"
import Imagen from '../../img/img.jpg'
import { Link, animateScroll as scroll } from "react-scroll";

export const Hero = () => {
    const [text, count] = useTypewriter({
        words: ["Hi it's Guille", "I'm ReactJs Developer", "<Guy-who-loves-Coffie.tsx/>"],
        loop: true,
        delaySpeed: 2000
    })
    return (



        <div className="h-screen  flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">


            <BackgroundCircles></BackgroundCircles>
            <Image className="rounded-full mx-auto relative object-cover" width={100} height={100} src={Imagen} alt="Imagen"></Image>

            <div className="z-20">


                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">FrontEnd Developer</h2>


                <h1 className="text-5xl  lg:text-6xl font-semibold scroll-px-10">

                    <span className="mr-3">{text}</span>

                    <Cursor cursorColor="#F7AB0A"></Cursor>
                </h1>


                <div className="pt-5">

                    <Link activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}

                    >
                        <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">About</button>
                    </Link>
                    <Link activeClass="active"
                        to="about"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500} href='#experience'>
                        <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">Experience</button>
                    </Link>
                    <Link 
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}  href='#Skills'>
                        <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">Skills</button>
                    </Link>
                    <Link 
                     activeClass="active"
                     to="about"
                     spy={true}
                     smooth={true}
                     offset={-70}
                     duration={500} 
                     href='#Proyects'>
                        <button className="px-6 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40">Proyects</button>
                    </Link>




                </div>

            </div>


        </div>










    )
}