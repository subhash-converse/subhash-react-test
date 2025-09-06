import React from 'react'
import { useCountStore } from '../../store';

const Zustand = () => {
      const { count,increase,decrease } = useCountStore((state) => state);

    return (
        <div>
            <li>{count}</li>
            <div className="flex gap-2">
                <button onClick={increase} className="border border-white p-1.5 font-medium rounded-md">
                    Increase
                </button>
                <button onClick={decrease} className="border border-white p-1.5 font-medium rounded-md">
                    Decrease
                </button>
            </div>
        </div>
    )
}

export default Zustand
