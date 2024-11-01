import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";

const assessmentCriteria = [
  {
    name: "Team",
    percentage: 15,
    description:
      "Evaluation of the team's skills, experience, and commitment to the project.",
  },
  {
    name: "Impact & Scalability",
    percentage: 15,
    description:
      "Assessment of the potential social and economic impact, and the ability to scale the business.",
  },
  {
    name: "Business model",
    percentage: 30,
    description:
      "Analysis of the business model's viability, sustainability, and potential for profitability.",
  },
  {
    name: "Novelty",
    percentage: 25,
    description:
      "Evaluation of the innovativeness of the solution in addressing agricultural challenges.",
  },
  {
    name: "Traction",
    percentage: 15,
    description:
      "Assessment of current progress, customer base, and market validation.",
  },
];

export default function AssessmentPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center text-green-900 dark:text-green-50">
        Assessment Criteria
      </h1>

      <div className="max-w-3xl mx-auto space-y-12 mb-16">
        {assessmentCriteria.map((criteria, index) => (
          <div key={index} className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-xl font-medium text-gray-800 dark:text-gray-200">
                {criteria.name}
              </span>
              <span className="text-lg font-medium text-gray-600 dark:text-gray-300">
                {criteria.percentage}%
              </span>
            </div>
            <Progress value={criteria.percentage} className="h-2" />
            <p className="text-gray-600 dark:text-gray-300">
              {criteria.description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-green-50 dark:bg-gray-800 rounded-lg p-8 mb-16">
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-900 dark:text-green-50">
          Assessment Process
        </h2>
        <div className="prose dark:prose-invert max-w-none">
          <p>
            Our assessment process is designed to be thorough and fair, ensuring
            that we select the most promising agribusinesses for our incubation
            program. Here's an overview of the process:
          </p>
          <ol>
            <li>
              <strong>Initial Screening:</strong> All applications are reviewed
              to ensure they meet the basic eligibility criteria.
            </li>
            <li>
              <strong>Detailed Evaluation:</strong> Qualified applications are
              then assessed based on the criteria outlined above.
            </li>
            <li>
              <strong>Interview Round:</strong> Shortlisted applicants are
              invited for an interview with our panel of experts.
            </li>
            <li>
              <strong>Final Selection:</strong> Based on the cumulative scores
              from the application and interview, the final cohort is selected.
            </li>
          </ol>
          <p>
            We encourage all applicants to thoroughly review these criteria and
            ensure their applications highlight their strengths in each of these
            areas.
          </p>
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-6 text-center text-green-900 dark:text-green-50">
          Tips for a Strong Application
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Clear Value Proposition",
              content:
                "Clearly articulate how your solution addresses a specific problem in the agricultural sector.",
            },
            {
              title: "Demonstrate Traction",
              content:
                "Provide evidence of any early successes, customer feedback, or market validation.",
            },
            {
              title: "Highlight Team Strengths",
              content:
                "Showcase the diverse skills and experiences of your team members.",
            },
            {
              title: "Show Scalability",
              content:
                "Explain how your business model can be scaled to create broader impact.",
            },
          ].map((tip, index) => (
            <Card key={index} className="bg-white dark:bg-gray-700">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-2 text-green-800 dark:text-green-100">
                  {tip.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {tip.content}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
