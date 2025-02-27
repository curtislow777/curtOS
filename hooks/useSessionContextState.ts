import themes from 'styles/themes.json';
import type { SessionContextState } from 'types/components/contexts/session';

const useSessionContextState = (): SessionContextState => ({
  theme: undefined
});

export default useSessionContextState;
