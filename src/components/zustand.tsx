import React from 'react';
import { useCountStore } from '../../store';

const Zustand = () => {
  const { count, increase, decrease } = useCountStore((state) => state);

  return (
    <div>
      <li>{count}</li>
      <div className="flex gap-2">
        <button onClick={increase} className="rounded-md border border-white p-1.5 font-medium">
          Increase
        </button>
        <button onClick={decrease} className="rounded-md border border-white p-1.5 font-medium">
          Decrease
        </button>
      </div>
    </div>
  );
};

export default Zustand;
