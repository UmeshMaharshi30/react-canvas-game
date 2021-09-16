import React from "react";
import { CELL_SIZE } from "../config/constants";

const Cell = ({ x, y, masked, value, onClick, ...rest }) => {
  return (
    <g
      {...rest}
      onClick={masked ? onClick : null}
      style={{ transform: `translate(${x}px, ${y}px)` }}
    >
      <rect
        width={CELL_SIZE}
        height={CELL_SIZE}
        fill={"grey"}
        stroke="white"
      ></rect>
      {masked && (
        <rect
          x={0.05 * CELL_SIZE}
          y={0.05 * CELL_SIZE}
          width={CELL_SIZE * 0.9}
          height={CELL_SIZE * 0.9}
          className={"mask"}
        ></rect>
      )}
      {!masked && (
        <text
          x={CELL_SIZE / 2}
          y={CELL_SIZE / 2}
          alignmentBaseline="middle"
          fontSize={CELL_SIZE / 2}
          strokeWidth="0"
          stroke="#000"
          dominantbaselinee="middle"
          textAnchor="middle"
          fill="white"
        >
          {value}
        </text>
      )}
    </g>
  );
};

export default Cell;
