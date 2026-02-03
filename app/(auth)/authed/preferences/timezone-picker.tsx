import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Check } from "lucide-react"
import { useState } from "react"

const TimeZoneItem = ({ label }: { label: string }) => {
  const match = label.match(/\((.*?)\)\s*(.*)/)
  const gmt = match ? match[1] : "GMT"
  const location = match ? match[2] : label

  return (
    <div className="flex flex-col items-start py-1">
      <span className="text-sm font-semibold text-primary leading-tight">
        {gmt}
      </span>
      <span className="text-xs text-secondary font-medium">{location}</span>
    </div>
  )
}

type TimeZone = {
  value: string
  label: string
}

type TimeZonePickerProps = {
  timeZones: TimeZone[]
}

export function TimeZonePicker({ timeZones = [] }: TimeZonePickerProps) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className="w-full justify-between h-11 border-slate-200 bg-slate-50/30 rounded-md hover:bg-slate-50/50 text-primary font-medium"
        >
          {value ? (
            timeZones.find((tz) => tz.value === value)?.label
          ) : (
            <p className="text-[#CBD5E1] font-medium text-base">
              Search Your GMT
            </p>
          )}
          {/* <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" /> */}
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-(--radix-popover-trigger-width) p-0 shadow-2xl border-slate-200 rounded-lg overflow-hidden">
        <Command className="rounded-none">
          <div className="flex items-center border-b border-slate-100 p-3 relative">
            <CommandInput
              placeholder="Search Your GMT"
              className="h-12 border-none focus:ring-0 text-sm placeholder:text-slate-400"
            />
          </div>

          <CommandList className="max-h-80 scrollbar-thin scrollbar-thumb-slate-200">
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup className="p-0">
              {timeZones.map((tz) => (
                <CommandItem
                  key={tz.value}
                  value={tz.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                  }}
                  className="px-4 py-3 border-b border-slate-50 last:border-none cursor-pointer data-[selected=true]:bg-[#FFF1F2] data-[selected=true]:text-accent-foreground"
                >
                  <TimeZoneItem label={tz.label} />
                  {value === tz.value && (
                    <Check className="ml-auto h-4 w-4 text-rose-600" />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
