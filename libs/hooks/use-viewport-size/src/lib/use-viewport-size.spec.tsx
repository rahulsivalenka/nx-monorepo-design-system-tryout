import { act, renderHook } from '@testing-library/react';
import * as React from 'react';

import useViewportSize from './use-viewport-size';

describe('useViewportSize', () => {
  it('should render successfully', () => {
    const { result } = renderHook(() => useViewportSize());

    expect(result.current.count).toBe(0);

    act(() => {
      result.current.increment();
    });

    expect(result.current.count).toBe(1);
  });
});
