import { SeparatorDash } from "@/components/separator-dash"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"
import { useState } from "react"

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
        {/* ID TYPE */}
        <Label className="col-span-5 text-lg font-bold uppercase tracking-wider text-primary">
          ID Type
        </Label>
        <div className="col-span-12 md:col-span-7 relative">
          <Select>
            <SelectTrigger className="w-full px-4 py-5.5 bg-slate-50/30 data-[placeholder]:text-[#CBD5E1] data-[placeholder]:font-medium">
              <SelectValue placeholder="Select ID type (Passport / Resident Card / Student ID)" />
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
        {/* ID NUMBER */}
        <Label className="col-span-5 text-lg font-bold uppercase tracking-wider text-primary">
          ID NUMBER
        </Label>
        <div className="col-span-12 md:col-span-7">
          <input
            placeholder="Select ID Number"
            type="number"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-[#CBD5E1]"
          />
        </div>
        {/* DATE OF BIRTH */}
        <Label className="col-span-5 text-lg font-bold uppercase tracking-wider text-primary">
          DATE OF BIRTH
        </Label>
        <div className="col-span-12 md:col-span-7">
          {/* TODO: Setup Calendar using Shadcn/ui */}
          <DatePicker />
        </div>
        {/* PHONE NUMBER */}
        <Label className="col-span-5 text-lg font-bold uppercase tracking-wider text-primary">
          PHONE NUMBER
        </Label>
        <div className="col-span-12 md:col-span-7">
          <input
            placeholder="e.g. 0812 5678 9012"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-[#CBD5E1]"
          />
        </div>
        {/* CERTIFICATE PHOTO */}
        <Label className="col-span-5 text-lg font-bold uppercase tracking-wider text-primary">
          CERTIFICATE PHOTO
        </Label>
        <div className="col-span-12 md:col-span-7 flex gap-2">
          <input
            placeholder="Upload Certificate"
            className="w-full px-4 py-2.5 rounded-lg border border-slate-200 bg-slate-50/30 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all placeholder:text-[#CBD5E1]"
          />
          <Button className="cursor-pointer">Upload PDF</Button>
        </div>
        {/* DECLARATION */}
        <Label className="col-span-5 text-lg font-bold uppercase tracking-wider text-primary">
          DECLARATION
        </Label>
        <div className="col-span-12 md:col-span-7 space-y-4">
          <p className="text-secondary font-medium">
            I confirm that the identification information I have provided is
            accurate and belongs to me. I understand that providing false or
            misleading information may result in rejection of my enrollment or
            cancellation of my certificate.
          </p>
          <RadioGroup>
            <div className="flex items-center space-x-3 py-2">
              <RadioGroupItem
                value="confirm"
                id="confirm"
                className="w-5 h-5 border-slate-300 text-blue-600 focus:ring-blue-500 data-[state=checked]:bg-[#16A34A] data-[state=checked]:border-bg-[#16A34A]"
              />
              <Label
                htmlFor="confirm"
                className="font-bold text-slate-900 cursor-pointer"
              >
                I acknowledge and confirm this declaration
              </Label>
            </div>
          </RadioGroup>
        </div>
      </form>
    </div>
  )
}

function DatePicker() {
  const [date, setDate] = useState<Date>()

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-full justify-between text-primary text-base px-4 py-5.5 bg-slate-50/30 border-slate-200 text-left font-normal hover:bg-slate-50/0",
            !date && "text-[#CBD5E1]",
          )}
        >
          {date ? format(date, "PPP") : <span>Pick a date</span>}
          <CalendarIcon className="h-5 w-5 text-primary" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-auto p-0 border-none shadow-2xl rounded-2xl"
        align="start"
      >
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="p-6"
          classNames={{
            // outside: "bg-emerald-400 text-emerald-600",
            day_button: "text-primary font-medium text-sm rounded-full size-10",
            today: "rounded-full bg-pink-50",
            caption_label: "text-primary font-bold text-lg",
            chevron: "size-6 text-primary",
            outside:
              "day-outside text-[#CBD5E1] opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
          }}
        />
        <div className="flex items-center justify-between gap-2 py-4 mx-6 border-t-2 border-slate-100">
          <Button
            variant="ghost"
            className="text-[#F43F5E] hover:text-[#F43F5E] flex-1 hover:bg-rose-50"
          >
            Cancel
          </Button>
          <Button className="bg-[#F43F5E] hover:bg-[#E11D48] flex-1 text-white px-8 rounded-lg">
            Apply
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}
