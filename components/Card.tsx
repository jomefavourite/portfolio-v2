import React from "react";

type CardProps = {
  children: React.ReactNode;
  ind: number;
  type?: "box" | "card" | undefined;
};

function Card({ children, ind, type }: CardProps) {
  return (
    <div
      className={`transfrom flex transform flex-col justify-between gap-3 bg-darkCard p-8 duration-300 ease-out hover:opacity-[1!important] group-hover:opacity-50 md:hover:scale-110 md:hover:shadow-2xl ${
        type === "box" && (ind + 1) % 2 === 0 ? "translate-y-6" : ""
      }`}
    >
      {children}
    </div>
  );
}

export default Card;
