import { CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function EligibilityPage() {
  const eligibilityCriteria = [
    "Have an existing Agribusiness",
    "Have an innovative solution responding to local value chains",
    "Be registered in Mozambique",
    "Must be located in Chimoio, Manica Province",
    "Business must be scalable",
    "Must be available for all program activities",
    "Minimum of one full-time co-founder",
  ];

  const nonQualifyingCriteria = [
    "Proposals that don't show clear innovation",
    "Solutions that are not Agri-based",
    "Businesses not registered in Mozambique",
    "Businesses located outside of Chimoio, Manica Province",
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-900 dark:text-green-50">
        Eligibility Criteria
      </h1>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-green-800 dark:text-green-100">
          Who Can Apply?
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {eligibilityCriteria.map((criteria, index) => (
            <Card key={index} className="bg-white dark:bg-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-200">{criteria}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-green-800 dark:text-green-100">
          What Will Not Qualify?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {nonQualifyingCriteria.map((criteria, index) => (
            <Card key={index} className="bg-white dark:bg-gray-700">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <XCircle className="h-6 w-6 text-red-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-200">{criteria}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-green-50 dark:bg-gray-800 rounded-lg p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-900 dark:text-green-50">
          Additional Information
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            The Agribusiness Incubation Programme is designed to support
            innovative agribusinesses that have the potential to make a
            significant impact in the Chimoio region. We are looking for
            businesses that:
          </p>
          <ul>
            <li>
              Address key challenges in the local agricultural value chains
            </li>
            <li>Demonstrate potential for growth and scalability</li>
            <li>
              Show commitment to sustainable and ethical business practices
            </li>
            <li>
              Have a clear vision for their business and its impact on the
              community
            </li>
          </ul>
          <p>
            If you meet the eligibility criteria and believe your agribusiness
            has what it takes to thrive in our incubation programme, we
            encourage you to apply. Our team is committed to supporting
            promising ventures and helping them reach their full potential.
          </p>
        </div>
      </div>
    </div>
  );
}
