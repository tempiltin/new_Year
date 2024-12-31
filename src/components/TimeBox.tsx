import React from 'react';

interface TimeBoxProps {
  value: number;
  label: string;
}

export function TimeBox({ value, label }: TimeBoxProps) {
  return (
    <div className="bg-black bg-opacity-70 rounded-lg p-6">
      <div className="text-5xl font-bold mb-2">{value}</div>
      <div className="text-xl">{label}</div>
    </div>
  );
}