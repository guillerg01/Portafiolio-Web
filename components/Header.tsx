import {SocialIcon} from 'react-social-icons'




export const Header = ()=>{

    return(
        <div className="flex">

            <div className="icons">
                <SocialIcon
                url='http://github.com/guillerg01'
                ></SocialIcon>
                 <SocialIcon
                url='http://linkedin.com/guillerg01'
                ></SocialIcon>
            </div>

            <div className="algo"></div>


        </div>
        )
}