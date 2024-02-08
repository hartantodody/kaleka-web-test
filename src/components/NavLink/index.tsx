import { Link } from "react-router-dom";
import { NavLinkProps } from "../../interfaces/interface";

const NavLink: React.FC<NavLinkProps> = ({ children, route }) => {
  return (
    <>
      <Link className='text-[16px] lg:text-[20.52px] text-main font-bold' to={route}>
        {children}
      </Link>
    </>
  );
};

export default NavLink;
