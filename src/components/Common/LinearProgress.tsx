import React, { FC } from 'react';

interface IProps {
  value: number;
  label?: string;
}

const LinearProgress: FC<IProps> = ({ value, label }) => {
  return (
    <div className="">
      {label && <p className="mb-2 text-13">{label}</p>}
      <div className="relative w-full h-[10px] bg-[#e9ecef]">
        <div
          className="absolute left-0 top-0 bottom-0 h-full bg-primary"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
};

export default LinearProgress;
