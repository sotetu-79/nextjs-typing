import React from "react";

interface Props {
  hp: number;
}

function HpBar({ hp }: Props) {
  return (
    <div className="absolute top-2 left-2">
      <div className="w-72 h-8 bg-slate-200 rounded-sm">
        <div
          className="flex items-center h-8 bg-red-600 rounded-sm text-2xl font-bold pl-1"
          style={{ width: `${hp}%` }}
        >
          <p className="overflow-y-hidden text-white">{hp}</p>
        </div>
      </div>
    </div>
  );
}

export default HpBar;