import React from "react";
import { CircleHelp } from "lucide-react";
function HowToPlay() {
  return (
    <div className="w-11/12 md:w-2/3 lg:w-2/4 xl:w-1/3 mx-auto space-y-2">
      <div className="flex gap-2 items-center ">
        <CircleHelp size={35} />
        <h2 style={{ fontWeight: 800 }} className="text-xl">
          Como jugar
        </h2>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
        architecto praesentium eum odio, ullam inventore quo. Exercitationem
        temporibus, repellendus explicabo eaque quibusdam aliquam iste eum illum
        quis velit, porro aut.
      </p>
    </div>
  );
}

export default HowToPlay;
