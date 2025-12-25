import * as React from "react"
import { ChevronDownIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Label } from "@/components/ui/label"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export function DatePicker() {
  const [open, setOpen] = React.useState(false)
  const [date, setDate] = React.useState(undefined)

  return (
    <div className="flex flex-col gap-3">
      <Label htmlFor="date" className="px-1">
      </Label>

      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : "Select date"}
            <ChevronDownIcon className="h-4 w-4 opacity-50" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="w-auto overflow-hidden p-0"
          align="start"
        >
          <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate) => {
              setDate(selectedDate)
              setOpen(false)
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  )
}