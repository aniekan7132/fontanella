import React from 'react';

interface PageContainerProps {
  children: React.ReactNode;
}

export function PageContainer({ children }: PageContainerProps) {
  return <div className={'max-w-[1600px] w-full mx-auto p-0'}>{children}</div>;
}

