import type { FC, ReactNode } from 'react';
import { createContext, useState } from 'react';
import type { ProcessContextState } from 'types/components/contexts/process';
import processDirectory from 'utils/processDirectory';

const ProcessContext = createContext<ProcessContextState | null>(null);

export const ProcessProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [processes] = useState(processDirectory);

  return (
    <ProcessContext.Provider value={{ processes }}>
      {children}
    </ProcessContext.Provider>
  );
};

export const ProcessConsumer = ProcessContext.Consumer;
