import { redirect } from 'next/navigation';
import React from 'react';

// Dummy authentication check (replace with real logic)
const isAuthenticated = (): boolean => {
  // Implement your authentication logic here
  return true; // Change to actual check
};

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (!isAuthenticated()) {
    redirect('/login');
  }

  return <>{children}</>;
}
