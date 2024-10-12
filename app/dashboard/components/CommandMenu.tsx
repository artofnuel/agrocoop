import { Command } from "cmdk";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { GrUserWorker } from "react-icons/gr";
import { GiCirclingFish } from "react-icons/gi";
import { MdForest } from "react-icons/md";
import Link from "next/link";

export const CommandMenu = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  const [value, setValue] = useState("");

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 bg-stone-950/50"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-lg shadow-xl border-stone-300 border overflow-hidden w-full max-w-lg mx-auto mt-12"
      >
        <Command.Input
          value={value}
          onValueChange={setValue}
          className="relative border-b border-slate-300 p-3 text-lg w-full placeholder:text-stone-400 focus:outline-none"
          placeholder="What do you need"
        />
        <Command.List className="p-3">
          <Command.Empty>
            No results found for{" "}
            <span className="text-violet-500">{value}</span>
          </Command.Empty>
          <Command.Group
            heading="The Community"
            className="text-sm mb-3 text-stone-400"
          >
            <Link href="#">
              <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-secondary rounded items-center gap-2">
                <GrUserWorker /> Farmers
              </Command.Item>
            </Link>
            <Link href="#">
              <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-secondary rounded items-center gap-2">
                <GiCirclingFish /> Fishery
              </Command.Item>
            </Link>
            <Command.Separator />
            <Link href="#">
              <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-secondary rounded items-center gap-2">
                <MdForest /> Palm Trees
              </Command.Item>
            </Link>
          </Command.Group>
          <Link href="#">
            <Command.Item className="flex cursor-pointer transition-colors p-2 text-sm text-stone-950 hover:bg-stone-200 rounded items-center gap-2">
              Apple
            </Command.Item>
          </Link>
        </Command.List>
      </div>
    </Command.Dialog>
  );
};
