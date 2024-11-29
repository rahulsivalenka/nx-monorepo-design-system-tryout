// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import NxWelcome from './nx-welcome';

import { Button } from '@nx-monorepo-design-system-tryout/button'
import { useViewportSize } from '@nx-monorepo-design-system-tryout/use-viewport-size'

export function App() {
  const size = useViewportSize();

  return (
    <div>
      <div style={{
        textAlign: 'center',
      }}>
        <Button label={`${size.width}px / ${size.height}px`} />
      </div>
      
      <NxWelcome title="base-app" />
    </div>
  );
}

export default App;
