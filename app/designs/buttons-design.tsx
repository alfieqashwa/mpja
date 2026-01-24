import { Button } from "@/components/ui/button";

export function ButtonsDesign() {
  return (
    <section>
      <h1 className="text-2xl">Buttons Design</h1>
      <div className="mt-8 flex gap-8">
        <Button variant={"default"}>Button</Button>
        <Button variant={"secondary"}>Button</Button>
        <Button variant={"outline"}>Button</Button>
        <Button variant={"ghost"}>Button</Button>
      </div>
    </section>
  );
}
