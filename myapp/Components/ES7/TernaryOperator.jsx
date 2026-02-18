import React from 'react'

export default function TernaryOperator() {
  const score = 34;

  return (
    <div
      style={
        score >= 80
          ? { backgroundColor: "darkgreen", color: "white" }
          : score >= 70
          ? { backgroundColor: "green", color: "white" }
          : score >= 40
          ? { backgroundColor: "orange", color: "white" }
          : { backgroundColor: "red", color: "white" }   // <= 40
      }
    >
      {score >= 80
        ? "GRADE A"
        : score >= 70
        ? "GRADE B"
        : score >= 40
        ? "GRADE C"
        : "GRADE F"}
    </div>
  );
}
