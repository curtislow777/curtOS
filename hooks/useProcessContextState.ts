import { useState } from 'react';
import type {
  ProcessContextState,
  Processes
} from 'types/components/contexts/process';

const useProcessContextState = (
  startupProcesses: Processes
): ProcessContextState => {
  const [processes] = useState(startupProcesses);
  return { processes };
};

export default useProcessContextState;
