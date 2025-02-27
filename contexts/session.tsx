// import useSessionContextState from 'hooks/useSessionContextState'; // ✅ Import the missing function
import useSessionContextState from 'hooks/useSessionContextState';
import type { FC } from 'react';
import { createContext, useState } from 'react';
import type { SessionContextState } from 'types/components/contexts/session';

const SessionContext = createContext<SessionContextState>({ theme: undefined });

export const SessionProvider: FC = ({ children }) => (
  <SessionContext.Provider value={useSessionContextState()}>
    {children}
  </SessionContext.Provider>
);

export const SessionConsumer = SessionContext.Consumer;
