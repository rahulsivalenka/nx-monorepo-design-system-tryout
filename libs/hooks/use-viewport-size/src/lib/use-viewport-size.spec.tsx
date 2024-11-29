import { renderHook } from '@testing-library/react';
import * as React from 'react';

import { useViewportSize } from './use-viewport-size';

describe('useViewportSize', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useViewportSize());

    expect(result.current.height).toBeDefined();
    expect(result.current.width).toBeDefined();
  });
});
