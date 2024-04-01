import React, { useState } from 'react'

const ErroBoundary = ({ children }) => {
    const [error, setError] = useState(null);

    if(error){
        return <div>Error: {error.message}</div>
    }

    return children;
};

const ErrorComponent = () => {
  return (
    <div>
      <ErroBoundary>
        <MyComponentWithError />
      </ErroBoundary>
    </div>
  )
}

const MyComponentWithError = () => {
    throw new Error('Something went wrong (check ErrorComponent.js file)');
}

export default ErrorComponent

/**In React, error handling can be implemented in both functional and class components. Here's how you can handle errors in both types of components:

### Functional Components with Error Boundary:

Functional components can't use `componentDidCatch()` directly, but you can use an error boundary component to catch errors in their descendants:

```jsx
import React, { useState } from 'react';

const ErrorBoundary = ({ children }) => {
  const [error, setError] = useState(null);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return children;
};

const MyComponent = () => {
  return (
    <ErrorBoundary>
      <MyComponentWithError />
    </ErrorBoundary>
  );
};

const MyComponentWithError = () => {
  throw new Error('Something went wrong');
};

export default MyComponent;
```

### Class Components with `componentDidCatch()`:

Class components can use `componentDidCatch()` to catch errors in their descendants:

```jsx
import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <div>Error: Something went wrong</div>;
    }

    return this.props.children;
  }
}

class MyComponent extends Component {
  render() {
    return (
      <ErrorBoundary>
        <MyComponentWithError />
      </ErrorBoundary>
    );
  }
}

class MyComponentWithError extends Component {
  render() {
    throw new Error('Something went wrong');
  }
}

export default MyComponent;
```

In both examples, if an error occurs in the `MyComponentWithError` component, it will be caught by the `ErrorBoundary` component and render an error message instead of crashing the entire application. */