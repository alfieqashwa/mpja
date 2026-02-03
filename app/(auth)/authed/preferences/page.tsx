"use client"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { DashboardHeader } from "../_components/dashboard-header"
import { DashboardWrapper } from "../_components/dashboard-wrapper"
import { EligibilityForm } from "./eligibility-form"
import { ProfileForm } from "./profile-form"
import { StudentVerificationForm } from "./student-form"

const BUTTONS = [
  { title: "Profile" },
  { title: "ID Detail" },
  { title: "Student Verification" },
  { title: "Course Eligibility" },
]

export default function PreferencesPage() {
  const [stepForm, setStepForm] = useState<number>(1)

  return (
    <div>
      <DashboardHeader title="preferences" />
      <DashboardWrapper>
        {/* Buttons */}
        <div className="p-2 rounded-full inline-block space-x-2 bg-white">
          {BUTTONS.map((btn, i) => (
            <Button
              onClick={() => setStepForm(i)}
              variant={stepForm === i ? "default" : "ghost"}
              className={cn(
                "rounded-full cursor-pointer",
                stepForm !== i && "text-secondary hover:bg-slate-50",
              )}
              key={`${i}-${btn.title}`}
            >
              {btn.title}
            </Button>
          ))}
        </div>

        {stepForm === 0 && <ProfileForm />}
        {stepForm === 2 && <StudentVerificationForm />}
        {stepForm === 3 && <EligibilityForm />}
      </DashboardWrapper>
    </div>
  )
}
