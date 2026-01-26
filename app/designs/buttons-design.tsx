import { ArrowLeftIcon, ArrowRightIcon } from "@/components/custom-icons"
import { Button } from "@/components/ui/button"

export function ButtonsDesign() {
  return (
    <div>
      <h1 className="text-2xl">Buttons Design</h1>
      <div className="grid gap-8 columns-4 mt-8">
        <section className="space-x-8">
          <h2>XL</h2>
          <Button
            variant={"default"}
            size={"xl"}
            className="hover:cursor-pointer"
          >
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
          <Button
            variant={"secondary"}
            size={"xl"}
            className="hover:cursor-pointer"
          >
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
          <Button
            variant={"outline"}
            size={"xl"}
            className="hover:cursor-pointer"
          >
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
          <Button
            variant={"ghost"}
            size={"xl"}
            className="hover:cursor-pointer"
          >
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
        </section>
        <section className="space-x-8">
          <h2>LG</h2>
          <Button
            variant={"default"}
            size={"lg"}
            className="hover:cursor-pointer"
          >
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
          <Button
            variant={"secondary"}
            size={"lg"}
            className="hover:cursor-pointer"
          >
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
          <Button
            variant={"outline"}
            size={"lg"}
            className="hover:cursor-pointer"
          >
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
          <Button
            variant={"ghost"}
            size={"lg"}
            className="hover:cursor-pointer"
          >
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
        </section>
        <section className="space-x-8">
          <h2>MD / size=default</h2>
          <Button
            variant={"default"}
            size={"default"}
            className="hover:cursor-pointer"
          >
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
          <Button variant={"secondary"} className="hover:cursor-pointer">
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
          <Button variant={"outline"} className="hover:cursor-pointer">
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
          <Button variant={"ghost"} className="hover:cursor-pointer">
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
        </section>
        <section className="space-x-8">
          <h2>SM</h2>
          <Button
            variant={"default"}
            size={"sm"}
            className="hover:cursor-pointer"
          >
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
          <Button
            variant={"secondary"}
            size={"sm"}
            className="hover:cursor-pointer"
          >
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
          <Button
            variant={"outline"}
            size={"sm"}
            className="hover:cursor-pointer"
          >
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
          <Button
            variant={"ghost"}
            size={"sm"}
            className="hover:cursor-pointer"
          >
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
        </section>
        <section className="space-x-8">
          <h2>XS</h2>
          <Button
            variant={"default"}
            size={"xs"}
            className="hover:cursor-pointer"
          >
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
          <Button
            variant={"secondary"}
            size={"xs"}
            className="hover:cursor-pointer"
          >
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
          <Button
            variant={"outline"}
            size={"xs"}
            className="hover:cursor-pointer"
          >
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
          <Button
            variant={"ghost"}
            size={"xs"}
            className="hover:cursor-pointer"
          >
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
        </section>
        <section className="space-x-8">
          <h2>Disabled XL</h2>
          <Button disabled variant={"default"} size={"xl"}>
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
          <Button disabled variant={"secondary"} size={"xl"}>
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
          <Button disabled variant={"outline"} size={"xl"}>
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
          <Button disabled variant={"ghost"} size={"xl"}>
            <ArrowLeftIcon /> Button <ArrowRightIcon />
          </Button>
        </section>
      </div>
    </div>
  )
}
