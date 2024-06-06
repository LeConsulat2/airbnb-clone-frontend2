// components/Root.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Root() {
  return (
    <div>
      <h1>I'm root</h1>
      <Outlet />
    </div>
  );
}
