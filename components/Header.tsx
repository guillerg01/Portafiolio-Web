import {SocialIcon} from 'react-social-icons'



export const Header = ()=>{

    return(
        <header className="flex sticky top-0 justify-between p-5 max-w-7xl mx-auto z-20  xl:items-center">

            <div className="flex flex-row items-center ">
                <SocialIcon
                fgColor='gray'
                bgColor='transparent'
                url='http://github.com/guillerg01'
                ></SocialIcon>
                 <SocialIcon 
                   fgColor='gray'
                   bgColor='transparent'
                url='http://linkedin.com/guillerg01'
                ></SocialIcon>
                 <SocialIcon
                   fgColor='gray'
                   bgColor='transparent'
                url='https://www.facebook.com/profile.php?id=100013480143462'
                ></SocialIcon>
            </div>

            <div className="flex flex-row items-center cursor-pointer">
            <SocialIcon
                   fgColor='gray'
                   bgColor='transparent'
                   network='email'
                ></SocialIcon>
                <h3 className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</h3>
            </div>


        </header>
        )
}