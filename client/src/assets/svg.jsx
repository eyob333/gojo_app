import React from 'react';

const UnicornSVG = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width="200"
    height="200"
  >
    <ellipse cx="100" cy="130" rx="50" ry="30" fill="#f4c2c2" />
    <circle cx="140" cy="100" r="30" fill="#f4c2c2" />
    <circle cx="150" cy="90" r="5" fill="#000" />
    <polygon points="140,60 130,100 150,100" fill="#ffcccb" />
    <path
      d="M 120 80 Q 110 70, 100 80 T 80 100"
      fill="none"
      stroke="#ff69b4"
      stroke-width="5"
    />
    <rect x="70" y="150" width="10" height="40" fill="#f4c2c2" />
    <rect x="120" y="150" width="10" height="40" fill="#f4c2c2" />
    <path
      d="M 50 140 Q 30 130, 50 120 Q 70 130, 50 140"
      fill="#ff69b4"
    />
  </svg>
);

export default UnicornSVG;