import { useState } from "react";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Logo from '@/assets/Logo.png';
import Link from "./Link";
import { HebrewDisplayName, SelectedPage } from '@/shared/types';
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";

type Props = {
    isTopOfPage: boolean;
    selectedPage: SelectedPage;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({isTopOfPage, selectedPage, setSelectedPage}: Props) => {
  const flexBetween = 'flex items-center justify-between';
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";

  const Links = (
      <>
          <Link page={'Home'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <Link page={'Benefits'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <Link page={'Our Classes'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
          <Link page={'Contact Us'} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      </>
  )

  return (
    <nav>
        <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
            <div className={`${flexBetween} mx-auto w-5/6`}>
                <div className={`${flexBetween} w-full gap-16`}>
                    {/* Right Side */}
                    { isAboveMediumScreens ? (
                      <div className={`${flexBetween} w-full`}>
                        {/* Links */}
                        <div className={`${flexBetween} gap-8 text-sm`}>
                            {Links}
                        </div>
                        {/* Sign In + Button */}
                        <div className={`${flexBetween} gap-8`}>
                            {/* <p>{HebrewDisplayName['SignIn']}</p> */}
                            <ActionButton setSelectedPage={setSelectedPage}>{HebrewDisplayName['BecomeAMember']}</ActionButton>
                        </div>
                      </div> ) : (
                        <button title="MenuToggle" className='rounded-full bg-secondary-500 p-2' onClick={() => setIsMenuToggled(!isMenuToggled)}>
                            <Bars3Icon className="h-6 w-6 text-white"/>
                        </button>  
                    )}
                    {/*Left Side  */}
                    <img src={Logo} alt="logo" />
                </div>
            </div>
        </div>
        {/* Mobile Menu */}
        {
        !isAboveMediumScreens && isMenuToggled && (
            <div className='fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl'>
                {/* Close Button */}
                <div className="flex justify-start p-10">
                    <button title="close" onClick={() => setIsMenuToggled(!isMenuToggled)}>
                        <XMarkIcon className="h-6 w-6 text-gray-400"/>
                    </button>
                </div>

                {/* Menu Items */}
                <div className="flex flex-col text-right mr-[25%] gap-8 text-2xl">
                    {Links}
                </div>
            </div> )
        }
    </nav>
  );
}

export default Navbar;