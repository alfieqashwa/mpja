export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white kurt">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              MPJA Learning
            </h3>
            <p className="text-sm text-slate-500">
              MPJA Learning is an online learning platform offering structured
              courses for students and professionals.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-rose-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500">
                  Courses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-rose-500">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500">
                  Terms
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Connect</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li>
                <a href="#" className="hover:text-rose-500">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-rose-500">
                  YouTube
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-400">
          © 2025 MPJA Learning. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
