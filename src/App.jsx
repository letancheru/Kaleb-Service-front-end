import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.scss'

/*
* @ All pages Import
*/
import Demo from './pages/Demo';
import HomeOne from './pages/HomeOne';
import HomeTwo from './pages/HomeTwo';
import Service from './pages/Service';
import ServiceDetails from './pages/ServiceDetails';
import BlogGridRightSidebar from './pages/BlogGridRightSidebar';
import BlogGridLeftSidebar from './pages/BlogGridLeftSidebar';
import BlogGridWithoutSidebar from './pages/BlogGridWithoutSidebar';
import BlogListLeftSidebar from './pages/BlogListLeftSidebar';
import BlogListRightSidebar from './pages/BlogListRightSidebar';
import BlogDetailsPage from './pages/BlogDetails';
import Team from './pages/Team';
import TeamDetails from './pages/TeamDetails';
import About from './pages/About';
import Contact from './pages/Contact';
import Error404 from './pages/Error404';
import ScrollToTop from './helpers/ScrollToTop';

const App = () => {
    return (
        <Router>
            <ScrollToTop>
                <Routes>
                    {/* <Route exact path='/' element={<Demo />} /> */}
                    <Route exact path= '/' element={<HomeOne />} />
                    <Route exact path= '/home-two' element={<HomeTwo />} />
                    <Route exact path= '/services' element={<Service />} />
                    <Route path='/service/:serviceID' element={<ServiceDetails />} />
                    {/* <Route exact path="/blog-grid-right-sidebar" element={<BlogGridRightSidebar />} />
                    <Route exact path= "/blog-grid-left-sidebar" element={<BlogGridLeftSidebar />} />
                    <Route exact path= "/blog-grid-without-sidebar" element={<BlogGridWithoutSidebar />} />
                    <Route exact path= "/blog-list-left-sidebar" element={<BlogListLeftSidebar />} />
                    <Route exact path= "/blog-list-right-sidebar" element={<BlogListRightSidebar />} />
                    <Route path= "/blog/:blogID" element={<BlogDetailsPage />} /> */}
                    <Route exact path= "/team" element={<Team />} />
                    {/* <Route path= "/team-member/:teamID" element={<TeamDetails />} /> */}
                    <Route exact path= "/about" element={<About />} />
                    <Route exact path= "/contact" element={<Contact />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </ScrollToTop>
        </Router>
    );
};

export default App;
