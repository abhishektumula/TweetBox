
import { GenerateButton } from "@/components/GenerateButton";
import { Container } from "./Container";
import { Post } from "@/components/Post";
import { Header } from "@/components/header";
import { TitleCard } from "@/components/titleCard";
import { GenerateTweets } from "@/worker/logic";
import { useState } from "react";

export function Home() {
    const [data,setValue] = useState<string[]>(GenerateTweets())
    function handleGenerate() {
      setValue(GenerateTweets())
    }
    return (
        <div className="w-full h-auto flex flex-col justify-start items-center">
            <Container>
                <Header />
                <TitleCard/>
                <GenerateButton onGenerate={handleGenerate}/>
                {data.map((each: string, index: number) => (
                    <Post key={index} tweet={each} />
                ))}
            </Container>
        </div>
    )
}
