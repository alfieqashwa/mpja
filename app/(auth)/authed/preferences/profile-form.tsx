import { timeZones } from "@/app/constants/timezones"
import { SeparatorDash } from "@/components/separator-dash"
import { Label } from "@/components/ui/label"
import { TimeZonePicker } from "./timezone-picker"

export function ProfileForm() {
  return (
    <div className="mx-auto p-8 bg-white rounded-2xl border border-border shadow-sm font-sans">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-primary">Profile</h2>
        <p className="text-secondary font-medium">
          Track payments for your enrolled courses and access receipts anytime.
        </p>
      </div>

      <SeparatorDash />

      <form className="grid grid-cols-12 gap-y-6 gap-x-4 items-center pt-6">
        {/* NAME */}
        <Label className="col-span-5 text-lg font-bold uppercase tracking-wider text-primary">
          Name<span className="text-danger">*</span>
        </Label>
        <div className="col-span-12 md:col-span-7">
          <input
            placeholder="e.g., Muhammad Ahmad"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-[#CBD5E1]"
          />
        </div>

        {/* NATIVE NAME */}
        <Label className="col-span-5 text-lg font-bold uppercase tracking-wider text-primary">
          Name in Native Script (Optional)
        </Label>
        <div className="col-span-12 md:col-span-7">
          <input
            type="text"
            placeholder="e.g., محمد أحمد / 山田 太郎"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/30 focus:bg-white focus:outline-none placeholder:text-slate-300"
          />
        </div>

        {/* ACCOUNT TYPE */}
        <Label className="col-span-5 text-lg font-bold uppercase tracking-wider text-primary">
          Account Type
        </Label>
        <div className="col-span-12 md:col-span-7 grid grid-cols-2 gap-4">
          <Label className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50">
            <input
              type="radio"
              name="acc_type"
              className="w-4 h-6 text-blue-600 border-slate-300 focus:ring-blue-500"
            />
            <span className="font-semibold text-primary">Individual</span>
          </Label>
          <Label className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-slate-200 cursor-pointer hover:bg-slate-50">
            <input
              type="radio"
              name="acc_type"
              className="w-4 h-6 text-blue-600 border-slate-300 focus:ring-blue-500"
            />
            <span className="font-semibold text-primary">Company</span>
          </Label>
        </div>

        {/* ORGANIZATION NAME */}
        <Label className="col-span-5 text-lg font-bold uppercase tracking-wider text-primary">
          Organization Name
        </Label>
        <div className="col-span-12 md:col-span-7">
          <input
            type="text"
            placeholder="e.g., MPJA Association / Universiti Teknologi Malaysia"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/30 focus:bg-white focus:outline-none placeholder:text-slate-300"
          />
        </div>

        {/* EMAIL */}
        <Label className="col-span-5 text-lg font-bold uppercase tracking-wider text-primary">
          Email
        </Label>
        <div className="col-span-12 md:col-span-7">
          <input
            type="email"
            placeholder="e.g., you@example.com"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/30 focus:bg-white focus:outline-none placeholder:text-slate-300"
          />
        </div>

        {/* TIME ZONE */}
        <Label className="col-span-5 text-lg font-bold uppercase tracking-wider text-primary">
          Time Zone
        </Label>
        <div className="col-span-12 md:col-span-7 relative">
          <TimeZonePicker timeZones={timeZones} />
          <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
            <svg
              className="w-4 h-4 text-slate-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </form>
    </div>
  )
}
