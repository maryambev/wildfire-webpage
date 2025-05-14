"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface GridProps {
  type: string;
  windSpeed: number;
  windDirection: string;
  reset: boolean;
}

export function Grid(props: GridProps) {
  const size = 20;
  const pixels = 200;

  const tempGrid: number[][] = new Array(size)
    .fill(0)
    .map(() => new Array(size).fill(0));

  const [grid, setGrid] = useState(tempGrid);
  let global_cells: number[][] = [];
  const [probabilty, setProbability] = useState<number>(0);

  const [northWind, setNorthWind] = useState<number>(0);
  const [southWind, setSouthWind] = useState<number>(0);
  const [eastWind, setEastWind] = useState<number>(0);
  const [westWind, setWestWind] = useState<number>(0);

  useEffect(() => {
    setGrid(tempGrid);
    global_cells = [];
  }, [props.reset]);


  useEffect(() => {
    // if (props.type === "Forest") {
    //     setProbability(0.25);
    // }
    // else if (props.type == "Urbanized Area"){
    //     setProbability(0.35);
    // }
    // else{
    //     setProbability(0.40);
    // }

    switch (props.type) {
      case "Forest":
        setProbability(0.25);
        break;
      case "Urbanized Area":
        setProbability(0.35);
        break;
      case "Grassland":
        setProbability(0.4);
        break;
    }

    switch (props.windDirection) {
      case "North":
        setNorthWind(props.windSpeed * 0.01);
        setSouthWind(0)
        setEastWind(0)
        setWestWind(0)
        break;
      case "South":
        setSouthWind(props.windSpeed * 0.01);
        setNorthWind(0)
        setEastWind(0)
        setWestWind(0)
        break;
      case "East":
        setEastWind(props.windSpeed * 0.01);
        setNorthWind(0)
        setSouthWind(0)
        setWestWind(0)
        break;
      case "West":
        setWestWind(props.windSpeed * 0.01);
        setNorthWind(0)
        setSouthWind(0)
        setEastWind(0)
        break;
    }
    
  }, [props.windSpeed, props.type, props.windDirection]);

  async function setGridValue(
    row: number,
    col: number,
    value: number,
    prob: number
  ) {
    let newGrid = [...grid];
    newGrid[row][col] = value;
    let cell = [[row, col]];
    global_cells = cell;

    let counter = 0;

    async function processNextIteration() {
      counter++;
      console.log(`Iteration ${counter}: ${global_cells.length} cells`);

      let newCells: number[][] = [];
      for (let i = 0; i < global_cells.length; i++) {
        let tempCells = findNextCells(
          newGrid,
          global_cells[i][0],
          global_cells[i][1],
          value,
          prob
        );
        tempCells.forEach((cell) => {
          newCells.push(cell);
          newGrid[cell[0]][cell[1]] = 1;
        });
      }

      global_cells = newCells;

      for (let i = 0; i < newCells.length; i++) {
        console.log(`Cell ${i + 1}: [${newCells[i][0]}, ${newCells[i][1]}]`);
      }

      setGrid((prevGrid) => [...prevGrid]);

      if (global_cells.length > 0) {
        // Wait for a delay before processing the next iteration
        await new Promise((resolve) => setTimeout(resolve, 1000));
        processNextIteration();
      }
    }
    // Start the recursive process
    await processNextIteration();
  }

  function getRandomBoolean(probability: number) {
    if (probability < 0 || probability > 1) {
      throw new Error("Probability must be between 0 and 1");
    }
    const randomValue = Math.random();
    return randomValue < probability;
  }

  // function to increase value of grid elements around the given row and col by 1
  function findNextCells(
    grid: number[][],
    row: number,
    col: number,
    newVal: number,
    prob: number
  ) {
    let newGrid = [...grid];

    let counter = 0;

    let cells: number[][] = [];

    //direction: north 
    if (row - 1 >= 0) {
      if (newGrid[row - 1][col] === 0)
        if (getRandomBoolean(prob + northWind - southWind) === true) {
          newGrid[row - 1][col] = newVal;
          console.log("North prob " + (prob + northWind - southWind));
          counter++;
          cells.push([row - 1, col]);
        }
    }
    // direction: south
    if (row + 1 < size) {
      if (newGrid[row + 1][col] === 0)
        if (getRandomBoolean(prob + southWind - northWind) === true) {
          console.log("South prob " + (prob + southWind - northWind));
          newGrid[row + 1][col] = newVal;
          counter++;
          cells.push([row + 1, col]);
        }
    }

    // direction: east
    if (col - 1 >= 0) {
      if (newGrid[row][col - 1] === 0)
        if (getRandomBoolean(prob + eastWind - westWind) === true) {
          newGrid[row][col - 1] = newVal;
          counter++;
          cells.push([row, col - 1]);
        }
    }

    // direction: west
    if (col + 1 < size) {
      if (newGrid[row][col + 1] === 0)
        if (getRandomBoolean(prob + westWind - eastWind) === true) {
          newGrid[row][col + 1] = newVal;
          counter++;
          cells.push([row, col + 1]);
        }
    }

    // direction: north-east
    if (row - 1 >= 0 && col - 1 >= 0) {
      if (newGrid[row - 1][col - 1] === 0)
        if (getRandomBoolean(prob + (northWind / 2) + (eastWind / 2) - (southWind / 2) - (westWind / 2)) === true) {
          newGrid[row - 1][col - 1] = newVal;
          counter++;
          cells.push([row - 1, col - 1]);
        }
    }

    // direction: north-west
    if (row - 1 >= 0 && col + 1 < size) {
      if (newGrid[row - 1][col + 1] === 0)
        if (getRandomBoolean(prob + (northWind / 2) + (westWind / 2) - (southWind / 2) - (eastWind / 2)) === true) {
          newGrid[row - 1][col + 1] = newVal;
          counter++;
          cells.push([row - 1, col + 1]);
        }
    }

    // direction: south-east
    if (row + 1 < size && col - 1 >= 0) {
      if (newGrid[row + 1][col - 1] === 0)
        if (getRandomBoolean(prob + (southWind / 2) + (eastWind / 2) - (northWind / 2) - (westWind / 2)) === true) {
          newGrid[row + 1][col - 1] = newVal;
          counter++;
          cells.push([row + 1, col - 1]);
        }
    }

    // direction: south-west
    if (row + 1 < size && col + 1 < size)
      if (getRandomBoolean(prob + (southWind / 2) + (westWind / 2) - (northWind / 2) - (eastWind / 2)) === true) {
        if (newGrid[row + 1][col + 1] === 0) {
          newGrid[row + 1][col + 1] = newVal;
          counter++;
          cells.push([row + 1, col + 1]);
        }
      }

    return cells;
  }

  return (
    <section className="p-4">
      {grid.map((row, i) => {
        return (
          <div key={i} className="flex flex-row m-0 p-0">
            {row.map((value, k) => {
              return (
                <div
                  key={k}
                  className={`text-sm cursor-pointer min-h-[${pixels}px] min-w-[${pixels}px] min-w-[${pixels}px] m-w-[${pixels}px]`}
                  onClick={() => setGridValue(i, k, 1, probabilty || 0)}
                >
                  {/* <p className="flex flex-col text-xs">
                    <span>row {i} </span>
                    <span>col {k} </span>
                  </p> */}
                  {value === 0 ? (
                    <Image
                      src="/wood/wood.svg"
                      width={pixels}
                      height={pixels}
                      alt={""}
                    />
                  ) : value === 1 ? (
                    <Image
                      src="/wood/wood_fire.svg"
                      width={pixels}
                      height={pixels}
                      alt={""}
                    />
                  ) : null}
                </div>
              );
            })}
          </div>
        );
      })}
    </section>
  );
}
