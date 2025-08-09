import { useState } from 'react';
import Tube from './Tube';
import { createInitialState, canPour, pour, checkWin } from '../utils/levels';

export default function GameBoard() {
  const [tubes, setTubes] = useState(createInitialState());
  const [selected, setSelected] = useState<number | null>(null);

  const handleTubeClick = (index: number) => {
    if (selected === null) {
      setSelected(index);
    } else if (selected === index) {
      setSelected(null);
    } else {
      const from = tubes[selected];
      const to = tubes[index];
      if (canPour(from, to)) {
        const [newFrom, newTo] = pour(from, to);
        const newTubes = [...tubes];
        newTubes[selected] = newFrom;
        newTubes[index] = newTo;
        setTubes(newTubes);
        if (checkWin(newTubes)) {
          alert("🎉 You Win!");
        }
      }
      setSelected(null);
    }
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
      {tubes.map((tube, i) => (
        <Tube key={i} tube={tube} index={i} onClick={handleTubeClick} />
      ))}
    </div>
  );
}