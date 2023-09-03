'use client'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/20/solid"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
 name:String;
 email:String;
 subject:String;
 message:String
};


export const ContactMe = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {

        window.location.href = `mailto:guillerg0101@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`
    }
  

    return (<div className="h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">



        <h3 className="absolute top-24 xl:top-10 md:top-16 uppercase tracking-[20px] text-gray-500 text-2xl">Contact Me</h3>


        <div className="flex flex-col mt-20 space-y-5 md:space-y-2  xl:space-y-2 ">
            <h4 className="text-4xl font-semibold text-center"> I Have got just what you need. <br></br> {""}
                <span className="decoration-[#F7AB0A]/50 underline">Lets Talk.</span>
            </h4>

            <div className="space-y-2 ">
                <div className="flex items-center space-x-5  justify-center">
                    <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"></PhoneIcon>
                   <a href='http://wa.me/+5355545028'>  <p className="text-2xl">+5355545028</p></a>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"></EnvelopeIcon>
                   <a href='http://wa.me/+5355545028'>  <p className="text-2xl">guillerg0101@gmail.com</p></a>
                </div>

                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse"></MapPinIcon>
                   <a href='http://wa.me/+5355545028'>  <p className="text-2xl">Cuba Camaguey</p></a>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col md:space-y-2  xl:space-y-2 space-y-5   md:w-fit mx-auto">

                        <div className="flex space-x-2">
                            <input {...register('name')} placeholder="Name" className="outline-none bg-slate-400/10 rounded-sm border-[#242424] text-gray-200 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/70 hover:border-[#F7AB0A]/40 px-6 w-[50%] py-4" type="text"></input>
                            <input  {...register('email')} placeholder="Email" className="outline-none bg-slate-400/10 rounded-sm border-[#242424] text-gray-200 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/70 hover:border-[#F7AB0A]/40 px-6 py-4 w-[50%]" type="text"></input>
                        </div>

                        <input  {...register('subject')} placeholder="Subject" className="outline-none bg-slate-400/10 rounded-sm border-[#242424] text-gray-200 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/70 hover:border-[#F7AB0A]/40 px-6 py-4" type="text"></input>

                        <textarea  {...register('message')} placeholder="Message" className="outline-none bg-slate-400/10 rounded-sm border-[#242424] text-gray-200 placeholder-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/70 hover:border-[#F7AB0A]/40 px-6 py-4" ></textarea>

                        <button type="submit" className="bg-[#F7AB0A] hover:bg-[#F7AB0A]/50 py-5 px-10 rounded-md text-black font-bold text-xl">Submit</button>


                </form>


            </div>




        </div>


    </div>)
}