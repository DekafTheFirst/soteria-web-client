import {
  RouterProvider,
  createBrowserRouter,
  Outlet,
  useLocation,
  useParams,

} from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import "./App.css"
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import Events from './pages/Events/Events';
import Banner from './components/Banner/Banner';
import Watch from './pages/Connect/Watch/Watch';
import EventDetails from './pages/Events/EventDetails/EventDetails';
import Connect from './pages/Connect/Connect';
import PrayerRequest from './pages/Connect/PrayerRequest/PrayerRequest';
import AboutUs from './pages/AboutUs/AboutUs';
import JoinUs from './pages/JoinUs/JoinUs';


const soteriaYoutubeLink = "https://www.youtube.com/watch?v=mqi0J4trN8Q&t=5412s"

const Layout = ({ scrolled }) => {
  const { pathname, state } = useLocation()

  let title;
  if (state?.title) {
    title = state?.title;
  }

  // List of all routes that should make the navbar stay black on mobile screens, !!!Especially Form pages like
  // const routesWithSpecialHeader = ['/connect/prayer-requests', '/connect/prayer-requests'];

  // Check if the current pathname matches any specific route
  // const isSpecial = routesWithSpecialHeader.find(route => route === pathname) !== undefined;


  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      {pathname !== "/" && <Banner pathname={pathname} title={title} />}
      <div className="content">
        <Outlet />
      </div>
      <Footer />
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
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about-us",
          element: <AboutUs />,
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
              path: "sermons",
              element: <ExternalRedirectPage />,
            },
            {
              path: "prayer-requests",
              element: <PrayerRequest />,
            },
            {
              path: "contact-us",
              element: <Watch />,
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
          path: "/more/:slug",
          element: <Events />,
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
