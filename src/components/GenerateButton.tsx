
import { motion } from "motion/react";

interface fungusType {
  onGenerate: () => void
}

export function GenerateButton({ onGenerate }: fungusType) {
  return (
    <motion.div
      whileTap={{ scale: 0.95 }}
      className="flex flex-row p-4 w-full justify-center items-center">
      <button
        onClick={onGenerate}
        className="text-sm sm:text-lg font-light italic hover:underline leading-tight md:text-xl xl:text-2xl px-4 py-2 m-2 text-zinc-600 hover:text-black duration-300 ease-in-out rounded-2xl bg-zinc-400 hover:bg-white"
      >Generate</button>
    </motion.div>
  )
}
