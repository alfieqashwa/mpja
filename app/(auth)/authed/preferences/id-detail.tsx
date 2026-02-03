import { SeparatorDash } from "@/components/separator-dash"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function IdDetail() {
  return (
    <div className="mx-auto p-8 bg-white rounded-2xl border border-border shadow-sm font-sans">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-primary">
          Identification Details
        </h2>
        <p className="text-secondary font-medium">
          The information in this section is optional. However, it may be
          required for courses that issue official certificates containing
          personal identification details.
        </p>
      </div>

      <SeparatorDash />

      <form className="grid grid-cols-12 gap-y-6 gap-x-4 items-start pt-6">
        <Label className="col-span-5 text-lg font-bold uppercase tracking-wider text-primary">
          ID Type
        </Label>
        <div className="col-span-12 md:col-span-7 relative">
          <Select>
            <SelectTrigger className="w-full px-4 py-5 bg-slate-50/30 data-[placeholder]:text-[#CBD5E1] data-[placeholder]:font-medium">
              <SelectValue placeholder="Select an ID" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {["Passport", "National ID/IC", "Residence Card"].map(
                  (studentId, idx) => (
                    <SelectItem
                      value={studentId}
                      className="space-x-2 p-3 focus:bg-[#FFF1F2]"
                      key={`${idx}-${studentId}`}
                    >
                      <span className="capitalize text-primary font-medium text-sm">
                        {studentId}
                      </span>
                    </SelectItem>
                  ),
                )}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </form>
    </div>
  )
}
