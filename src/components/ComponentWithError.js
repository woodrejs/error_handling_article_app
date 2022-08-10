import React from 'react';

export const ComponentWithError = () => {
  React.useEffect(() => {
    throw new Error('This is a test error thrown by ComponentWithError.');
  }, []);

  return null;
};
