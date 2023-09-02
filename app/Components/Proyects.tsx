'use client'

import Imagen from '../../img/assistence2.jpg'


import Imagen2 from '../../img/cronometroV2.jpg'
import Imagen3 from '../../img/cronometroback.jpg'
import Imagen4 from '../../img/libreria.jpg'
import Imagen5 from '../../img/pelu.jpg'
import Imagen6 from '../../img/pruebafigma.jpg'



import { motion } from 'framer-motion'



export const Proyects = ()=>{
  
const URL = [Imagen.src,Imagen2.src,Imagen3.src,Imagen4.src,Imagen5.src,Imagen6.src,]

const INFO = ['Development of a WEB control and administration of School Attendance, with Vite, Chakra UI, Petition Management,Using, Access Token, Cookies, Administrative Panels, Validations, Achieving the Mi WebXCuba Cup Winner','Development of a Writing Competency Application Fast, as well as Frontend with React, Next, TailwindsCss, Applying Validations against Traps, useContext to management of global states, use of Tokens in Cookies and Complete CRUD Petitions system, managing to link, integrate and deploy with the Backend that you create in Node.js, Express, MongoDB using Mongoose ','Backend of the previous Project','I developed a web application for a multinational publishing label that allowed users to view available books and create a reading list. The app displayed a list of available books that the user could review, allowed the creation of a reading list from the available books, and filtered the list of available books by genre. Also, the app had data persistence.','Development of a Landing Page of a Hairdresser, using ChatGPT padding data, styling Next , TailwindCss, Highlighting beauty and functionality of the site','Design a beautiful and functional figma project based on various criteria and time requirements using technologies like React, Nextjs, TailwindCss, Axios and other libraries']
  
const TITLE = ['Assistence App','Cronometro App', 'Cronometro Backend','Library-Test','Art-Glam','Figma-Test']




return(<div 
        className="h-screen flex relative flex-col  text-left md:flex-row max-w-full xl:px-10 justify-evenly  mx-auto items-center z-0"
    >
        <h3 className="absolute top-24 xl:top-16 md:top-16 uppercase tracking-[20px] text-gray-500 text-2xl">Proyects</h3>


        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
            {URL.map((u,i)=>{
                return(
                    <div  key={i} className='h-screen flex flex-shrink-0 snap-center flex-col space-y-5 items-center justify-center p-20 md:p-44 w-screen'>
                    <motion.img 
                    initial={{
                        y:-300,
                        opacity:0
                    }}
                    transition={{
                        duration:1.2
                    }}
                    whileInView={{
                        opacity:1,
                        y:0
                    }}
                    viewport={{
                        once:true
                    }}
                    
                    
                    src= {u} className='xl:w-2/4 md:w-2/4'></motion.img>
                    <div className='space-y-5 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-4l font-semibold text-center'>
                            <span className='underline decoration-[#F7AB0A]'>Case Study {i+1} of {URL.length}:</span> {TITLE[i]}</h4>


                            <p className=' text-center md:text-left'>{INFO[i]}</p>

                    </div>
                    </div>
                )
            })}

        </div>



        <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>


    </div>)
}