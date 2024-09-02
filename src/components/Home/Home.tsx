import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Link as LinkScroll, Element } from 'react-scroll';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useParallax } from '@/hooks/hooks';
import { SelectedPage } from '@/shared/types';
import { HOME_TEXT, JOIN_NOW, LEARN_MORE } from '@/shared/pageTexts';
import ActionButton from '@/shared/ActionButton';
import HomePageGraphic from '@/assets/images/HomePageGraphic.png';
import homeBackground from '@/assets/images/homeBackground.jpeg';

type Props = {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Home: React.FC<Props> = ({ selectedPage, setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const contentItems = [
    'מי אנחנו? ישראל וטליה - בעלי סטודיו לאימוני כוח ושיפור הרכב גוף עם דגש על טאצ\' אישי (כן, ממש 1 על 1)',
    'אצלנו, כל מתאמן.ת עוברים אימון היכרות + אבחון מקצועי + שיחת תיאום ציפיות',
    'כי בינינו, בשביל להשיג תוצאות ולהתמיד - צריך התאמה אישית של התוכנית אליכם ולא אתכם לתוכנית.',
    'איפה הסטודיו? בסמוך לבנייני המשרדים/ קניון איילון, בני ברק - רמת גן. [כן, יש פה חנייה ברווח]'
  ];

  return (
    <Element name="home">
      <section className="relative flex h-screen snap-center items-center justify-center">
        <div ref={ref} className="w-full">
          <img
            alt="Background"
            className="absolute inset-0 h-full w-full object-cover opacity-5"
            src={homeBackground}
          />
          <motion.div
            className="mx-auto flex w-5/6 flex-col items-center gap-2 lg:mt-32 lg:flex-row xl:gap-24 md:gap-10"
            onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
          >
            <div className="h-auto w-full max-w-60 xs:pt-14 md:max-w-max">
              <img src={HomePageGraphic} alt="home-page-graphic" />
              {!isAboveMediumScreens && (
                <div className="h-2 w-full rounded-3xl bg-primary" />
              )}
            </div>
            <div className="z-10 py-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <div className="mx-auto w-full rounded-lg text-secondary-text">
                  <h1 className="mb-4 text-[1rem] font-bold xs:text-[1.125rem] md:text-[1.5rem] xl:text-[2rem]">
                    אם הגעתם לפה, אתם מאלו שמשקיעים בגוף שלהם ורוצים לראות תוצאות.
                  </h1>
                  <div className="space-y-4 text-[0.875rem] leading-7 xs:text-[1rem] md:text-[1.125rem] xl:text-[1.25rem]">
                    {contentItems.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="mt-8 flex items-center gap-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <ActionButton
                  selectedPage={SelectedPage.ContactUs}
                  className="cursor-pointer rounded-md bg-accent px-10 py-2 text-center text-secondary-text transition duration-500 hover:bg-secondary hover:text-primary-text"
                >
                  {JOIN_NOW}
                </ActionButton>
                <LinkScroll
                  smooth
                  duration={1000}
                  to={`${SelectedPage.AboutUs}`}
                  className="cursor-pointer text-nowrap text-[0.75rem] font-bold text-secondary-text underline hover:text-primary-text xs:text-[0.875rem] md:text-[1rem] xl:text-[1.125rem]"
                  onClick={() => setSelectedPage(SelectedPage.AboutUs)}
                >
                  <p>{LEARN_MORE}</p>
                </LinkScroll>
              </motion.div>
            </div>
          </motion.div>
          {isAboveMediumScreens && (
            <div className="h-[9.375rem] w-full bg-primary py-10">
              <div className="mx-auto w-5/6">
                <div className="flex w-3/5 items-center justify-between gap-8">
                  {/* Sponsor logos can be added here */}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </Element>
  );
};

export default Home;
