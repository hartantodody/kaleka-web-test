import { useState, useEffect } from "react";
import { NavLink } from "..";
import kalekaLogo from "../../assets/kaleka-logo.png";
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
      <nav className='px-[23px] py-[18px] w-[100%] h-[103px] bg-black flex items-center'>
        <img className='h-[67px] w-[192px]' src={kalekaLogo} alt='kaleka logo' />
        <div className='w-full lg:w-calc(100vw-192px) flex justify-end lg:justify-center items-center'>
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
              <NavLink route='/'>TENTANG KAMI</NavLink>
            </li>
          </ul>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className='h-[100vh] w-[100vw] bg-black flex flex-col justify-start items-center gap-4'>
          <li>
            <NavLink route='/' onClick={toggleMobileMenu}>
              BERANDA
            </NavLink>
          </li>
          <li>
            <NavLink route='/' onClick={toggleMobileMenu}>
              TENTANG KAMI
            </NavLink>
          </li>
        </ul>
      )}
    </>
  );
};

export default Navbar;
