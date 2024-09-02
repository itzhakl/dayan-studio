import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
  HeartIcon,
  FireIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/solid';
import { BenefitType } from '@/shared/types';

export const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: 'ציוד חדשני ומתקדם',
    description:
      'חווית אימון ברמה עולמית עם הציוד המתקדם ביותר. מכשירים חכמים המותאמים אישית לכל מתאמן.',
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: 'מגוון עשיר של שיעורים',
    description:
      'מעל 200 שיעורים שבועיים לכל רמה וסגנון. מיוגה ועד אימוני HIIT, תמיד תמצאו משהו שמתאים לכם.',
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: 'צוות מקצועי ומוסמך',
    description:
      'מאמנים מובילים בתחומם עם הסמכות בינלאומיות. ליווי אישי להשגת היעדים שלכם בצורה בטוחה ויעילה.',
  },
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: 'שיפור בריאות הלב',
    description:
      'תוכניות אימון מותאמות לשיפור בריאות הלב וכלי הדם. נעזור לכם להפחית סיכונים ולהגביר את החיוניות.',
  },
  {
    icon: <FireIcon className="h-6 w-6" />,
    title: 'ניהול משקל מתקדם',
    description:
      'שילוב של אימונים ותזונה מותאמת אישית. תוכנית הוליסטית לשריפת שומן ובניית שריר לתוצאות ארוכות טווח.',
  },
  {
    icon: <ShieldCheckIcon className="h-6 w-6" />,
    title: 'העצמה אישית',
    description:
      'שיעורי הגנה עצמית וחיזוק מנטלי. פיתוח ביטחון עצמי, כוח פיזי ומיומנויות חיוניות להתמודדות עם אתגרי היומיום.',
  },
];
