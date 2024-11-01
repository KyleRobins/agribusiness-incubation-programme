import { Leaf, ChevronRight, CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import ClientButton from "@/components/ClientButton";

const assessmentCriteria = [
  { name: "Team", percentage: 15 },
  { name: "Impact & Scalability", percentage: 15 },
  { name: "Business model", percentage: 30 },
  { name: "Novelty", percentage: 25 },
  { name: "Traction", percentage: 15 },
];

export default function Home() {
  return (
    <>
      {/* Partnership Section */}
      <section className="py-4 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h3 className="text-lg font-semibold text-center mb-4 text-gray-700 dark:text-gray-300">
            In Partnership With
          </h3>
          <div className="flex justify-center items-center space-x-8">
            {[
              { id: 1, src: "/AICS.png" },
              { id: 2, src: "/Italy.jpg" },
              { id: 3, src: "/UNIDO.png" },
            ].map((partner) => (
              <div
                key={partner.id}
                className="w-24 h-12 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center"
              >
                <Image
                  src={partner.src}
                  alt={`Partner ${partner.id} logo`}
                  width={80}
                  height={40}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen mb-24 md:mb-32 lg:mb-40">
        <div className="absolute inset-0">
          <Image
            src="/Hero-Image.jpg"
            alt="Agricultural worker in a field"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
        </div>
        <div className="relative container px-4 mx-auto text-center z-10 flex flex-col items-center justify-center h-full">
          <div className="max-w-4xl mx-auto">
            <Leaf className="h-12 w-12 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl mb-6 text-white">
              Agribusiness Incubation Programme
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-2xl mx-auto">
              A joint initiative by UNIDO, E4Impact Foundation and IPEME to
              stimulate growth of enterprises in the agribusiness sector in
              Chimoio, Manica province.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <ClientButton />
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white hover:bg-white/90 text-gray-900 border-transparent min-w-[200px]"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-4 md:py-8 lg:py-12 bg-white dark:bg-gray-900"
      >
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-green-900 dark:text-green-50">
              About the Programme
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              The E4Impact/IPEME Agribusiness Incubation Programme will provide
              support to Agribusiness SMEs/Start-ups in the agriculture and
              allied sectors in Chimoio, Manica Province that are ready to be
              commercialized. The start-ups should have an innovative
              agriculture solution responding to local value chains at either of
              the following levels: production, aggregation, post-harvest losses
              management, value addition, access to market, and financing.
            </p>
            <Link href="/about">
              <Button variant="outline">Learn More About the Programme</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria Section */}
      <section id="eligibility" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-green-900 dark:text-green-50">
            Eligibility Criteria
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Have an existing Agribusiness",
              "Have an innovative solution responding to local value chains",
              "Be registered in Mozambique",
              "Must be located in Chimoio, Manica Province",
              "Business must be scalable",
              "Must be available for all program activities",
              "Minimum of one full-time co-founder",
            ].map((criteria, index) => (
              <Card key={index} className="bg-white dark:bg-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                    <p className="text-gray-600 dark:text-gray-200">
                      {criteria}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/eligibility">
              <Button variant="outline">View Full Eligibility Criteria</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Assessment Criteria Section */}
      <section id="assessment" className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-green-900 dark:text-green-50">
            Assessment Criteria
          </h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {assessmentCriteria.map((criteria, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {criteria.name}
                  </span>
                  <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
                    {criteria.percentage}%
                  </span>
                </div>
                <Progress value={criteria.percentage} className="h-2" />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/assessment">
              <Button variant="outline">Learn More About Assessment</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-green-900 dark:text-green-50">
            Benefits of joining the Program
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Bespoke Training",
              "Mentorship and coaching",
              "Networking opportunities",
              "Alumni Support",
              "Expert consultation",
              "Demo days",
              "Investor linkages",
            ].map((benefit, index) => (
              <Card key={index} className="bg-white dark:bg-gray-700">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <Leaf className="h-5 w-5 text-green-600 dark:text-green-400" />
                    <p className="text-gray-600 dark:text-gray-200">
                      {benefit}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/benefits">
              <Button variant="outline">Explore All Benefits</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Application Process Section */}
      <section id="apply" className="py-16 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center text-green-900 dark:text-green-50">
            Application Process
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="prose dark:prose-invert">
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                The calls for applications will run from 1st to 30th November,
                2024. Applications can be submitted either online through our
                application portal or by submission of physical forms at the
                IPEME offices in Chimoio.
              </p>
              <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-lg mb-6">
                <h3 className="text-xl font-semibold mb-4 text-green-900 dark:text-green-50">
                  What will not qualify?
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <XCircle className="h-5 w-5 text-red-500" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Proposals that don't show clear innovation
                    </span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <XCircle className="h-5 w-5 text-red-500" />
                    <span className="text-gray-600 dark:text-gray-300">
                      Solutions that are not Agri-based
                    </span>
                  </li>
                </ul>
              </div>
              <ClientButton />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
