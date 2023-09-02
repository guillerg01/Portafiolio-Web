'use client'
import { motion } from "framer-motion"



export const ExperienceCard = () => {

    return (
        <article className="flex flex-col  rounded-lg  items-center space-y-7 xl:space-y-5 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[700px]   snap-center bg-[#292929] p-10 xl:p-5 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200">
            <motion.img

                initial={{
                    y: -100,
                    opacity: 0
                }}
                whileInView={{
                    opacity: 1,
                    y: 0
                }}
                transition={{
                    duration: 2
                }}
                viewport={{
                    once: true
                }}

                alt="img" className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxEWjUHfwhUlM6sQBkHp1yv0X_AC06LGWYrg&usqp=CAU"></motion.img>


            <div className="px-0 md:px-10">
                <h4 className="text-4xl xl:text-4xl font-light">Desarrollador</h4>
                <p className="font-bold text-2xl xl:text-xl mt-1">Proyecto propio</p>

            </div>



            <a className="xl:w-[200px]" href="https://github.com/guillerg01">
                <motion.img src="https://skillicons.dev/icons?i=git,kubernetes,docker,c,vim" />
            </a>


            <p className="uppercase  text-gray-300">Started work.... ended...</p>

            <ul className="list-disc ml-5 xl:text-sm text-lg">

                <li>Summary pointsSummary pointsSummary pointsSummary points</li>
                <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
                <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
                <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
                <li>Summary pointsSummary pointsSummary pointsSummary pointsSummary points</li>
            </ul>



        </article>
    )
}