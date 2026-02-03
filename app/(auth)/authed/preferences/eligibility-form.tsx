import { SeparatorDash } from "@/components/separator-dash"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export function EligibilityForm() {
  return (
    <div className="mx-auto p-8 bg-white rounded-2xl border border-border shadow-sm font-sans">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-primary">Course Eligibility</h2>
        <p className="text-secondary font-medium">
          Student discounts are available only to active students who have
          completed student verification with valid proof of enrollment.
        </p>
      </div>

      <SeparatorDash />

      <form className="grid grid-cols-12 gap-y-6 gap-x-4 items-start pt-6">
        <Label className="col-span-5 text-lg font-bold uppercase tracking-wider text-primary">
          Declaration
        </Label>
        <div className="col-span-12 md:col-span-7 space-y-4 text-secondary font-medium">
          <p>
            Certain courses such as Halal Supervisor, and other Shariah-related
            courses require participants to be Muslim. This declaration is used
            solely to verify eligibility for such courses.
          </p>
          <p>
            Other courses, such as Halal Administrator and Muslim-Friendly
            Administrator, do not require participants to be Muslim.
          </p>
          <p>
            “I hereby declare that I am a Muslim. Providing false information
            may result in cancellation of my certificate.”
          </p>
          <RadioGroup>
            <div className="flex items-center space-x-3 p-2">
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
          <section className="flex space-x-3 justify-end mt-6 -mb-2">
            <Button variant={"secondary"} className="cursor-pointer">
              Cancel
            </Button>
            <Button className="cursor-pointer">Save Update</Button>
          </section>
        </div>
      </form>
    </div>
  )
}
