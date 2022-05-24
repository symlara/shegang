import {Link }from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
// import image01 from '../../assets/Back_Of_My_Mind_By_H.E.R.png';
import image02 from '../../assets/shegang.png';
import 'tachyons'


const Meetups = () => {      
    
    const customleftarrow = (
        <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-white rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
        </div>
      );

    return (
        <div className='app__meetups__blog section__padding'>
             <div className='app__updates__blog-heading'>
                <h2 className='text-white text-3xl font-semibold text-center pb-3' id="shegang">SheGang Meetups</h2>
            </div>
  a          <div className='app__meetups__blog-container'>
                <div className='app__meetups__blog-container_groupA'>
                    <img className="meetups-image lazyload" src={image02} alt="shegang" />
                    &nbsp;
                    <div className='app__meetups__blog-container_article'>
                        <div className='app__meetups__blog-container_article-content'>
                            <a href="http://lightsonfest.com/" target="_blank" rel="noopener noreferrer"><h3>Lights On Fest</h3></a>
                        </div>
                    </div>
                </div>

                <div className='app__meetups__blog-container_groupB'>
                    <div className='app__meetups__blog-container_article'>
                        <div className='app__meetups__blog-container_article-content'>
                            <a href="https://www.her-official.com/#tour" target="_blank" rel="noopener noreferrer"><h3>Tour Meet Ups</h3></a>
                        </div>
                    </div>

                    <div className='app__meetups__blog-container_article'>
                        <div className='app__meetups__blog-container_article-content'>
                            <a href="#/"><h3>Traveling</h3></a>
                        </div>
                    </div>

                    <div className='app__meetups__blog-container_article'>
                        <div className='app__meetups__blog-container_article-content'>
                            <a href="#/"><h3>Adventures</h3></a>
                        </div>
                    </div>

                    <div className='app__meetups__blog-container_article'>
                        <div className='app__meetups__blog-container_article-content'>
                            <a href="#/"><h3>Connections for professional and casual reasons</h3></a>
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
                        Career/Education Advise
                            </p>
                        </div>
                    </div>
                <span className='cursor-pointer w-full h-full'></span>
                    <Link to="/advise/advise">
                     <div className=" arrow-btn left-0 text-center py-2 cursor-pointer bg-black rounded-full w-40 center" customleftarrow={customleftarrow}>
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </div>
                </Link>
                </div>
            </div>
    </div>
    );
}

export default Meetups;