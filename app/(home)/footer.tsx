import Image from "next/image";

const QUICK_ACCESS = [
  {
    title: "quick links",
    access: [
      { link: "Courses" },
      { link: "Programs" },
      { link: "Certificates" },
    ],
  },
  {
    title: "learning",
    access: [
      { link: "How It Works" },
      { link: "Learning Pathways" },
      { link: "Assessment & Grading" },
    ],
  },
  {
    title: "company",
    access: [{ link: "About MPJA" }, { link: "Contact" }],
  },
  {
    title: "resources",
    access: [
      { link: "FAQ" },
      { link: "Help Center" },
      { link: "Terms & Privacy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white kurt mt-24">
      <div className="flex justify-between">
        <div className="w-1/2 max-w-md">
          <div className="flex items-center space-x-3">
            <Image
              src="/images/logo.png"
              alt="MPJA"
              width={76}
              height={83}
              priority
            />
            <h3 className="text-3xl font-bold text-primary">MPJA Learning</h3>
          </div>
          <p className="text-lg text-secondary font-medium pt-4">
            MPJA Learning is an online learning platform offering structured
            courses for students and professionals seeking practical, flexible,
            and accessible education.
          </p>
        </div>
        <div className="w-1/2">
          <h4 className="font-bold text-primary text-lg">Quick Links</h4>
          <ul className="space-y-4 text-secondary">
            <li>
              <a href="#">Courses</a>
            </li>
            <li>
              <a href="#">Programs</a>
            </li>
            <li>
              <a href="#">Certificates</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-slate-200 text-center text-sm text-slate-400">
        © 2025 MPJA Learning. All rights reserved.
      </div>
    </footer>
  );
}
