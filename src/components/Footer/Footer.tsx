import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Element } from 'react-scroll';
import { useParallax } from '@/hooks/hooks';
import { SelectedPage } from '@/shared/types';
import Logo from '@/assets/images/Logo.png';
import WazeIcon from '@/assets/svg/waze.svg';
import TikTokIcon from '@/assets/svg/tiktok.svg';
import Copyright from './Copyright';
import {
  WhatsApp as WhatsAppIcon,
  Phone as PhoneIcon,
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  YouTube as YouTubeIcon,
  RoomOutlined as RoomOutlinedIcon,
  Mail as MailIcon,
} from '@mui/icons-material';

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Footer: React.FC<Props> = ({ setSelectedPage }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  const contactInfo = [
    { text: '053-523-0563', icon: PhoneIcon, href: 'tel:+972535230563', title: 'make a call' },
    { text: 'WhatsApp', icon: WhatsAppIcon, href: 'https://wa.me/message/OYX7HMT5ZXVGA1', title: 'whatsApp' },
    { text: 'הרב דנגור 22, בני ברק', icon: RoomOutlinedIcon, href: 'https://maps.app.goo.gl/mXrVZZww2EHSCzmJ8', title: 'google-maps' },
    { text: 'Waze', icon: WazeIcon, href: 'https://ul.waze.com/ul?place=ChIJeSGzyhxLHRURTWWC5iP_iZM&ll=32.09687890%2C34.83111380&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location', title: 'waze' },
    { text: 'hid0504154438@gmail.com', icon: MailIcon, href: 'mailto:hid0504154438@gmail.com', title: 'mail' },
  ];

  const socialLinks = [
    { icon: InstagramIcon, href: 'https://www.instagram.com/dayn_israel?r=nametag', title: 'Instagram' },
    { icon: TikTokIcon, href: 'https://www.tiktok.com/@daynisraelcoach', title: 'TikTok' },
    { icon: FacebookIcon, href: 'https://www.facebook.com/profile.php?id=100006389503448', title: 'Facebook' },
    { icon: YouTubeIcon, href: 'https://www.youtube.com/channel/UCnQ-OQZNPQ6SE47c-76v-pg', title: 'YouTube' },
  ];

  return (
    <Element name="footer">
      <footer className="bg-primary relative flex min-h-screen snap-center items-center justify-center py-16">
        <div ref={ref} className="container mx-auto px-4">
          <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Footer)}
            className="grid gap-8 md:grid-cols-2"
          >
            <div className="rounded-xl border-2 border-secondary-text p-8 shadow-lg">
              <h4 className="mb-6 text-2xl font-bold">פרטים</h4>
              <ul className="space-y-4 text-secondary-text">
                {contactInfo.map((item, index) => (
                  <li key={index} className="flex items-center">
                    <a
                      href={item.href}
                      title={item.title}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center hover:text-accent transition-colors"
                    >
                      {typeof item.icon === 'string' ? (
                        <img src={item.icon} alt={item.title} className="h-6 w-6 ml-2" />
                      ) : (
                        <item.icon className="ml-2" />
                      )}
                      <span>{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl border-2 border-secondary-text p-8 shadow-lg">
              <h4 className="mb-6 text-2xl font-bold">עקבו אחרינו</h4>
              <div className="flex space-x-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    title={link.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-secondary-text hover:text-accent transition-colors"
                  >
                    {typeof link.icon === 'string' ? (
                      <img src={link.icon} alt={link.title} className="h-8 w-8" />
                    ) : (
                      <link.icon fontSize="large" />
                    )}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="mt-12 flex justify-center">
            <img className="h-16 w-16" src={Logo} alt="footer-logo" />
          </div>

          <Copyright />
        </div>
      </footer>
    </Element>
  );
};

export default Footer;
