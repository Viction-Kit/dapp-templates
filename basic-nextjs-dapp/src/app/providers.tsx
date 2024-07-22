"use client";

import React from 'react';
import { client } from '../utils/viem';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div>
      {children}
    </div>
  );
}