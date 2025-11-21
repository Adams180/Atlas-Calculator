/**
 * Site footer component
 */

import { CONTENT } from '@/config/constants';
import { siteConfig } from '@/config/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-white text-xl font-bold mb-4">
              {CONTENT.site.name}
            </h3>
            <p className="text-gray-400">
              {CONTENT.site.description}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">
              {CONTENT.footer.contact}
            </h4>
            <div className="space-y-2">
              <p>
                <a 
                  href={`mailto:${siteConfig.author.email}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {siteConfig.author.email}
                </a>
              </p>
              <p className="text-gray-400">
                {CONTENT.footer.location}
              </p>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="/" 
                  className="hover:text-primary-400 transition-colors"
                >
                  Calculator
                </a>
              </li>
              <li>
                <a 
                  href="/about" 
                  className="hover:text-primary-400 transition-colors"
                >
                  About Atlas
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} {CONTENT.site.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}