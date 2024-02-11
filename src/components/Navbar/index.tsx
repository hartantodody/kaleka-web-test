import { useState, useEffect } from "react";
import { NavLink } from "..";
import { motion } from "framer-motion";
import kalekaLogo from "../../assets/kaleka-logo.svg";
import hamburgerButton from "../../assets/hamburger-button.svg";
import closeButton from "../../assets/close-icon.svg";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav className='py-[18px] w-[100%] h-[103px] bg-black flex items-center z-[99] fixed'>
        <img className='pl-[23px] h-[67px] w-[192px]' src={kalekaLogo} alt='kaleka logo' />
        <div className='absolute w-full lg:w-[100vw] flex justify-end lg:justify-center items-center'>
          {/* Hamburger Button */}
          {!isMobileMenuOpen && (
            <img
              className='h-[24px] w-[24px] lg:hidden hover:cursor-pointer'
              src={hamburgerButton}
              alt='hamburger button'
              onClick={toggleMobileMenu}
            />
          )}

          {/* Close Button */}
          {isMobileMenuOpen && (
            <img
              className='h-[24px] w-[24px] lg:hidden hover:cursor-pointer'
              src={closeButton}
              alt='close button'
              onClick={toggleMobileMenu}
            />
          )}

          {/* Desktop Menu */}
          <ul className='hidden lg:flex lg:flex-row items-center gap-[44px]'>
            <li>
              <NavLink route='/'>BERANDA</NavLink>
            </li>
            <li>
              <NavLink route='/about-us'>TENTANG KAMI</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* Mobile Menu */}
      <motion.ul
        className='z-[90] h-[100vh] w-[100vw] pt-[105px] bg-black flex flex-col justify-start items-center gap-4 fixed'
        initial={{ y: -2000 }}
        animate={{ y: isMobileMenuOpen ? 0 : -2000 }}
        transition={{ duration: 0.3 }}
      >
        <li>
          <NavLink route='/' onClick={toggleMobileMenu}>
            BERANDA
          </NavLink>
        </li>
        <li>
          <NavLink route='/about-us' onClick={toggleMobileMenu}>
            TENTANG KAMI
          </NavLink>
        </li>
      </motion.ul>
    </>
  );
};

export default Navbar;
