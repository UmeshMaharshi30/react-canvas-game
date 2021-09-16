import React, { useEffect, useState } from "react";
import { CELL_SIZE } from "../config/constants";
import Cell from "./Cell";

const MineSweeper = ({ m, n }) => {
  const mineProbaility = 0.2;
  const [board, setBoard] = useState(null);
  const [totalMoves, settotalMoves] = useState(0);

  useEffect(() => {
    let tempBoard = [];
    let minesCount = 0;
    for (let i = 0; i < m; i++) {
      let tempRow = [];
      for (let j = 0; j < n; j++) {
        if (Math.random() <= mineProbaility) {
          tempRow.push({
            x: i * CELL_SIZE,
            y: j * CELL_SIZE,
            value: "m",
            masked: true,
          });
          minesCount++;
        } else
          tempRow.push({
            x: i * CELL_SIZE,
            y: j * CELL_SIZE,
            value: ".",
            masked: true,
          });
      }
      tempBoard.push(tempRow);
    }
    setBoard(tempBoard);
    settotalMoves(totalMoves - minesCount);
  }, []);

  const updateBoard = (x, y) => {
    const tempBoard = [...board];
    tempBoard[x][y].masked = false;
    setBoard(tempBoard);
  };

  return (
    <g
      style={{
        transform: `translate(${
          (window.innerWidth - m * CELL_SIZE) / 2
        }px, 100px)`,
        width: m * CELL_SIZE,
        height: n * CELL_SIZE,
      }}
    >
      {board?.map((row, i) => {
        return (
          <g key={i}>
            {row.map((cell, j) => (
              <Cell
                onClick={() => updateBoard(i, j)}
                key={`${i}-${j}`}
                {...cell}
              ></Cell>
            ))}
          </g>
        );
      })}
    </g>
  );
};

export default MineSweeper;
