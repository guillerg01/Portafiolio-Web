import { motion } from 'framer-motion';


export const BackgroundCircles = ()=>{
    return(
    
    
    <motion.div 
    initial={{
        opacity:0,
    }}
    animate={{
        scale:[1,2,2,3,1],
        opacity:[0.1,0.2,0.4,0.8,0.1,1],
    }}    
    transition={{
        duration:2.5,
    }}
    
    
    
    className='relative flex justify-center items-center'>

        <div className='border absolute border-[#333333] h-[200px] w-[200px] rounded-full mt-52 animate-ping'/>
        <div className='border absolute border-[#333333] h-[300px] w-[300px] rounded-full mt-52 '/>
        <div className='border absolute border-[#333333] h-[500px] w-[500px] rounded-full mt-52 '/>
        <div className='border absolute border-[#F7AB0a] opacity-20 h-[650px] w-[650px] rounded-full mt-52 animate-pulse'/>
        <div className='border absolute border-[#333333] opacity-20 h-[800px] w-[800px] rounded-full mt-52 ' />




    </motion.div>)
}