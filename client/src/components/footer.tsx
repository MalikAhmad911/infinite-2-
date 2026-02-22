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
              <span className="font-display text-3xl tracking-wider text-white">INFINITE</span>
              <span className="font-display text-3xl tracking-wider text-brand-blue">RANKERS</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm mb-6">
              USA's premier digital marketing agency helping local businesses dominate search,
              generate leads, and scale revenue. Google Partner with proven results.
            </p>
            <div className="flex items-center gap-2 px-3 py-2 rounded-md border border-white/10 bg-white/5 w-fit mb-6">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-xs text-white/60 font-medium">Google Partner Certified</span>
            </div>
            <div className="space-y-3 text-sm text-white/50">
              <a href="tel:+17034159373" className="flex items-center gap-3 hover:text-brand-blue transition-colors">
                <Phone className="w-4 h-4 text-brand-blue" />
                <span>(703) 415-9373</span>
              </a>
              <a href="mailto:contact@infiniterankers.io" className="flex items-center gap-3 hover:text-brand-blue transition-colors">
                <Mail className="w-4 h-4 text-brand-blue" />
                <span>contact@infiniterankers.io</span>
              </a>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-blue" />
                <span>203 N Caroline Pl, Dover, DE 19904, USA</span>
              </div>
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
                href="https://infiniterankers.io"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-brand-violet hover:text-brand-violet/80 transition-colors"
                data-testid="link-infinite-rankers-io"
              >
                infiniterankers.io
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
