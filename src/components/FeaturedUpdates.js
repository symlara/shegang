// import moment from 'moment';
// import Image from 'next/image';
import {Link} from 'react-router-dom';

import bg from '../assets/her-returns-to-form-on-her-debut-album-back-of-my-mind.jpg';




const FeaturedUpdates = () => (
    <div className="relative h-72">
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-72 opacity-90" style={{backgroundImage: `url(${bg.src})`}}>
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-25 w-full h-72" />
    <div className="flex flex-col rounded-lg p-4 items-center justify-center absolute w-full h-full">
        <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-25 w-full h-72" />
            {/* <p className="text-white mb-4 text-shadow font-semibold text-xs">{moment().format('MMM DD, YYYY')}</p> */}
            <p className="text-white mb-4 text-shadow font-bold text-xl text-center">H.E.R Updates</p>
            <div className="flex items-center absolute bottom-5 w-full justify-center">
            <img
                unoptimized
                alt="back of my mind"
                height="30px"
                width="30px"
                className="align-middle drop-shadow-lg rounded-full lazyload"
                src={bg}
        />
            </div>
            </div>
        </div>  
        
        <Link to="/updates/h.e.r-updates"><span className="cursor-pointer absolute w-full h-full" /></Link>
    </div>
);

export default FeaturedUpdates;

