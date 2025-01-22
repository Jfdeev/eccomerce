"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { cn } from "@/lib/utils"
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
import { useEffect, useState } from "react"
import api from "../../api/api.js";

export default function ComboboxDemo({ onCategoryChange }) {
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("") 
  const [categories, setCategories] = useState([])


  const loadCategories = async () => {
    try {
      const response = await api.get('/categories');
      console.log(response.data);
      setCategories(response.data.content);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    loadCategories();
  }, [])

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? categories.find((category) => category.name === value)?.name
            : "Selecione Categoria"}
          <ChevronsUpDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Pesquise pela Categoria" className="h-9" />
          <CommandList>
            <CommandEmpty>Nenhuma categoria encontrada</CommandEmpty>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category.id}
                  value={category.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue)
                    setOpen(false)
                    onCategoryChange(currentValue)
                  }}
                >
                  {category.name} 
                  <Check
                    className={cn(
                      "ml-auto",
                      value === category.name ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}