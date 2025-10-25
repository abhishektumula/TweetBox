
import { tweets } from "@/database/tweets";

export function GenerateTweets(): string[] {
  const data: string[] = [];
  const visited: number[] = [];
  for (let i = 1; i <=5; i++) {
    let radom = Math.floor(Math.random() * tweets.length);
    while ((visited.includes(radom))) {
      radom = Math.floor(Math.random() * tweets.length);
    }
    data.push(tweets[radom]);
    visited.push(radom);
  }

  return data;
}
