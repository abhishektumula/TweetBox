import { motion } from "motion/react"
import twitter from "@/assets/bx-twitter.svg";
import GitIcon from "@/assets/bx-github.svg";


export function Header() {
    return (
        <div className="flex flex-row py-2 px-2 m-2 justify-between items-center w-full">
            <a href="https://x.com/axyzk9" target="_balnk"><motion.img whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} src={twitter} alt="" className="h-7 w-7 m-2 sm:m-4" /></a>
            <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-row justify-center items-center gap-1 bg-blue-300 text-white hover:bg-blue-500 px-4 py-1 m-2 rounded-2xl">
                <img src={GitIcon} alt="" className="h-9 w-9" />
                <a href="https://github.com/abhishektumula" target="_blank">
                    <button className="">GitHub</button>
                </a>
            </motion.div>
        </div>
    )
}
