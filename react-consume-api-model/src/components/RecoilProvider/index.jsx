import React from 'react';
import { RecoilRoot } from 'recoil';

export function RecoilProvider({ children }) {
  return (
    <RecoilRoot>
      {children}
    </RecoilRoot>
  );
}
