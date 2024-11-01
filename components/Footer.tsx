import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              About Us
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              The Agribusiness Incubation Programme is a joint initiative to
              stimulate growth of enterprises in the agribusiness sector in
              Chimoio, Manica province.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/eligibility"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                >
                  Eligibility
                </Link>
              </li>
              <li>
                <Link
                  href="/assessment"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                >
                  Assessment
                </Link>
              </li>
              <li>
                <Link
                  href="/benefits"
                  className="text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400"
                >
                  Benefits
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Contact Us
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Email: info@agribusiness-incubation.com
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Phone: +258 123 456 789
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t dark:border-gray-800">
          <p className="text-center text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Agribusiness Incubation Programme. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
