import { motion } from "motion/react";
import ReactIcon from "@/assets/changing2.png";
import MsgIcon from "@/assets/bx-message-circle.svg";
import RepeatIcon from "@/assets/bx-repeat-alt.svg";
import HeartIcon from "@/assets/bx-heart.svg";
import ChartIcon from "@/assets/bx-bar-chart-big.svg";
import BookmarkIcon from "@/assets/bx-bookmark.svg";
import CopyIcon from "@/assets/bx-copy.svg"
import ShareIcon from "@/assets/bx-arrow-out-up-square-half.svg";
import HeartIconFill from "@/assets/bxs-heart.svg"
import TickMark from '@/assets/bx-checks.svg'
import { useState } from "react";
import copy from 'copy-to-clipboard';


interface props {
    tweet: string;
}

export function Post({ tweet }: props) {
    const [likeCount, setLikeCount] = useState<number>(14);
    const [copied, setCopied] = useState<boolean>(false);
    const [liked, setLiked] = useState<boolean>(false);

    async function copyToClipBoard() {
        console.log('fucking idiot')
        setCopied(true);
        setTimeout(() => {
            setCopied(false)
        }, 1500)
        // await navigator.clipboard.writeText(tweet);
        copy(tweet);
        // alert("fucking idiot")
    }

    return (
        <motion.div
            initial={{ x: 0, y: 200, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            className="w-full text-sm sm:text-sm md:text-xl lg:text-2xl flex flex-row justify-center text-neutral-100 p-2 md:w-full xl:w-[60%] sm:w-[90%] cursor-pointer">
            <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-black w-full flex flex-row gap-1 justify-start items-start rounded-2xl p-2 sm:p-6 hover:border decoration-gray-500 duration-50 ease-in-out h-fit"
            >
                <img src={ReactIcon} alt="profile" className="h-10 w-10 m-2 rounded-full" />
                <div className="flex flex-col gap-2 justify-start items-start flex-1 leading-normal tracking-normal">
                    < div className="flex flex-row w-full justify-between items-center">
                        <h1 className="text-left">
                            <span className="text-neutral-100 font-semibold text-lg hover:underline decoration-2">
                                abhishek
                            </span>
                            <span className="text-zinc-500 font-light ml-1 text-lg"><a href="https://x.com/axyzk9" target="_blank">@axyzk9</a></span>
                        </h1>
                        <div className="flex flex-row gap-4">
                            <a href={`https://x.com/intent/tweet?text=${tweet}`} target="_blank"><img src={ShareIcon} alt="" className="h-7 w-7" /></a>
                            <motion.button
                                className="p-0 m-0 cursor-copy"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.5 }}
                                onClick={copyToClipBoard}>
                                {copied ? <img src={TickMark} alt="profile" className="h-6 w-6" /> : <img src={CopyIcon} alt="profile" className="h-6 w-6" />}
                            </motion.button>
                        </div>
                    </div>
                    <p className="text-xl sm:text-lg md:text-xl lg:text-2xl font-medium leading-relaxed tracking-normal text-neutral-100">
                        {tweet}
                    </p>
                    <div className="w-full flex justify-between items-center">
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="flex flex-row gap-1 sm:gap-2 justify-center items-center hover:text-blue-400"
                        >
                            <img src={MsgIcon} alt="icon1" className="w-6 h-6" />
                            <h1 className="text-sm sm:text-lg md:text-lg lg:text-2xl">09</h1>
                        </motion.button>
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            className="flex flex-row gap-1 sm:gap-2 justify-center items-center hover:text-blue-400"
                        >
                            <img src={RepeatIcon} alt="icon2" className="w-6 h-6" />
                            <h1 className="text-sm sm:text-lg md:text-lg lg:text-2xl">09</h1>
                        </motion.button>
                        <motion.button
                            onClick={() => {
                                setLiked(!liked);
                                if (!liked) {
                                    setLikeCount((c) => c + 1)
                                } else {

                                    setLikeCount((c) => c - 1);
                                }
                            }}
                            className="flex flex-row gap-1 sm:gap-2 justify-center items-center"
                        >
                            {liked ? <motion.img whileTap={{ scale: 0.5 }} src={HeartIconFill} alt="icon3" className="w-6 h-6" /> : <motion.img whileTap={{ scale: 0.5 }} src={HeartIcon} alt="icon3" className="w-6 h-6" />}
                            <h1 className="text-sm sm:text-lg md:text-xl lg:text-2xl">{likeCount}</h1>
                        </motion.button>
                        <motion.button
                            className="flex flex-row gap-1 sm:gap-2 justify-center items-center hover:text-blue-400"
                        >
                            <img src={ChartIcon} alt="icon4" className="w-6 h-6" />
                            <h1 className="text-sm sm:text-lg md:text-lg lg:text-2xl">09</h1>
                        </motion.button>
                        <motion.button
                            className="flex flex-row gap-1 sm:gap-4 justify-center items-center hover:text-blue-400"
                        >
                            <img src={BookmarkIcon} alt="icon5" className="w-6 h-6" />
                            <img src={ShareIcon} alt="icon6" className="w-6 h-6" />
                        </motion.button>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

