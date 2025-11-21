/**
 * About page
 */

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CONTENT } from '@/config/constants';
import { siteConfig } from '@/config/siteConfig';

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            {CONTENT.about.title}
          </h1>
          
          <div className="bg-white p-8 rounded-xl shadow-md space-y-6">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Our Mission
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {CONTENT.about.mission}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                About the Calculator
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                {CONTENT.about.description}
              </p>
              <p className="text-gray-700 leading-relaxed">
                Built with real operational data from transport companies, logistics
                coordinators, and humanitarian organizations across Cameroon, our
                calculator provides accurate estimates that help you plan better and
                save resources.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                Contact Us
              </h2>
              <p className="text-gray-700 mb-2">
                Have questions or feedback? We'd love to hear from you.
              </p>
              <p className="text-gray-700">
                Email: <a 
                  href={`mailto:${siteConfig.author.email}`}
                  className="text-primary-600 hover:underline"
                >
                  {siteConfig.author.email}
                </a>
              </p>
            </div>

            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="font-semibold text-primary-900 mb-2">
                Need a custom solution?
              </h3>
              <p className="text-primary-800">
                We build custom logistics intelligence systems for organizations.
                Get in touch to discuss your specific needs.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}