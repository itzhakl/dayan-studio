export enum SelectedPage {
    Home = 'home',
    AboutUs = 'aboutus',
    Benefits = 'benefits',
    OurClasses = 'ourclasses',
    ContactUs = 'contactus'
}

export enum HebrewDisplayName {
  home = 'בית',
  aboutus = 'מי אנחנו',
  benefits = 'יתרונות',
  ourclasses = 'השיעורים שלנו',
  contactus = 'צור קשר',
  SignIn = 'הכנס',
  BecomeAMember = 'הפוך לחבר',
}

export interface BenefitType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface DatasType {
    name: string;
    description?: string;
    image: string;
}
