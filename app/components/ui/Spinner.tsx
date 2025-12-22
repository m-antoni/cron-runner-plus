'use client';

import {
  BeatLoader,
  ClipLoader,
  ClockLoader,
  MoonLoader,
  PuffLoader,
  PulseLoader,
} from 'react-spinners';
import { CSSProperties } from 'react';

type SpinnerProps = {
  text?: string;
  color?: string;
  size?: number;
};

export default function Spinner({ text, color = '#ffffff', size }: SpinnerProps) {
  // spinnder style override
  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
    // borderColor: 'red',
  };

  return (
    <>
      <div className="d-flex align-items-center justify-content-end">
        <PuffLoader
          color={color}
          loading={true}
          cssOverride={override}
          size={size}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
        <span className="ml-2">{text}</span>
      </div>
    </>
  );
}
