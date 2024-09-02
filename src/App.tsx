import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from '@/components/Navbar/Navbar';
import Home from '@/components/Home/Home';
import AboutUs from '@/components/AboutUs/AboutUs';
import Ourclasses from '@/components/OurClasses/Ourclasses';
import Benefits from '@/components/Benefits/Benefits';
import ContactUs from '@/components/ContactUs/ContactUs';
import Footer from '@/components/Footer/Footer';
import { SelectedPage } from '@/shared/types';

const components = [
  { Component: Home, id: SelectedPage.Home },
  { Component: AboutUs, id: SelectedPage.AboutUs },
  { Component: Ourclasses, id: SelectedPage.OurClasses },
  { Component: Benefits, id: SelectedPage.Benefits },
  { Component: ContactUs, id: SelectedPage.ContactUs },
  { Component: Footer, id: SelectedPage.Footer },
];

const App: React.FC = () => {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div dir="rtl" className="bg-secondary text-primary-text max-w-svw">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      {components.map(({ Component, id }) => (
        <Component 
          key={id} 
          setSelectedPage={setSelectedPage} 
          selectedPage={selectedPage}
        />
      ))}
      <motion.div
        className="bg-secondary-text fixed bottom-2 left-0 right-0 h-[0.3125rem] w-full rounded-full"
        style={{ scaleX }}
      />
    </div>
  );
};

export default App;