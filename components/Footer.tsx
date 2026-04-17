import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-playfair font-bold mb-3">Naitik Gupta</h3>
            <p className="text-white/70 font-poppins text-sm">
              Chemistry researcher passionate about organic synthesis and catalysis innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Achievements', 'References'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-white/70 hover:text-white font-poppins text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a
                  href="mailto:naitikgupta976@gmail.com"
                  className="text-white/70 hover:text-white font-poppins text-sm transition-colors"
                >
                  Email Me
                </a>
              </li>
              <li className="flex items-center gap-2">
                <ExternalLink size={16} />
                <span className="text-white/70 font-poppins text-sm">
                  +91-7007401684
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-playfair font-bold text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors text-white"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/10 rounded-lg hover:bg-primary transition-colors text-white"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:naitikgupta976@gmail.com"
                className="p-2 bg-white/10 rounded-lg hover:bg-secondary transition-colors text-white"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-white/60 font-poppins text-sm text-center md:text-left">
            <p>© {currentYear} Naitik Gupta. All rights reserved.</p>
          </div>

          <div className="text-white/60 font-poppins text-sm flex gap-6 text-center">
            <span>Designed with care</span>
            <span>|</span>
            <span>Professional Portfolio</span>
          </div>

          <a
            href="#home"
            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary text-white rounded-full font-poppins font-semibold hover:shadow-lg transition-all text-sm"
          >
            Back to Top
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
