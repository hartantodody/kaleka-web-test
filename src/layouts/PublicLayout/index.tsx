import { Navbar } from "../../components";
import headerImage from "../../assets/header-farmer.webp";
import { PublicLayoutProps } from "../../interfaces/interface";

const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <>
      <header>
        <Navbar />
        <div className='flex justify-center items-center h-[211px]'>
          <img src={headerImage} className='h-full w-full object-cover' alt='farmer image' />
        </div>
      </header>
      <main>{children}</main>
    </>
  );
};

export default PublicLayout;
