import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Element } from 'react-scroll';
import useMediaQuery from '@/hooks/useMediaQuery';
import { useParallax } from '@/hooks/hooks';
import { SelectedPage } from '@/shared/types';
import HText from '@/shared/HText';
import ContactUsPageGraphic from '@/assets/images/ContactUsPageGraphic.png';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs: React.FC<Props> = ({ setSelectedPage }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);
  const isAboveMediumScreens = useMediaQuery('(min-width:1060px)');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
    // Here you would typically send the form data to your server
  };

  const inputStyle = 'w-full mb-5 rounded-lg bg-primary-300 px-5 py-3 placeholder-white';

  return (
    <Element name="contactus">
      <section className="relative flex h-screen snap-center items-center justify-center">
        <div ref={ref} className="mx-auto w-5/6 pb-32 pt-24">
          <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
            <motion.div
              className="pt-10 md:w-3/5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <HText>
                <span className="text-primary-500">צור קשר</span> - נשמח לעזור לך
              </HText>
              {isAboveMediumScreens && (
                <p className="text-secondary-text my-5">
                  אנחנו כאן בשבילך! בין אם יש לך שאלות על השירותים שלנו, רעיונות לשיתופי פעולה, או סתם רוצה לומר שלום - נשמח לשמוע ממך. השאר את פרטי הקשר שלך ונחזור אליך בהקדם האפשרי. המטרה שלנו היא לספק לך את המידע והתמיכה הטובים ביותר כדי לענות על כל הצרכים שלך.
                </p>
              )}
            </motion.div>

            <div className="mt-10 justify-between gap-16 rounded-3xl pb-4 md:flex">
              <motion.div
                className="mt-10 basis-3/5 rounded-3xl bg-dark-blue p-4 drop-shadow-2xl md:mt-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
              >
                <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
                  <input
                    type="text"
                    className={inputStyle}
                    placeholder="שם"
                    {...register('name', { required: 'שדה זה הוא חובה', maxLength: { value: 100, message: 'מגבלת התווים היא 100' } })}
                  />
                  {errors.name && <p className="mt-1 text-red-500">{errors.name.message as string}</p>}

                  <input
                    dir="rtl"
                    type="tel"
                    className={inputStyle}
                    placeholder="מספר טלפון"
                    {...register('phone', {
                      required: 'שדה זה הוא חובה',
                      pattern: { value: /^0(?:[57]\d|2\d)-?\d{7}$/i, message: 'מספר טלפון לא תקין' },
                    })}
                  />
                  {errors.phone && <p className="mt-1 text-red-500">{errors.phone.message as string}</p>}

                  <input
                    type="email"
                    className={inputStyle}
                    placeholder="מייל"
                    {...register('email', {
                      required: 'שדה זה הוא חובה',
                      pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'כתובת אימייל לא תקינה' },
                    })}
                  />
                  {errors.email && <p className="mt-1 text-red-500">{errors.email.message as string}</p>}

                  <textarea
                    rows={4}
                    cols={50}
                    className={inputStyle}
                    placeholder="הודעה"
                    {...register('message', { required: 'שדה זה הוא חובה', maxLength: { value: 1000, message: 'מגבלת התווים היא 1000' } })}
                  />
                  {errors.message && <p className="mt-1 text-red-500">{errors.message.message as string}</p>}

                  <button
                    type="submit"
                    className="mt-5 rounded-lg bg-accent px-20 py-3 text-secondary-text transition hover:text-white"
                  >
                    שלח
                  </button>
                </form>
              </motion.div>

              {isAboveMediumScreens && (
                <motion.div
                  className="relative mt-16 basis-2/5 md:mt-0"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    visible: { opacity: 1, y: 0 },
                  }}
                >
                  <div className="w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
                    <img src={ContactUsPageGraphic} alt="contactus-graphics" />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </Element>
  );
};

export default ContactUs;
