import HowToPlay from "@/components/howToPlay";
import { Button } from "@/components/ui/button";
import GameMode from "@/components/gameMode";
import TitleWithOptions from "@/components/titleWithOptions";
import QuestionsAnswers from "@/components/questionsAnswers";

export default function Home() {
  return (
    <div>
      <TitleWithOptions />
      <div className="my-4 space-y-4">
        <div className="flex justify-center">
          <Button className="text-2xl w-3/5 md:w-4/12 xl:w-2/12">Play</Button>
        </div>
        <GameMode />
      </div>
      <HowToPlay />
      <QuestionsAnswers />
    </div>
  );
}
