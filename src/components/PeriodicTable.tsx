import React from "react";

import AtomPillar from "./AtomPillar";
import atomData from "../atomData";

interface PeriodicTableProps {
  placement: number[][];
  position: [number, number, number];
  heightData: (number | null)[];
}

export default function PeriodicTable({
  placement,
  position,
  heightData,
}: PeriodicTableProps) {
  const pillars = [];
  const maxHeight = Math.max(...heightData.map((v) => v || 0));

  for (let i = 0; i < placement.length; i++) {
    for (let j = 0; j < placement[i].length; j++) {
      const number = placement[i][j];
      if (number !== 0) {
        const height = heightData[number - 1] || 0;
        const realHeight = (height / maxHeight) * 4;
        const color = heightData[number - 1] !== null
          ? "hsl(" + (height / maxHeight) * 250 + ", 66%, 56%)"
          : "#7a7a7a";

        pillars.push(
          <AtomPillar
            key={number}
            atom={atomData[number - 1]}
            position={[position[0] + j, position[1], position[2] + i]}
            height={realHeight}
            color={color}
          />
        );
      }
    }
  }

  return <group>{pillars}</group>;
}