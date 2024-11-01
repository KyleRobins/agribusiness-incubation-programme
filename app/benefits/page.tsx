import { Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const benefits = [
  {
    title: "Bespoke Training",
    description:
      "Tailored training sessions covering key aspects of agribusiness management and entrepreneurship.",
  },
  {
    title: "Mentorship and coaching",
    description:
      "One-on-one guidance from industry experts to help navigate challenges and accelerate growth.",
  },
  {
    title: "Networking opportunities",
    description:
      "Access to a wide network of agribusiness professionals, potential partners, and investors.",
  },
  {
    title: "Alumni Support",
    description:
      "Ongoing support and resources even after program completion to ensure long-term success.",
  },
  {
    title: "Expert consultation",
    description:
      "Access to subject matter experts for specialized advice on various aspects of your business.",
  },
  {
    title: "Demo days",
    description:
      "Opportunities to showcase your business to potential investors and partners.",
  },
  {
    title: "Investor linkages",
    description:
      "Connections to potential investors interested in the agribusiness sector.",
  },
];

export default function BenefitsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-900 dark:text-green-50">
        Benefits of the Program
      </h1>

      <div className="max-w-4xl mx-auto mb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white dark:bg-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <Leaf className="h-6 w-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-gray-100">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-green-50 dark:bg-gray-800 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-900 dark:text-green-50">
          Additional Program Features
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <ul>
            <li>
              <strong>Co-working Space:</strong> Access to a dedicated workspace
              in Chimoio for the duration of the program.
            </li>
            <li>
              <strong>Technology Support:</strong> Guidance on leveraging
              technology to enhance your agribusiness operations.
            </li>
            <li>
              <strong>Market Access:</strong> Support in identifying and
              accessing new markets for your products or services.
            </li>
            <li>
              <strong>Financial Management:</strong> Training and support in
              financial planning and management for your business.
            </li>
            <li>
              <strong>Legal and Regulatory Guidance:</strong> Assistance in
              navigating the legal and regulatory landscape of the agribusiness
              sector in Mozambique.
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-900 dark:text-green-50">
          Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "AgroTech Solutions",
              description:
                "Developed an innovative irrigation system, increasing crop yields by 30% for small-scale farmers.",
            },
            {
              name: "FreshHarvest Co.",
              description:
                "Created a mobile app connecting farmers directly to consumers, reducing food waste and increasing farmer profits.",
            },
          ].map((story, index) => (
            <Card key={index} className="bg-white dark:bg-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-green-800 dark:text-green-100">
                  {story.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {story.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
