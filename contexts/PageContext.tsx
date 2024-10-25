// contexts/PageContext.tsx
"use client";

import { createContext, useContext, ReactNode, useState } from 'react';

interface PageContextType {
  pageName: string;
  setPageName: (name: string) => void;
}

const PageContext = createContext<PageContextType | undefined>(undefined);

export function PageProvider({ children }: { children: ReactNode }) {
  const [pageName, setPageName] = useState("");

  return (
    <PageContext.Provider value={{ pageName, setPageName }}>
      {children}
    </PageContext.Provider>
  );
}

export function usePage() {
  const context = useContext(PageContext);
  if (context === undefined) {
    throw new Error('usePage must be used within a PageProvider');
  }
  return context;
}