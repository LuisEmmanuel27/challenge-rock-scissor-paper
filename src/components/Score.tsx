import { useState } from "preact/hooks"

const Score = () => {
  const [score, setScore] = useState<Number>(0)

  return (
    <div className="bg-white flex items-center justify-center flex-col gap-1 py-6 px-12 rounded-2xl">
      <span className="text-Neutral-ScoreText tracking-widest font-bold">SCORE</span>
      <span className="text-Neutral-DarkText text-5xl font-bold">{score}</span>
    </div>
  )
}

export default Score