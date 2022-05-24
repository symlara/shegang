// import moment from 'moment';
// import Image from 'next/image';
import{ Link }from 'react-router-dom';

import image02 from '../assets/shegang.jpeg';



const FeaturedUpdate2 = () => (
    <div className="featured h-72">
        <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72 opacity-75">
            {/* <Image 
                src={image02}
                alt="shegang"
                
             /> */}
        </div>
        <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-25 w-full h-72" />
        <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
            {/* <p className="text-white mb-4 text-shadow font-semibold text-xs">{moment().format('MMM DD, YYYY')}</p> */}
            <p className="text-white mb-4 text-shadow font-bold text-xl text-center">SheGang Meetups</p>
            <div className="flex items-center absolute bottom-5 w-full justify-center">
            <img
                unoptimized
                alt="back of my mind"
                height="30px"
                width="30px"
                className="align-middle drop-shadow-lg rounded-full lazyload"
                src={image02}
        />
            </div>
        </div>  
        <Link to="/meetups/shegang"><span className="cursor-pointer absolute w-full h-full" /></Link>
    </div>
);

export default FeaturedUpdate2;

