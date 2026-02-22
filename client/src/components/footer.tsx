import { Link } from "wouter";
import { ArrowUpRight, Phone, Mail, MapPin } from "lucide-react";
import { SiInstagram, SiFacebook, SiLinkedin, SiX } from "react-icons/si";

const companyLinks = [
  { label: "About Us", path: "/about" },
  { label: "Our Team", path: "/about" },
  { label: "Careers", path: "/contact" },
  { label: "Contact", path: "/contact" },
];

const serviceLinks = [
  { label: "SEO Services", path: "/services" },
  { label: "PPC & Google Ads", path: "/services" },
  { label: "Social Media Marketing", path: "/services" },
  { label: "Web Design", path: "/services" },
  { label: "Content Marketing", path: "/services" },
  { label: "Email Marketing", path: "/services" },
];

const resourceLinks = [
  { label: "Blog", path: "/blog" },
  { label: "Case Studies", path: "/results" },
  { label: "Free Audit", path: "/contact" },
  { label: "FAQs", path: "/contact" },
];

const socialLinks = [
  { icon: SiFacebook, label: "Facebook", href: "#" },
  { icon: SiInstagram, label: "Instagram", href: "#" },
  { icon: SiLinkedin, label: "LinkedIn", href: "#" },
  { icon: SiX, label: "X", href: "#" },
];

export default function Footer() {
  return (
    <footer data-testid="footer" className="relative bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/logo.webp" alt="Infinite Rankers logo" className="h-9 w-9" />
              <span style={{ fontFamily: "'Inter', sans-serif" }} className="text-2xl font-bold tracking-tight text-white">INFINITE</span>
              <span style={{ fontFamily: "'Inter', sans-serif" }} className="text-2xl font-bold tracking-tight text-brand-blue">RANKERS</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              AI Revenue Growth Agency. Automated systems that generate customers and revenue for businesses worldwide.
            </p>
            <div className="space-y-3 text-sm text-white/50 mb-6">
              <a href="mailto:contact@infiniterankers.com" className="flex items-center gap-3 hover:text-brand-blue transition-colors">
                <Mail className="w-4 h-4 text-brand-blue" />
                <span>contact@infiniterankers.com</span>
              </a>
              <a href="tel:+17034159373" className="flex items-center gap-3 hover:text-brand-blue transition-colors">
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>(703) 415-9373</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-blue" />
                <span>203 N Caroline Pl, Dover, DE 19904, USA</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
              <span className="text-sm text-white/70 font-medium">24/7 Support — Weekends too</span>
            </div>
            <div className="inline-flex flex-col items-center gap-1 rounded-lg bg-white px-5 py-4 mb-3">
              <svg viewBox="0 0 48 48" className="w-8 h-8">
                <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
                <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
                <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
                <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              </svg>
              <span style={{ fontFamily: "'Inter', sans-serif", color: "#5F6368" }} className="text-xs font-medium">Google Partner</span>
            </div>
            <div>
              <a href="https://infiniterankers.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-semibold text-brand-blue hover:text-brand-blue/80 transition-colors">
                We're Google Partners!
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.path}>
                    <span className="text-sm text-white/50 hover:text-brand-blue transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.path}>
                    <span className="text-sm text-white/50 hover:text-brand-blue transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.path}>
                    <span className="text-sm text-white/50 hover:text-brand-blue transition-colors cursor-pointer">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a
                href="https://infiniterankers.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-brand-violet hover:text-brand-violet/80 transition-colors"
                data-testid="link-infinite-rankers-io"
              >
                infiniterankers.com
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-10">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              data-testid={`link-social-${social.label.toLowerCase()}`}
              className="w-10 h-10 rounded-md border border-white/10 bg-white/5 flex items-center justify-center text-white/50 hover:text-brand-violet hover:border-brand-violet/30 transition-all"
            >
              <social.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <div className="mt-10 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            &copy; 2025 Infinite Rankers. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            <span className="text-xs text-white/30 hover:text-white/50 cursor-pointer transition-colors">
              Privacy Policy
            </span>
            <span className="text-xs text-white/30 hover:text-white/50 cursor-pointer transition-colors">
              Terms of Service
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
