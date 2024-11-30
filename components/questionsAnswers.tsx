import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
function QuestionsAnswers() {
  return (
    <div className="mt-3">
      <Accordion
        className="w-10/12 mx-auto md:w-3/5 lg:w-2/4 xl:w-2/6"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger style={{ fontWeight: 800 }}>
            How can I request a hint?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        className="w-10/12 mx-auto md:w-3/5 lg:w-2/4 xl:w-2/6"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger style={{ fontWeight: 800 }}>
            How can I see the leaderboard?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Accordion
        className="w-10/12 mx-auto md:w-3/5 lg:w-2/4 xl:w-2/6"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger style={{ fontWeight: 800 }}>
            What are the game modes?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}

export default QuestionsAnswers;
