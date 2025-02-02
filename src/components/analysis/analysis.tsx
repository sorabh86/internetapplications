import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPeopleGroup,
  faMobileAlt,
  faMagnifyingGlassPlus,
  faComments,
} from "@fortawesome/free-solid-svg-icons";
import { Parallax } from "react-scroll-parallax";

interface Props {}

function Analysis(props: Props) {
  const {} = props;

  return (
    <>
      <div className="relative overflow-hidden">
        <Parallax speed={-40} className="absolute w-full h-full scale-110">
          <div className="w-full h-full bg-[url(headerbg.jpg)] bg-cover bg-center scale-130"></div>
        </Parallax>
        <div className="relative bg-so-blue-8">
          <h3 className="font-bold text-3xl lg:text-so-lg text-white text-center mb-10 bg-linear-to-b from-[#07115B] pt-4 pb-2 pl-6 pr-6 rounded-b-2xl to-[#020A31] place-self-center">
            Analysis
          </h3>
          <ul className="grid lg:grid-cols-4 gap-4 mb-10 md:p-2 lg:p-10 pt-0 ">
            <li className="p-6 bg-so-white-8 border-1 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Network</h2>
              <p className="mt-2 text-gray-700">
                A network of professionals working together to build successful
                solutions.
              </p>
              <p className="place-self-center mt-2 rounded-full bg-so-lightblue text-white pt-4 pb-4 pl-3 pr-3">
                <FontAwesomeIcon className="text-5xl" icon={faPeopleGroup} />
              </p>
              <button className="mt-4 px-4 py-2 bg-so-darkblue text-white font-semibold rounded-lg hover:bg-so-lightblue cursor-pointer transition ease-in duration-200">
                Read More ...
              </button>
            </li>
            <li className="p-6 bg-so-white-8 border-1 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Responsive
              </h2>
              <p className="mt-2 text-gray-700">
                Responsive applications for access from anywhere on any device.
              </p>
              <p className="place-self-center mt-2 rounded-full bg-so-lightblue text-white pt-4 pb-4 pl-6 pr-6">
                <FontAwesomeIcon className="text-5xl" icon={faMobileAlt} />
              </p>
              <button className="mt-4 px-4 py-2 bg-so-darkblue text-white font-semibold rounded-lg hover:bg-so-lightblue cursor-pointer transition ease-in duration-200">
                Read More ...
              </button>
            </li>
            <li className="p-6 bg-so-white-8 border-1 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Detailed
              </h2>
              <p className="mt-2 text-gray-700">
                Attention to detail and keen insight are keys to successful
                applications.
              </p>
              <p className="place-self-center mt-2 rounded-full bg-so-lightblue text-white pt-4 pb-4 pl-5 pr-5">
                <FontAwesomeIcon
                  className="text-5xl"
                  icon={faMagnifyingGlassPlus}
                />
              </p>
              <button className="mt-4 px-4 py-2 bg-so-darkblue text-white font-semibold rounded-lg hover:bg-so-lightblue cursor-pointer transition ease-in duration-200">
                Read More ...
              </button>
            </li>
            <li className="p-6 bg-so-white-8 border-1 rounded-lg shadow-md text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Communication
              </h2>
              <p className="mt-2 text-gray-700">
                Consistent and clear communication leads to projects that work.
              </p>
              <p className="place-self-center mt-2 rounded-full bg-so-lightblue text-white pt-4 pb-4 pl-3 pr-3">
                <FontAwesomeIcon className="text-5xl" icon={faComments} />
              </p>
              <button className="mt-4 px-4 py-2 bg-so-darkblue text-white font-semibold rounded-lg hover:bg-so-lightblue cursor-pointer transition ease-in duration-200">
                Read More ...
              </button>
            </li>
          </ul>
          <div className="p-6 border-1-4 border-blue-500 bg-so-white-8">
            <blockquote className="text-lg italic text-gray-700">
              “Charles is a talented, passionate, and hard working individual
              who helped me solve many of our online challenges in innovative
              ways. He demonstrated the ability to meet deadlines on all the
              projects we worked together on, and in one case was the recipient
              of a department excellence award for services rendered. I fully
              recommend Charles”
            </blockquote>
            <footer className="mt-4 text-gray-900 font-semibold">
              — David L - Marketing Communications Manager - Microsoft Canada
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Analysis;
