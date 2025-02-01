import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMagnifyingGlassChart, faPenNib, faGears } from "@fortawesome/free-solid-svg-icons";
import { Parallax } from "react-scroll-parallax";
import { NavLink } from "react-router";

interface Props {}

function Header(props: Props) {
  const {} = props;

  return (
    <>
      <div className="relative h-auto overflow-hidden">
        <Parallax speed={-20} className="absolute w-full h-full scale-110">
          <div className="w-full h-full bg-[url(/headerbg.jpg)] bg-cover bg-center top-0 left-0 scale-140"></div>
        </Parallax>
        
        <div className="bg-so-darkblue-8 relative flex flex-col gap-5 lg:flex-row items-center justify-center lg:justify-start mb-6 pl-10 pr-10 pt-6 pb-6">
            <NavLink to="/"><img className="" style={{height:90}} srcSet="/logo.png" alt="Internet Application Logo" /></NavLink>
            <div className="lg:ml-auto lg:text-3xl">
              <NavLink to="/" className="link-btn" >Charles Drake</NavLink> - <a href="tel:4169519592" className="text-amber-300 cursor-pointer hover:text-white transition-all duration-200 ease-in"><FontAwesomeIcon className="text-l" icon={faPhone} /> 416.951.9592</a></div>
            <div className="sub-menu lg:ml-auto flex gap-3">
                <NavLink to="/" className="rounded-md hover:bg-so-lightblue cursor-pointer transition-all ease-in bg-amber-300 p-4 pl-6 pr-6 text-so-darkblue hover:text-white">Contact</NavLink>
                <NavLink to="/work" className="rounded-md hover:bg-so-lightblue cursor-pointer transition-all ease-in bg-amber-300 p-4 pl-6 pr-6 text-so-darkblue hover:text-white">Work</NavLink>

            </div>
        </div>
        <ul className="flex flex-col place-self-center font-bold md:flex-row md:gap-10 sm:gap-1 justify-center pl-20 pr-20 pb-10">
          <li className="clip-hexagon">
            <NavLink to="/analysis" className="block">
              <div className="text-center p-10 pl-14 pr-14">
                <FontAwesomeIcon className="text-5xl pb-3 border-b-2 mt-2" icon={faMagnifyingGlassChart} />
                {/* <img srcSet="/icon.png" alt="" /> */}
                <p>Analysis</p>
              </div>
            </NavLink>
          </li>
          <li className="clip-hexagon">
            <NavLink to="/design" className="block">
              <div className="text-center p-10 pl-15 pr-15">
                <FontAwesomeIcon className="text-5xl pb-3 border-b-2 mt-2" icon={faPenNib} />
                {/* <img srcSet="/icon.png" alt="" /> */}
                <p>Design</p>
              </div>
            </NavLink>
          </li>
          <li className="clip-hexagon">
          <NavLink to="/development" className="block">
              <div className="text-center p-10">
                <FontAwesomeIcon className="text-5xl pb-3 border-b-2 mt-2" icon={faGears} />
                {/* <img srcSet="/icon.png" alt="" /> */}
                <p>Development</p>
              </div>
            </NavLink>
          </li>
        </ul>
        

      </div>
    </>
  );
}

export default Header;
