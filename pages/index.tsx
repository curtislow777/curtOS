import WindowManager from 'components/system/WindowManager'; // Default import
import { ProcessProvider } from 'contexts/process'; // Default import
import type { ReactElement } from 'react';

export default function Home(): ReactElement {
  return (
    <ProcessProvider>
      <WindowManager />
    </ProcessProvider>
  );
}
