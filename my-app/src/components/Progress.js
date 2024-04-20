import React from "react";

const Progress = ({ percentage }) => {
  // Calculate the new width by adding 30 pixels to the percentage
  const newWidth = `calc(${percentage}% + 30px)`;

  return (
    <div className="w-full rounded-full overflow-hidden">
      <div
        className="h-2 text-xs leading-none text-center text-white transition-all duration-500 ease-in-out"
        style={{
          width: newWidth, // Use the calculated width
          background: "linear-gradient(to right, #ff7eb6, #6937ff)",
          borderRadius: "9999px", // Set border-radius to a large value for fully rounded corners
        }}
      >
        {percentage}%
      </div>
    </div>
  );
};

export default Progress;
