import { Leaf } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-900 dark:text-green-50">
        About the Agribusiness Incubation Programme
      </h1>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <Image
            src="/about-image.jpg"
            alt="Farmers in a field"
            width={600}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-green-800 dark:text-green-100">
            Our Mission
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The Agribusiness Incubation Programme is a joint initiative by
            UNIDO, E4Impact Foundation, and IPEME to stimulate growth of
            enterprises in the agribusiness sector in Chimoio, Manica province.
            Our mission is to support and nurture innovative agribusiness
            start-ups and SMEs, fostering sustainable economic growth and job
            creation in the region.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            We aim to provide comprehensive support to businesses that are ready
            to be commercialized, focusing on those with innovative solutions
            that respond to local value chains in areas such as production,
            aggregation, post-harvest losses management, value addition, access
            to market, and financing.
          </p>
        </div>
      </div>

      <div className="bg-green-50 dark:bg-gray-800 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-900 dark:text-green-50">
          Programme Objectives
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            "Foster innovation in the agribusiness sector",
            "Accelerate the growth of start-ups and SMEs",
            "Create sustainable job opportunities",
            "Enhance food security in the region",
            "Promote sustainable agricultural practices",
            "Facilitate access to markets and financing",
          ].map((objective, index) => (
            <div key={index} className="flex items-start space-x-3">
              <Leaf className="h-6 w-6 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
              <p className="text-gray-700 dark:text-gray-300">{objective}</p>
            </div>
          ))}
        </div>
      </div>

      {/* <div>
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-900 dark:text-green-50">
          Our Partners
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "UNIDO",
              description: "United Nations Industrial Development Organization",
              logo: "/UNIDO.png",
            },
            {
              name: "E4Impact Foundation",
              description: "Empowering high-impact entrepreneurs",
              logo: "/e4I.jpg",
            },
            {
              name: "IPEME",
              description:
                "Institute for the Promotion of Small and Medium Enterprises",
              logo: "/assets/ipeme-logo.png",
            },
          ].map((partner, index) => (
            <div key={index} className="text-center">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-4">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={150}
                  height={75}
                  className="mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 text-green-800 dark:text-green-100">
                  {partner.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {partner.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
}
