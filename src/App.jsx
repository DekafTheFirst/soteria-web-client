import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  useLocation,
  ScrollRestoration,


} from 'react-router-dom';
import { useEffect, useState } from 'react'
import { initializeApp } from "firebase/app";

;
import "./App.css"
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import Events from './pages/Events/Events';
import Banner from './components/Banner/Banner';
import EventDetails from './pages/Events/EventDetails/EventDetails';
import Connect from './pages/Connect/Connect';
import PrayerRequest from './pages/Connect/PrayerRequest/PrayerRequest';
import AboutUs from './pages/AboutUs/AboutUs';
import JoinUs from './pages/JoinUs/JoinUs';
import ContactUs from './pages/Connect/ContactUs/ContactUs';
import Directorates from './pages/AboutUs/Directorates/Directorates';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Community from './pages/Community/Community';
import Outreaches from './pages/Community/Outreaches/Outreaches';
import PlanYourVisit from './pages/PlanYourVisit/PlanYourVisit';
import MobileApp from './pages/Mobile-App/MobileApp';
import DanielsMen from './pages/Fellowships/DanielsMen/DanielsMen';
import Poiema from './pages/Fellowships/Poiema/Poiema';
import Kiddies from './pages/Fellowships/Kiddies/Kiddies';
import Sodip from './pages/Connect/Sodip/Sodip';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from './context/AuthContext';
import { firebaseConfig } from './utils/firebaseConfig';
import Login from './pages/Authentication/Login/Login';
import Catalyst from './pages/Fellowships/Catalyst/Catalyst';


const soteriaYoutubeLink = "https://www.youtube.com/watch?v=mqi0J4trN8Q&t=5412s";


export const firebaseApp = initializeApp(firebaseConfig);


const Layout = ({ scrolled }) => {
  const { pathname, state } = useLocation()

  
  const title = state?.event?.title;
  // List of all routes that should make the navbar stay black on mobile screens, !!!Especially Form pages like
  // const routesWithSpecialHeader = ['/connect/prayer-requests', '/connect/prayer-requests'];

  // Check if the current pathname matches any specific route
  // const isSpecial = routesWithSpecialHeader.find(route => route === pathname) !== undefined;

  return (
    <div className="app">
      <AuthProvider >
        <ScrollToTop />
        <Navbar scrolled={scrolled} />
        {pathname !== "/" && <Banner pathname={pathname} title={title} />}
        <div id="content">
          <Outlet />
        </div>
        <Footer />
      </AuthProvider>
    </div>
  )
}

const ExternalRedirectPage = () => {
  useEffect(() => {
    // Redirect to the external site in a new tab
    window.open(soteriaYoutubeLink, '_blank');
    window.location.href = '/';
  }, []); // Run only once when the component mounts

  // Render null because there's nothing to render on this page
  return null;
};


function App() {
  const [scrolled, setScrolled] = useState(false)


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout scrolled={scrolled} />,
      errorElement: <NotFoundPage />,
      children: [
        
        {
          path: "",
          element: <Home />,
        },

        {
          path: "/about-us",
          children: [
            {
              index: true,
              element: <AboutUs />
            },
            {
              path: "directorates",
              element: <Directorates />,
            },
          ]
        },
        {
          path: "/connect",
          children: [
            {
              index: true,
              element: <Connect />,
            },
            {
              path: "live-stream",
              element: <ExternalRedirectPage />,
            },
            {
              path: "daniels-men",
              element: <DanielsMen />
            },
            {
              path: "poiema",
              element: <Poiema />
            },
            {
              path: "kiddies",
              element: <Kiddies />
            },
            {
              path: "catalyst",
              element: <Catalyst />
            },
            {
              path: "sermons",
              element: <ExternalRedirectPage />,
            },
            {
              path: "prayer-requests",
              element: <PrayerRequest />,
            },
            {
              path: "sodip",
              element: <Sodip />,
            },
            {
              path: "contact-us",
              element: <ContactUs />,
            },
          ],
        },
        {
          path: "/join-us",
          element: <JoinUs />,
        },
        {
          path: "/events",
          element: <Events />,
        },
        {
          path: "/events/:eventId",
          element: <EventDetails />, // Route for individual event pages
        },
        {
          path: "/community-engagement",
          children: [
            {
              index: true,
              element: <Community />,
            },
            {
              path: "outreaches",
              element: <Outreaches />,
            },
          ],
        },
        {
          path: "/plan-your-visit",
          element: <PlanYourVisit />,
        },
        {
          path: "/mobile-app",
          element: <MobileApp />,
        },
        {
          path: "/login",
          element: <Login/> ,
        },
        {
          path: "*",
          element: <NotFoundPage />

        },

      ]
    }

  ])

  useEffect(() => {
    // Listen for scroll events
    const handleScroll = () => {
      // Check the scroll position
      if (window.scrollY > 40) { // Change 100 to the desired scroll position
        // Update the state to indicate that the user has scrolled
        setScrolled(true);
      } else {
        // Update the state to indicate that the user hasn't scrolled
        setScrolled(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up by removing the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <RouterProvider router={router} />);
}

export default App;
