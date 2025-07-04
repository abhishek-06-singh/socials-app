import React, { useState, useEffect, useRef } from "react";

import dinoImg from "./pngwing.com (13).png";
import treeImg from "./tree1.png";

const Game = () => {
  const [isJumping, setIsJumping] = useState(false);
  const [obstacleLeft, setObstacleLeft] = useState(800);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const dinoRef = useRef(null);
  const obstacleRef = useRef(null);

  const handleJump = () => {
    if (!isJumping) {
      setIsJumping(true);
      setTimeout(() => {
        setIsJumping(false);
      }, 500);
    }
  };

  // Move obstacle
  useEffect(() => {
    if (gameOver) return;
    const interval = setInterval(() => {
      setObstacleLeft((prev) => {
        if (prev < -60) {
          setScore((s) => s + 1);
          return 800;
        }
        return prev - 10;
      });
    }, 30);
    return () => clearInterval(interval);
  }, [gameOver]);

  // Accurate collision detection using DOM positions
  useEffect(() => {
    const checkCollision = setInterval(() => {
      if (!dinoRef.current || !obstacleRef.current) return;

      const dinoRect = dinoRef.current.getBoundingClientRect();
      const obstacleRect = obstacleRef.current.getBoundingClientRect();

      const isColliding =
        dinoRect.right > obstacleRect.left &&
        dinoRect.left < obstacleRect.right &&
        dinoRect.bottom > obstacleRect.top;

      if (isColliding) {
        setGameOver(true);
      }
    }, 30);

    return () => clearInterval(checkCollision);
  }, [obstacleLeft, isJumping]);

  const restartGame = () => {
    setGameOver(false);
    setObstacleLeft(800);
    setScore(0);
  };

  return (
    <div
      className="min-h-screen w-full bg-[url('https://i.imgur.com/2wD3VJA.jpg')] bg-cover bg-center flex flex-col items-center justify-center px-4 py-8"
      onClick={handleJump}
    >
      <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-white text-center drop-shadow-md">
        Dino Run 🦖
      </h1>

      <div className="relative w-full max-w-3xl h-48 sm:h-56 md:h-64 bg-black bg-opacity-60 border border-white overflow-hidden rounded-lg shadow-xl">
        <div className="absolute bottom-0 w-full h-1 bg-white"></div>

        <img
          ref={dinoRef}
          src={dinoImg}
          alt="dino"
          className={`absolute left-10 w-16 h-12 sm:w-20 sm:h-16 transition-all duration-150 ${
            isJumping ? "bottom-[100px]" : "bottom-[0px]"
          }`}
        />

        <img
          ref={obstacleRef}
          src={treeImg}
          alt="tree"
          className="absolute bottom-0 w-10 sm:w-12 h-16 sm:h-20"
          style={{ left: `${obstacleLeft}px` }}
        />
      </div>

      <div className="mt-6 text-3xl font-mono text-white bg-black bg-opacity-40 px-6 py-2 rounded shadow-inner border border-white">
        Score: <span className="tracking-widest">{score}</span>
      </div>

      {gameOver && (
        <div className="mt-6 text-center">
          <div className="text-red-500 font-extrabold text-2xl drop-shadow">
            Game Over!
          </div>
          <button
            onClick={restartGame}
            className="mt-3 px-6 py-2 bg-white text-black font-bold rounded hover:bg-gray-200 shadow"
          >
            Restart
          </button>
        </div>
      )}

      <div className="text-center text-white text-sm mt-10">
        <p className="mb-2">Made with love for Sameeksha ❤️</p>
      </div>
    </div>
  );
};

export default Game;
