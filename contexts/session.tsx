// import useSessionContextState from 'hooks/useSessionContextState'; // ✅ Import the missing function
import useSessionContextState from 'hooks/useSessionContextState';
import type { FC } from 'react';
import { createContext } from 'react';
import type { SessionContextState } from 'types/components/contexts/session';
import { initialSessionContextState } from 'utils/initialContextStates';

const SessionContext = createContext<SessionContextState>(
  initialSessionContextState
);

export const SessionProvider: FC = ({ children }) => (
  <SessionContext.Provider value={useSessionContextState()}>
    {children}
  </SessionContext.Provider>
);

export const SessionConsumer = SessionContext.Consumer;
