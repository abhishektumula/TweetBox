
import { motion } from "motion/react"

export function TitleCard() {
    return (
        <motion.div
            initial={{ x: 0, y: -100, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            className="w-full sm:w-[90%] md:w-[60%] flex flex-row p-2 sm:p-4 sm:m-3 m-4 justify-center items-center text-lg sm:text-xl md:text-5xl text-white font-bold font-bricolage">
            <h1 className="text-center font-medium-500">Boost your
                <span className="text-fuchsia-400 font-semibold"> Twitter </span>
                with random
                <span className="font-semibold text-red-400"> programming </span>
                <span className="font-semibold text-pink-400"> facts</span>,
                <span className="font-semibold text-purple-400"> advice</span>, and
                <span className="font-semibold text-emerald-400"> fun snippets!</span></h1>
        </motion.div>
    )
}
