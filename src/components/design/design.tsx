import React from "react";
import { Parallax } from "react-scroll-parallax";
import LazyImage from "../loading/lazyimage";

interface Props {}

function Design(props: Props) {
  const {} = props;
  const designs = [
    {
      name: "BWyze - Creative Direction, Project Mgmt NLB Mediaimage",
      image: "/internetapplications/work/bwyze.png",
    },
    {
      name: "CPD File - Creative Direction NLB Media",
      image: "/internetapplications/work/cpdfile.png",
    },
    {
      name: "Tutor Doctor",
      image: "/internetapplications/work/tutordoctor.png",
    },
    {
      name: "Blush Pretty - Creative Direction, Project Mgmt NLB Media",
      image: "/internetapplications/work/blushpretty.png",
    },
    {
      name: "Cedar Wood Structures",
      image: "/internetapplications/work/cedarwood_600x450.png",
    },
    {
      name: "Fresh Beautiful - Creative Direction, Project Mgmt NLB Media",
      image: "/internetapplications/work/freshbeautiful.png",
    },
    {
      name: "Integrity Leads",
      image: "/internetapplications/work/integrity.png",
    },
    {
      name: "Condo Garage",
      image: "/internetapplications/work/condo-garage2_600x450.jpg",
    },
    {
      name: "Adour St Regis",
      image: "/internetapplications/work/adour-stregis3_600x450.jpg",
    },
    {
      name: "The Right Mountain",
      image: "/internetapplications/work/the-right-mountain2_600x450.jpg",
    },
    {
      name: "Microsoft Dynamics",
      image: "/internetapplications/work/MS_dynamicsjobsportal_600x450.jpg",
    },
    {
      name: "Microsoft Expression",
      image: "/internetapplications/work/MS_expression_600x450.jpg",
    },
    {
      name: "Nanodots",
      image: "/internetapplications/work/nanodots.png",
    },
    {
      name: "Microsoft Promotion",
      image: "/internetapplications/work/MS_plantowin_600x450.jpg",
    },
    {
      name: "Real Estate Network",
      image: "/internetapplications/work/realestate-network_600x450.jpg",
    },
    {
      name: "Flirt - Creative Direction, Project Mgmt NLB Media",
      image: "/internetapplications/work/flirt.png",
    },
    {
      name: "Qualicare Franchise",
      image: "/internetapplications/work/qualicare-franchise.png",
    },
    {
      name: "Plastair",
      image: "/internetapplications/work/plastair.png",
    },
    {
      name: "Heartsafe",
      image: "/internetapplications/work/heartsafe-shop.png",
    },
    {
      name: "BP Boutique - Creative Direction, Project Mgmt NLB Media",
      image: "/internetapplications/work/bp_boutique.png",
    },
    {
      name: "Tutor Doctor Panama",
      image: "/internetapplications/work/tutordoctor-panama.png",
    },
    {
      name: "Birkhoff Research",
      image: "/internetapplications/work/birkhoff.png",
    },
    {
      name: "Microsoft Store",
      image: "/internetapplications/work/MS_SBhp_600x450.jpg",
    },
    {
      name: "Qualicare Health Caree",
      image: "/internetapplications/work/qualicare.png",
    },
  ];

  return (
    <>
      <div className="content text-so-sm text-black">
        <Parallax speed={-100} className="absolute w-full h-full scale-120 opacity-70">
          <div className="w-full h-full bg-[url(headerbg.jpg)] bg-cover bg-center scale-130"></div>
        </Parallax>
        <div className="content-inner-c">
          <h3 className="content-header"> Design </h3>
          <ul className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-10 pt-10 pb- 10 md:pl-20 md:pr-20 lg:pl-40 lg:pr-40 pt-0 ">
            {designs.map((design, index) => (
              <li
                key={index}
                className="border p-6 bg-so-white-8 bg-opacity-7 rounded-md opacity-90 flex flex-col justify-around"
              >
                <h4 className="text-center font-bold text-xl pb-2">
                  {design.name}
                </h4>
                <LazyImage src={design.image} alt={design.name} />
              </li>
            ))}
          </ul>
          <div className="p-6 border-1-4 border-blue-500 bg-gray-100">
            <blockquote className="text-lg italic text-gray-700">
              “As an online marketing specialist with a business background, I
              count on Charles to help me with the technical expertise I need.
              Unlike many developers, he suggests options that will work,
              instead of simply saying what doesn't. I also appreciate his
              plain-English explanations of complex development projects since
              it helps with problem solving. I would recommend Charles as a
              reliable and helpful partner.”
            </blockquote>
            <footer className="mt-4 text-gray-900 font-semibold">
              — Stefania S - Convert Marketing
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default Design;
