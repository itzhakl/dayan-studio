import React, { useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Element } from 'react-scroll';
import { useParallax } from '@/hooks/hooks';
import { SelectedPage } from '@/shared/types';
import HText from '@/shared/HText';
import ActionButton from '@/shared/ActionButton';
import { benefits } from './data';
import BenefitsSection from './BenefitsSection';
import BenefitsPageGraphic from '@/assets/images/BenefitsPageGraphic.png';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits: React.FC<Props> = ({ setSelectedPage }) => {
  const ref = useRef<HTMLDivElement>(null);
  const benefitsRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: 'left' | 'right') => {
    const container = benefitsRef.current;
    if (container) {
      const scrollAmount = direction === 'left' ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      setScrollPosition(container.scrollLeft + scrollAmount);
    }
  };

  return (
    <Element name="benefits">
      <section className="relative min-h-screen py-20">
        <div ref={ref} className="container mx-auto px-4">
          <motion.div
            className="flex flex-col items-center justify-center"
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
          >
            <motion.div
              className="mb-16 text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, y: -50 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <HText>הדרך שלך לכושר מיטבי</HText>
              <p className="mt-5 text-lg text-gray-600 md:text-xl">
                בסטודיו שלנו, אנחנו מאמינים שכושר הוא יותר מסתם פעילות גופנית - זו דרך חיים. 
                אנחנו מספקים סביבה תומכת, מאתגרת ומעצימה שתעזור לך להגיע ליעדים שלך ולהרגיש טוב יותר מתמיד.
              </p>
            </motion.div>

            <div className="relative mb-16 w-screen">
              <motion.div
                ref={benefitsRef}
                className="flex overflow-x-auto scrollbar-hide"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ staggerChildren: 0.2 }}
              >
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex-shrink-0 w-80 mx-2">
                    <BenefitsSection
                      benefit={benefit}
                      setSelectedPage={setSelectedPage}
                    />
                  </div>
                ))}
              </motion.div>
              <button
                onClick={() => scroll('left')}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
                // style={{ display: scrollPosition <= 0 ? 'none' : 'block' }}
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              <button
                onClick={() => scroll('right')}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-lg"
                // style={{ display: scrollPosition >= (benefitsRef.current?.scrollWidth || 0) - (benefitsRef.current?.clientWidth || 0) ? 'none' : 'block' }}
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>

            <motion.div
              className="flex flex-col items-center lg:gap-6 md:flex-row md:justify-between"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <div className="mb-10 max-w-md text-center md:mb-0 md:text-left md:pr-8">
                <h3 className="mb-5 text-2xl font-bold text-gray-800 md:text-3xl">
                  הצטרפו למשפחת המתאמנים שלנו
                </h3>
                <p className="mb-8 text-gray-600">
                  בסטודיו שלנו, אתם לא רק מתאמנים - אתם חלק ממשפחה. 
                  עם מאמנים מקצועיים, ציוד מתקדם ואווירה תומכת, 
                  אנחנו כאן לעזור לכם להגשים את החלומות הגדולים ביותר שלכם בתחום הכושר והבריאות.
                </p>
                <ActionButton selectedPage={SelectedPage.ContactUs}>
                  הצטרפו עכשיו
                </ActionButton>
              </div>
              <div className="relative">
                <img
                  src={BenefitsPageGraphic}
                  alt="מתאמנים בסטודיו"
                  className="max-w-sm rounded-lg shadow-2xl md:max-w-md transform transition-all duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white opacity-20 rounded-lg"></div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default Benefits;