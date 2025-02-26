import { ProcessConsumer } from 'contexts/process';
import type { FC } from 'react';

const WindowManager: FC = () => (
  <ProcessConsumer>
    {(context) =>
      context
        ? Object.entries(context.processes).map(([id, { Component }]) => (
            <Component key={id} />
          ))
        : null
    }
  </ProcessConsumer>
);

export default WindowManager;
