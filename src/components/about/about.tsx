import { faHandshake, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Parallax } from "react-scroll-parallax";

interface Props {}

function About(props: Props) {
  const {} = props;

  return (
    <>
      <div className="content">
        <Parallax speed={-40} className="absolute w-full h-full scale-110">
          <div className="w-full h-full bg-[url(headerbg.jpg)] bg-cover bg-center top-0 left-0 scale-140"></div>
        </Parallax>

        <div className="content-inner place-self-center gap-10 p-10">
          <div className="rounded rounded-2xl overflow-hidden drop-shadow-[5px_5px_5px_rgba(0,0,0,0.8)]">
            <img src="./Charles-Drake.png" alt="Software Developer" />
          </div>
          <div>
            <h1 className="text-3xl mb-4 font-bold text-amber-300">
              Internet Applications
            </h1>
            <h2 className="mb-4">Expert Internet Software Development</h2>

            <p className="mb-4">
              <strong className="text-amber-300">Internet Applications</strong>{" "}
              is a premier internet application software development company,
              founded and led by{" "}
              <strong className="text-amber-300">Charles Drake</strong>.
            </p>

            <p className="mb-4">
              With over{" "}
              <strong className="text-amber-300">12 years of experience</strong>{" "}
              in developing robust internet software solutions, Charles
              specializes in delivering high-quality applications for{" "}
              <strong className="text-amber-300">
                enterprise corporations
              </strong>
              , as well as{" "}
              <strong className="text-amber-300">
                small and medium-sized businesses
              </strong>
              .
            </p>

            <h2 className="mb-4">Our Expertise</h2>
            <p className="mb-4">We have extensive experience in:</p>
            <ul className="list-disc mb-4 pl-6">
              <li>
                <strong className="text-amber-300">
                  CRM, ERP & Billing Applications
                </strong>{" "}
                for enterprise clients
              </li>
              <li>
                <strong className="text-amber-300">
                  E-commerce & Brochure Websites
                </strong>{" "}
                for small and mid-sized businesses
              </li>
              <li>
                Successfully completed{" "}
                <strong className="text-amber-300">120+ projects</strong> for{" "}
                <strong className="text-amber-300">40+ clients</strong> in the
                Greater Toronto Area
              </li>
            </ul>

            <p className="">
              <FontAwesomeIcon className="text-amber-300" icon={faPhone} />{" "}
              <strong className="italic">Call Now</strong> to discuss how we can
              help your business grow.
            </p>
          </div>
          </div>
          <div className="relative flex bg-so-darkblue-6 justify-center">
            <a
              href="tel:4169519592"
              className="flex flex-col justify-center gap-4text-yellow pb-10 link-btn"
              >
              <span className="text-center text-5xl cursor-pointer ">
                416-951-9592
              </span>
              <FontAwesomeIcon
                className="text-amber-300 text-7xl hover:text-white transition-all duration-200 ease-in"
                icon={faHandshake}
                />
            </a>
          </div>
          <div className="relative p-6 border-1-4 border-blue-500 bg-so-white-8">
            <blockquote className="text-lg italic text-gray-700">
              “Whether it’s a brochure site, a blog, an online store, or a fully
              functional line-of-business application, there is a web solution
              that can fulfill your requirements and I can develop it for you. I
              also work with a great team of marketing and design experts that
              complement my development skill set. I believe in high standards,
              attention to detail, providing options, and working within a
              client’s budget to provide cost-effective solutions. Please call me
              to discuss how I can help you achieve your goals with a web presence
              that advances your business potential.”
            </blockquote>
            <footer className="mt-4 text-gray-900 font-semibold">
              — Charles Drake, Owner, Internet Applications
            </footer>
          </div>
      </div>
    </>
  );
}

export default About;
