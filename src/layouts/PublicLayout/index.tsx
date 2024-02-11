import { Navbar } from "../../components";
import headerImage from "../../assets/header-farmer.webp";
import { PublicLayoutProps } from "../../interfaces/interfaces";

const PublicLayout = ({ children, headerText }: PublicLayoutProps) => {
  return (
    <>
      <header className='relative'>
        <Navbar />
        <div className='relative flex justify-center items-center pt-[103px]'>
          <img src={headerImage} className='w-full object-cover h-[211px] ' alt='farmer image' />
          <h1 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[-50%] text-white text-[24px] lgtext-[32px] font-bold z-5 text-center'>
            {headerText}
          </h1>
        </div>
      </header>
      <main className='flex flex-col justify-center items-center p-[15px] md:p-[68px]'>{children}</main>
    </>
  );
};

export default PublicLayout;
