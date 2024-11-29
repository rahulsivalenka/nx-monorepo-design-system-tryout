// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

import { useViewportSize } from '@nx-monorepo-design-system-tryout/use-viewport-size'

export function App() {
  const size = useViewportSize();

  return (
    <div>
      <h3 style={{
        textAlign: 'center',
      }}>{size.width}px / {size.height}px</h3>
      <NxWelcome title="base-app" />
    </div>
  );
}

export default App;
