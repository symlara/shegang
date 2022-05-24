import { useUserContext } from "./context/userContext";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from './components/Nav';
import FeaturedUpdate2 from "./components/FeaturedUpdate2";
import FeaturedUpdates from "./components/FeaturedUpdates";
import Footer from "./components/Footer";
import Login from './pages/Login';
import Dashboard from './pages/dashboard';
import Profile from "./pages/Profile";
import Advise from "./pages/advise/advise";
import albums from "./pages/albums/albums";
import samples from './pages/samples/samples';
import meetups from "./pages/meetups/shegang";
import updates from './pages/updates/h.e.r-updates';
import videos from './pages/videos/videos';
import Carousel from 'react-multi-carousel';

import PrivateRoute from "./components/PrivateRoute";

import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 640 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};


function App() {  
  const { user, loading, error } = useUserContext();

  const customleftarrow = (
    <div className="absolute arrow-btn left-0 text-center py-3 cursor-pointer bg-white rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
    </div>
  );

  const customrightarrow = (
    <div className="absolute arrow-btn right-0 text-center py-3 cursor-pointer bg-white rounded-full">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
      </svg>
    </div>
  );


  return (
   <BrowserRouter>
      <Header />
      <Nav />
      <div className='mb-8 carousel'>
          <Carousel infinite customleftarrow={customleftarrow} customrightarrow={customrightarrow} responsive={responsive} itemClass="px-4">
            <FeaturedUpdates />
              <div className="text-white">
                <FeaturedUpdate2 />
              </div>
          </Carousel>
        </div>
      <Switch>
        <Route exact path="/login" component={Login} />
        <PrivateRoute exact path="/chat" component={Dashboard} />
        <Route exact path="/meetups/shegang" component={meetups} />
        <Route exact path="/updates/h.e.r-updates" component={updates} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route exact path="/advise/advise" component={Advise} />
        <Route exact path="/albums/albums" component={albums} />
        <Route exact path="/videos/videos" component={videos} />
        <Route exact path="/samples/samples" component={samples} />
      </Switch>
      <Footer />
   </BrowserRouter>
  )
}

export default App;