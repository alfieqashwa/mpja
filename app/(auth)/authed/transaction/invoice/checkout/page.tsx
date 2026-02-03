"use client"

import { BooksIcon } from "@/components/custom-icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { jpyCurrency } from "@/lib/jpy-currency"
import Link from "next/link"
import { DashboardHeader } from "../../../_components/dashboard-header"
import { DashboardWrapper } from "../../../_components/dashboard-wrapper"
import { DETAIL_INFO } from "../../../course/detail-info"

export default function CheckoutPage() {
  return (
    <div>
      <DashboardHeader title="Transaction" left="left-0 right-60" />
      <DashboardWrapper className="flex justify-between w-full gap-7 px-0 mx-14">
        {/* Checkout Form */}
        <section className="p-6 border shadow-sm w-200 bg-white rounded-2xl">
          <h2 className="text-primary font-bold text-2xl">Checkout</h2>
          <div className="p-5 border rounded-2xl mt-8 shadow-sm">
            <h3 className="text-primary font-bold text-xl">Billing Address</h3>
            <p className="text-secondary font-medium mt-5">
              You will have immediate access to all course materials after
              payment.
            </p>
            <form className="mt-5 space-y-5">
              <section className="space-y-2">
                <Label className="uppercase text-sm font-bold text-primary">
                  name on card
                </Label>
                <Input
                  placeholder="Placeholder Text"
                  className="placeholder:text-primary placeholder:font-medium"
                />
              </section>
              <section className="space-y-2">
                <Label className="uppercase text-sm font-bold text-primary">
                  credit card number
                </Label>
                <Input
                  placeholder="0000 0000 0000 0000"
                  className="placeholder:text-primary placeholder:font-medium"
                />
              </section>
              <section className="space-x-3 flex justify-between">
                <section className="space-y-2 flex-1">
                  <Label className="uppercase text-sm font-bold text-primary">
                    EXpiration Date
                  </Label>
                  <Input
                    placeholder="00 / 00 / 0000"
                    className="placeholder:text-primary placeholder:font-medium"
                  />
                </section>
                <section className="space-y-2 flex-1">
                  <Label className="uppercase text-sm font-bold text-primary">
                    cvc
                  </Label>
                  <Input
                    placeholder="Placeholder Text"
                    className="placeholder:text-primary placeholder:font-medium"
                  />
                </section>
              </section>
              <Button className="cursor-pointer w-full">
                Complete Payment
              </Button>
            </form>
          </div>
          <div className="p-5 border rounded-2xl mt-8 space-y-3 shadow-sm">
            <h3 className="text-primary font-bold text-xl">
              Or pay with Stripe
            </h3>
            <p className="text-secondary font-medium">
              You will be redirected to Stripe Checkout to complete your
              payment.
            </p>
            <Link href={"/authed/transaction/invoice/checkout/stripe"}>
              <Button className="cursor-pointer w-full">Pay With Stripe</Button>
            </Link>
          </div>
        </section>

        {/* Detail Information */}
        <section className="p-6 border shadow-sm bg-white h-1/2 w-125 rounded-2xl">
          <div className="flex items-center space-x-4">
            <div className="flex size-20 shrink-0 items-center justify-center rounded bg-rose-50 text-rose-500">
              <BooksIcon className="text-danger size-11" />
            </div>
            <div className="mt-3 space-y-2">
              <p className="block w-fit px-2 py-1 rounded-sm bg-[#FBCFE8] text-xs font-semibold text-[#DB2777]">
                Course
              </p>
              <p className="truncate capitalize text-lg font-bold text-primary">
                Halal Japan Biginner Course
              </p>
            </div>
            <p className="font-bold text-danger text-3xl">
              {jpyCurrency(7000)}
            </p>
          </div>
          <div className="mt-5">
            <h3 className="text-2xl font-bold text-primary">
              Detail Information
            </h3>
            <ul className="space-y-3 pt-5">
              {DETAIL_INFO.map((detail, idx) => (
                <li
                  className="flex items-center gap-1"
                  key={`${idx}-${detail.info}`}
                >
                  {detail.icon}
                  <p className="font-semibold text-primary">{detail.info}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </DashboardWrapper>
    </div>
  )
}
