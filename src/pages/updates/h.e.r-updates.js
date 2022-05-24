// import moment from 'moment';
// import Update from '../../components/update/Update';
import {Link} from 'react-router-dom';


import image01 from '../../assets/her-returns-to-form-on-her-debut-album-back-of-my-mind.jpg';
// import image02 from '../../public/shegang.jpeg'




const HERUpdates = () => {

    const customrightarrow = (
        <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-white rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      );


    return (
     <div className='app__updates__blog section__padding'>
        <div className='app__updates__blog-heading'>
          <h2 className='text-white'>H.E.R Updates</h2>
        </div>
        <div className='app__updates__blog-container'>
          <div className='app__updates__blog-container_groupA'>
          <img className="updates-image lazyload" src={image01} alt="back of my mind" />
          &nbsp;
            <div className='app__updates__blog-container_article'>
                <div className='app__updates__blog-container_article-content'>
                <a href="https://www.her-official.com/#tour" target="_blank" rel="noopener noreferrer"><h3>BOMM Tour Schedule</h3></a>
                </div>
            </div>
          </div>
          
          <div className='app__updates__blog-container_groupB'>
            <div className='app__updates__blog-container_article'>
                <div className='app__updates__blog-container_article-content'>
                    <a href="https://www.coldplay.com/tour/" target="_blank" rel="noopener noreferrer"><h3>World Tour w/ Coldplay</h3></a>
                </div>
            </div>
           
            <div className='app__updates__blog-container_article'>
                <div className='app__updates__blog-container_article-content'>
                    <a href="#/"><h3>Appearances</h3></a>
                </div>
            </div>
          
            <div className='app__updates__blog-container_article'>
                <div className='app__updates__blog-container_article-content'>
                    <a href="#/"><h3>Interviews</h3></a>
                </div>
            </div>
           
            <div className='app__updates__blog-container_article'>
                <div className='app__updates__blog-container_article-content'>
                    <a href="http://lightsonfest.com/"  target="_blank" rel="noopener noreferrer"><h3>Festivals</h3></a>
                </div>
            </div>
           
            <div className='app__updates__blog-container_article'>
                <div className='app__updates__blog-container_article-content'>
                    <a href="#/"  rel="noopener"><h3>Collaborations</h3></a>
                </div>
            </div>
          
            <div className='app__updates__blog-container_article'>
                <div className='app__updates__blog-container_article-content'>
                    <a href="#/"  rel="noopener"><h3>Projects</h3></a>
                </div>
            </div>
            
            <div className='app__updates__blog-container_article'>
                <div className='app__updates__blog-container_article-content'>
                    <a href="https://www.hollywoodreporter.com/movies/movie-news/h-e-r-to-make-acting-debut-in-the-color-purple-movie-musical-exclusive-1235004336/" target="_blank" rel="noopener noreferrer"><h3>Acting Gigs</h3></a>
                </div>
            </div>
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-8 gap-12 mb-8 relative center'>
            <div className='col-span-1 lg:col-span-8 adjacent-post rounded-lg relative shegang'>
                <div className='bg-image rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block mb-2 mt-2'>
                
                    <div className='flex flex-col rounded-lg p-6 items-center justify-center w-100 h-full'>
                    <p className='text-white text-shadow font-semibold text-xs'>
                    </p>
                    <p className="text-white text-shadow font-semibold text-2xl text-center">
                        SheGang Meetups
                    </p>
                    </div>
                </div>
                <span className='cursor-pointer w-full h-full'></span>
                <Link to="/meetups/shegang">
                <div className=" arrow-btn left-0 text-center py-2 cursor-pointer bg-black rounded-full w-40 center" customrightarrow={customrightarrow}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </div>
                </Link>
            </div>
        </div>
     </div>
     
    )
  }
  
  export default HERUpdates;