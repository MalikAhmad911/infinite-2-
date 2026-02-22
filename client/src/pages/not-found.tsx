import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <span className="font-display text-8xl sm:text-9xl text-brand-blue/15 tracking-wider">404</span>
        <h1 className="font-heading font-bold text-3xl sm:text-4xl text-brand-dark -mt-4">Page Not Found</h1>
        <p className="mt-4 text-brand-muted max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <span className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg cursor-pointer">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </span>
        </Link>
      </div>
    </div>
  );
}
