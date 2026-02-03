"use client"

import { ArrowLeftIcon } from "@/components/custom-icons"
import { Button } from "@/components/ui/button"
import { jpyCurrency } from "@/lib/jpy-currency"
import Image from "next/image"
import Link from "next/link"

export default function InvoicePage() {
  return (
    <div className="">
      {/* Header */}
      <header className="fixed top-0 right-0 z-99 left-0">
        <div className="bg-white h-18.5 px-4 border-l-2 flex justify-between items-center border-b-2">
          <Link
            href="/authed/transaction"
            className="text-rose-600 flex items-center space-x-2"
          >
            <ArrowLeftIcon className="size-5" />
            <h2 className="font-bold text-sm">Return to Dashboard</h2>
          </Link>
          <section className="space-x-3">
            <Button variant={"secondary"} className="cursor-pointer">
              Print
            </Button>
            <Button className="cursor-pointer">Download PDF</Button>
          </section>
        </div>
      </header>
      <main className="mt-18.5 w-2/5 px-7 pt-10 mx-auto min-h-[calc(100vh-6rem)] bg-white relative">
        <section className="relative">
          <div className="absolute top-0 right-0">
            <Image
              src={"/img/logo.png"}
              alt="MPJA"
              width={75}
              height={61}
              priority
              className="object-cover"
            />
          </div>

          <h1 className="text-xl text-primary font-bold">
            Halal Program - MPJA Learning.jp
          </h1>
          <ul className="mt-4 font-medium text-xs">
            <li className="flex space-x-2">
              <p className="text-secondary w-20">Invoice No.</p>
              <p className="text-primary">#KY7JYFFC</p>
            </li>
            <li className="flex space-x-2">
              <p className="text-secondary w-20">Due Date.</p>
              <p className="text-primary">Sep 30, 2025</p>
            </li>
            <li className="flex space-x-2">
              <p className="text-secondary w-20">Status</p>
              <p className="text-[#22C55E]">Completed</p>
            </li>
          </ul>
        </section>

        <ul className="mt-7 gap-3 flex w-full">
          {Array.from({ length: 2 }).map((_, i) => (
            <li
              className="bg-[#F8FAFC] flex-1 p-3.5 space-y-1.5 rounded-xl shadow-xs"
              key={i}
            >
              <h4 className="text-danger font-medium text-2.5">Billed By</h4>
              <p className="text-base text-primary font-bold">
                Rahma Kurniawan
              </p>
              <article className="pt-2.5 flex font-medium text-xs">
                <p className="w-1/3 text-secondary">Email</p>
                <p className="flex-1 text-primary">admin@mpja.jp</p>
              </article>
            </li>
          ))}
        </ul>

        <div className="overflow-hidden mt-6 rounded-t-xl bg-white shadow-xs">
          <table className="w-full text-left text-sm border-collapse">
            <thead className="bg-[#E11D48] text-white font-semibold">
              <tr>
                <th className="px-4 py-3">Service and description</th>
                <th className="px-4 py-3 text-center">Qty</th>
                <th className="px-4 py-3 text-right">Price</th>
                <th className="px-4 py-3 text-right">Total</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 font-bold text-primary">
              <tr>
                <td className="px-4 py-4">Halal Supervisor</td>
                <td className="px-4 py-4 text-center">1</td>
                <td className="px-4 py-4 text-right">{jpyCurrency(15_000)}</td>
                <td className="px-4 py-4 text-right">{jpyCurrency(15_000)}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <p className="text-danger font-medium text-2.5">
            Thank you for your business!
          </p>
        </div>
      </main>
    </div>
  )
}
