"use client"

import { useState } from "react"
import { DashboardHeader } from "../../../_components/dashboard-header"
import { DashboardWrapper } from "../../../_components/dashboard-wrapper"

export default function AssignmentPage() {
  useState<"default" | "correct" | "wrong" | "celebrate">("default")
  return (
    <div>
      <DashboardHeader title="Course" left="left-100" />
      <DashboardWrapper>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta libero
          optio aut numquam dolore aliquid magni neque molestiae impedit quaerat
          sit, tempora porro ducimus, ea accusantium tempore aspernatur illum!
          Unde.
        </p>
      </DashboardWrapper>
    </div>
  )
}
