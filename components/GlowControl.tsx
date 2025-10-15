'use client';

import { useState, useEffect } from 'react';

export default function GlowControl() {
  const [intensity, setIntensity] = useState(100);

  useEffect(() => {
    const value = intensity / 100;

    // CSS 변수 업데이트
    document.documentElement.style.setProperty('--glow-intensity', value.toString());

    console.log('Glow intensity changed to:', value);
  }, [intensity]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Number(e.target.value);
    setIntensity(newValue);
  };

  return (
    <div className="fixed top-8 left-8 z-50 bg-black/80 border-2 border-green-500/30 p-4 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3">
        <label className="text-green-400 font-black text-xs tracking-widest text-center">
          GLOW
        </label>
        <div className="relative w-16 h-32 flex items-center justify-center">
          <input
            type="range"
            min="0"
            max="100"
            value={intensity}
            onChange={handleChange}
            className="glow-slider-vertical"
            style={{
              transform: 'rotate(-90deg)',
              transformOrigin: 'center',
              width: '120px',
              position: 'absolute'
            }}
          />
        </div>
        <span className="text-white font-black text-xs">
          {intensity}%
        </span>
      </div>
    </div>
  );
}
