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
            Soy un desarrollador web con un año de experiencia en React, el cual aprendí rápidamente gracias a mi pasión por el aprendizaje y la ayuda de amigos expertos. He realizado varios proyectos personales usando style components, tailwind css, hooks, usecontext, llamadas a servidores y apis. Me gusta estar informado, enfrentar retos y hacer las cosas bien. Tengo habilidades para crear módulos especializados, trabajar con calidad y cumplir plazos.
            </p>
        </div>



        </motion.div>
    )
}