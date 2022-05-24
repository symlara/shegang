import 'tachyons';

export default function Videos () {
    return (
    <div className="videos">
        <div className="mw9 center ph3-ns" id="music-videos">

                <div className="cf ph3-ns">
                    <div className="video-container">
                        <div className="fl w-50">
                        <iframe className='lazyload' width="100%" src="https://www.youtube.com/embed/PAFAfhod9TU" title="damage" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                       

                        <div className="fl w-50">
                        <iframe className='lazyload' width="100%" src="https://www.youtube.com/embed/50GjhhyfN_Q" title="come through" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>      
                        </div>
                    </div>
                </div>

                <div className="cf ph2-ns">
                    <div className="video-container">
                        <div className="fl w-50">
                            <iframe className='lazyload' width="100%" src="https://www.youtube.com/embed/Nu8TS2Vr6lo" title="fight for you" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>

                        <div className="fl w-50">
                        <iframe className='lazyload' width="100%" src="https://www.youtube.com/embed/ZapsCvLokU8" title="fate" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                        </div>
                    </div> 
                </div>

                <div className="cf ph2-ns">
                    <div className="video-container">
                        <div className="fl w-50">
                            <iframe className='lazyload' width="100%" src="https://www.youtube.com/embed/eOxmsnihI_c" title="back of my mind" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>            
                        </div>

                        <div className="fl w-50">
                        <iframe className='lazyload' width="100%" src="https://www.youtube.com/embed/b7log9lahy8" title="closer to me" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe> 
                        </div>
                    </div> 
                </div>

        </div>
    </div>      
        
    )

}