
import React from "react"

type props = {
    children: React.ReactNode
}
export function Container({ children }: props) {
    return (
        <div className="h-auto flex flex-col justify-start items-center w-full sm:w-[70%] mx-auto my-0 bg-black borde">
            {children}
        </div>
    )
} 
