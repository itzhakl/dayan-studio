import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Element } from 'react-scroll';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useParallax } from '@/hooks/hooks';
import { SelectedPage } from '@/shared/types';
import israelAndTalya from '@/assets/images/israelAndTalya2.png';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const AboutUs: React.FC<Props> = ({ setSelectedPage }) => {
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 400);

  const trainers = [
    {
      name: 'ישראל דיין',
      description: [
        'מאמן הכושר בסטודיו, מוסמך וינגייט + הכשרות בתחום הפציעות והתזונה.',
        'עד לפני עשור, הייתי בחור במשקל 110 קילו, חלש וכאוב. (כן, גם אני הייתי "בצד השני") לא ידעתי מה זה כושר, ירידה במשקל ואיך רואים תוצאות איכותיות.',
        'אבל ידעתי דבר אחד - אני לא חוזר למצב שבו אני שמן, סובל וחלש! לאחר שינוי מחשבתי ופיזי הורדתי מעל 45 קילו ממשקלי והפכתי מבחור שמן לבחור ספורטיבי, בריא וחזק יותר.',
        'בעקבות כך החלטתי לשנות את מסלול חיי, להפוך למאמן כושר ולהקים סטודיו שיעביר את ה"אני מאמין" שלי: שכן, לראות תוצאות, להיות בריא וחזק זה אפשרי! לכל אחד ואחת מכם!'
      ]
    },
    {
      name: 'טליה שבת',
      description: [
        'מאמנת הכושר בסטודיו. מורה לחינוך גופני, מטפלת בספורט טיפולי ומוסמכת לאימון נשים בהריון ולאחר לידה.',
        'נתחיל בזה שגם את יכולה להראות, להרגיש ולחיות יותר טוב. איך? על ידי אימוני כוח ואירובי שיגרמו לך להיות חזקה, זקופה וחטובה יותר.',
        'בשנים האחרונות אימנתי מאות מתאמנות ממגוון מגזרים, גילאים, לפני, במהלך ולאחר הריון ולידה כשהמאחד ביניהן הוא, ההבנה שאימון איכותי יכול לחולל שינוי בריאותי, פיזי ונפשי.',
        'בסטודיו שלנו הקמנו אימוני כוח + אירובי בקבוצות בוטיק [כן, עד 6 נשים. לא יותר] לנשים בלבד. הקבוצות מותאמות במיוחד לנשים ממגוון הגילאים והמגזרים [גם למגזר החרדי].'
      ]
    }
  ];

  return (
    <Element name="aboutus">
      <section className="relative flex h-screen snap-center items-center justify-center">
        <div ref={ref} className="w-full">
          <img
            alt="Background"
            className="absolute inset-0 h-full w-full object-cover opacity-5"
            src={israelAndTalya}
          />
          <motion.div
            className="mx-auto w-5/6 py-5 md:h-5/6 md:pb-0"
            onViewportEnter={() => setSelectedPage(SelectedPage.AboutUs)}
          >
            <div className="z-10 mt-20 md:mt-32">
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
                <h1 className="text-secondary-text mb-3 text-2xl font-bold md:mb-6 md:text-3xl">
                  מי אנחנו?
                </h1>
                <div className="text-secondary-text mx-auto md:flex md:p-6">
                  {trainers.map((trainer, index) => (
                    <div key={index} className="mb-4 md:m-8">
                      <h2 className="text-primary-text mb-2 text-[1.5rem] font-semibold xl:text-[2rem]">
                        {trainer.name}
                      </h2>
                      {trainer.description.map((paragraph, pIndex) => (
                        <p key={pIndex} className="mb-1 text-[1rem] md:mb-4 xl:text-[1rem]">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default AboutUs;
