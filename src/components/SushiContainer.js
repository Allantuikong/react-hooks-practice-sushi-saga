import React, { useState } from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({ sushis, eatenSushis, eatSushi }) {
  const [startIndex, setStartIndex] = useState(0);

  const displayedSushis = sushis.slice(startIndex, startIndex + 4);

  const handleMoreSushi = () => {
    setStartIndex((startIndex + 4) % sushis.length);
  };

  return (
    <div className="belt">
      {displayedSushis.map(sushi => (
        <Sushi
          key={sushi.id}
          sushi={sushi}
          isEaten={eatenSushis.includes(sushi)}
          eatSushi={eatSushi}
        />
      ))}
      <MoreButton onClick={handleMoreSushi} />
    </div>
  );
}

export default SushiContainer;

