
interface Props {}

function Design(props: Props) {
  const {} = props;

  return (
    <>
      <div className="text-so-sm text-black bg-[url(/human-ai.jpg)] bg-center">
        <h3 className="font-bold text-2xl lg:text-so-lg text-white text-center mb-10 bg-linear-to-b from-[#07115B] pt-2 pb-2 pl-6 pr-6 rounded-b-2xl to-[#020A31] place-self-center">
          Design
        </h3>
        <ul className="grid lg:grid-cols-3 gap-4 mb-10 md:p-2 lg:p-10 pt-0 ">
          <li className="border p-6 bg-amber-50 bg-opacity-7 rounded-md opacity-90 flex flex-col justify-around">
            <h4 className="text-center font-bold text-xl pb-2">
              Application Development
            </h4>
            <p className="pb-2">
              Extensive experience in developing online applications of all
              sizes, from small businesses to large enterprises. Key
              accomplishments include:
            </p>
            <ul className="list-disc pl-6 grid gap-2">
              <li>
                Developing business-critical applications for enterprises, small
                and mid-sized businesses
              </li>
              <li>
                End-to-end development experience across the entire lifecycle
                from prospecting and sales to fulfillment, invoicing, and
                billing
              </li>
            </ul>
          </li>
          <li className="border p-6 bg-amber-50 bg-opacity-7 rounded-md opacity-90 flex flex-col justify-around">
            <h4 className="text-center font-bold text-xl pb-2">
              MVC Application Design
            </h4>
            <p className="pb-2">
              Designed and architected a highly scalable CRM, ERP, and Billing
              system for an international user base of 20,000. Key contributions
              include:
            </p>
            <ul className="list-disc pl-6 grid gap-2">
              <li>Expertise in MVC data and application modeling</li>
              <li>
                System architecture design using LAMP stack, Zend Framework, and
                AWS EC2
              </li>
            </ul>
          </li>
          <li className="border p-6 bg-amber-50 bg-opacity-7 rounded-md opacity-90 flex flex-col justify-around">
            <h4 className="text-center font-bold text-xl pb-2">
              Cloud Linux System Administration
            </h4>
            <p className="pb-2">
              Successfully managed a large-scale, load-balanced LAMP application
              platform. Responsibilities included:
            </p>
            <ul className="list-disc pl-6 grid gap-2">
              <li>
                Leveraging Amazon Web Services (AWS EC2, RDS, S3, and AWS SDK
                APIs) for scalable infrastructure
              </li>
              <li>
                Linux shell scripting, cron jobs, installation and configuration
                of extensions and security software, web server configuration
                (Apache, PHP), as well as backup and recovery operations
              </li>
            </ul>
          </li>
          <li className="border p-6 bg-amber-50 bg-opacity-7 rounded-md opacity-90 flex flex-col justify-around">
            <h4 className="text-center font-bold text-xl pb-2">
              Relational Database Development
            </h4>
            <p className="pb-2">
              Deep expertise in relational database design and management. Key
              skills include:
            </p>
            <ul className="list-disc pl-6 grid gap-2">
              <li>
                Database design and administration for high-performance
                applications
              </li>
              <li>Crafting complex SQL queries involving 10+ table joins</li>
              <li>
                Developing dynamic SQL queries and leveraging prepared
                statements for secure and efficient data retrieval
              </li>
              <li>
                Data warehousing, reporting, and analytics for business insights
              </li>
            </ul>
          </li>
          <li className="border p-6 bg-amber-50 bg-opacity-7 rounded-md opacity-90 flex flex-col justify-around">
            <h4 className="text-center font-bold text-xl pb-2">
              Business Analysis
            </h4>
            <p className="pb-2">
              Strong background in analyzing complex business models and
              supporting organizational growth. Key analysis experience
              includes:
            </p>
            <ul className="list-disc pl-6 grid gap-2">
              <li>Revenue recognition and billing for open services</li>
              <li>
                In-depth analysis of expanding businesses and evolving business
                models
              </li>
              <li>Multi-tiered analysis of franchisor/franchisee models</li>
            </ul>
          </li>
          <li className="border p-6 bg-amber-50 bg-opacity-7 rounded-md opacity-90 flex flex-col justify-around">
            <h4 className="text-center font-bold text-xl pb-2">
              Project Management
            </h4>
            <p className="pb-2">
              Extensive experience in managing large-scale projects with
              cross-functional teams and stakeholders. Key responsibilities
              included:
            </p>
            <ul className="list-disc pl-6 grid gap-2">
              <li>
                Managing large-scale projects with significant budgets and
                multiple stakeholders
              </li>
              <li>
                Coordinating resources across geographic locations and multiple
                organizational boundaries
              </li>
            </ul>
          </li>
        </ul>
        <div className="p-6 border-1-4 border-blue-500 bg-gray-100">
          <blockquote className="text-lg italic text-gray-700">
            “Working with Charles has been a pleasure; his professional and
            approachable demeanor made completion of projects straightforward
            and efficient. This was specifically evident in his work on two of
            my projects: www.microsoft.ca/dynamics and www.everyonegetsit.ca.
            His great work with these highly trafficked sites was
            indispensable.”
          </blockquote>
          <footer className="mt-4 text-gray-900 font-semibold">
            — Reja M - Marketing Communications Manager - Microsoft Canada
          </footer>
        </div>
      </div>
    </>
  );
}

export default Design;
