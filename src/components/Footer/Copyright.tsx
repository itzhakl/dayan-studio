import React, { useState } from 'react';
import { Copyright as CopyrightIcon, Close as CloseIcon, Phone as PhoneIcon, Email as EmailIcon, GitHub as GitHubIcon, LinkedIn as LinkedInIcon, WhatsApp as WhatsAppIcon, Link as LinkIcon } from '@mui/icons-material';

const Copyright = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => setIsOpen(prev => !prev);

  return (
    <div className="relative">
      <button
        onClick={toggleModal}
        className="absolute bottom-4 right-4 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
        aria-label="פתח מידע על המפתח"
      >
        <CopyrightIcon />
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full mx-4 relative">
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="סגור"
            >
              <CloseIcon />
            </button>
            
            <h2 className="text-2xl font-bold mb-4 text-center text-blue-600 dark:text-blue-400">יצחק לשינסקי</h2>
            
            <p className="mb-6 text-center text-gray-600 dark:text-gray-300">מפתח Full Stack | מומחה DevOps | יוצר אוטומציות</p>
            
            <div className="space-y-4 mb-6 text-gray-700 dark:text-gray-200">
              <p>
                מפתח בצה"ל. מתמחה בפיתוח מערכות מורכבות, DevOps, ואוטומציות. 
                בעל יכולת גבוהה בבניית אתרים, שרתים ובוטים, תוך שימוש בטכנולוגיות מתקדמות.
                תמיד מחפש אתגרים חדשים ופתרונות יצירתיים בעולם הטכנולוגי המתפתח.
              </p>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="flex w-full space-x-3">
                <a href="https://wa.me/972535561849" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors duration-300">
                  <WhatsAppIcon className="mr-2" />
                  וואטסאפ
                </a>
              </div>
              <div className="flex w-full space-x-3">
                <a href="https://www.linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300">
                  <LinkedInIcon className="mr-2" />
                  LinkedIn
                </a>
              </div>
              <a href="https://linktr.ee/itzhakl" target="_blank" rel="noopener noreferrer" className="w-full flex items-center justify-center bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-600 transition-colors duration-300">
                <LinkIcon className="mr-2" />
                Linktree
              </a>
            </div>
            
            <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} יצחק לשינסקי. כל הזכויות שמורות.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Copyright;