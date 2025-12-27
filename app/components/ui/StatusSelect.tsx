'use client';

import React, { useState } from 'react';
import Select, { StylesConfig, SingleValue } from 'react-select';

// 1. Define the interface for your options
interface StatusOptions {
  value: string;
  label: string;
}

export default function StatusSelect() {
  // 2. Type the state: it can be a StatusOptions or null
  const [status, setStatus] = useState<StatusOptions | null>(null);

  const options: StatusOptions[] = [
    { value: 'all', label: 'All' },
    { value: 'success', label: 'Success' },
    { value: 'error', label: 'Error' },
    { value: 'failed', label: 'Failed' },
  ];

  // Type the custom styles using StylesConfig
  const customStyles: StylesConfig<StatusOptions, false> = {
    control: (base, state) => ({
      ...base,
      background: '#2d2d2d',
      borderColor: state.isFocused ? '#666' : '#444',
      color: 'white',
      boxShadow: 'none',
      '&:hover': {
        borderColor: '#888',
      },
    }),
    menu: (base) => ({
      ...base,
      background: '#2d2d2d',
      borderRadius: '4px',
      zIndex: 999,
    }),
    option: (base, { isFocused, isSelected }) => ({
      ...base,
      backgroundColor: isSelected ? '#666' : isFocused ? '#444' : '#2d2d2d',
      color: 'white',
      cursor: 'pointer',
      '&:active': {
        backgroundColor: '#555',
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: 'white',
    }),
    input: (base) => ({
      ...base,
      color: 'white',
    }),
    placeholder: (base) => ({
      ...base,
      color: '#aaa',
    }),
    dropdownIndicator: (base) => ({
      ...base,
      color: 'white',
      '&:hover': { color: '#ccc' },
    }),
    indicatorSeparator: (base) => ({
      ...base,
      backgroundColor: '#555',
    }),
  };

  // Properly type the onChange handler
  const handleChange = (newValue: SingleValue<StatusOptions>) => {
    setStatus(newValue);
  };

  return (
    <div style={{ width: '150px' }}>
      <Select
        options={options}
        value={status}
        onChange={handleChange}
        styles={customStyles}
        placeholder="Status"
        instanceId="flavor-select" // Good for SSR/Next.js hydration
      />
    </div>
  );
}
