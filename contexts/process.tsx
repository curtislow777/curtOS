import useProcessContextState from 'hooks/useProcessContextState'; // ✅ Import the missing function
import type { FC, ReactNode } from 'react';
import { createContext, useState } from 'react';
import type { ProcessContextState } from 'types/components/contexts/process';
import { initialProcessContextState } from 'utils/initialContextStates';
import processDirectory from 'utils/processDirectory';

const ProcessContext = createContext<ProcessContextState>(
  initialProcessContextState
);

export const ProcessProvider: FC = ({ children }) => (
  <ProcessContext.Provider value={useProcessContextState(processDirectory)}>
    {children}
  </ProcessContext.Provider>
);

export const ProcessConsumer = ProcessContext.Consumer;
