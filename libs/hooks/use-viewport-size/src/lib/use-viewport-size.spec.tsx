import { render } from '@testing-library/react';

import UseViewportSize from './use-viewport-size';

describe('UseViewportSize', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UseViewportSize />);
    expect(baseElement).toBeTruthy();
  });
});
