import React, { useLayoutEffect, useState } from 'react'

const UseLayoutEffectHook = () => {
    const [width, setWidth] = useState(0);

    useLayoutEffect(() => {
        const handleResize = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const script = `import React, { useLayoutEffect, useState } from 'react'

    const UseLayoutEffectHook = () => {
        const [width, setWidth] = useState(0);
    
        useLayoutEffect(() => {
            const handleResize = () => {
                setWidth(window.innerWidth);
            };
    
            window.addEventListener('resize', handleResize);
            handleResize();
    
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }, []);
      return (
        <div>
          Window width: {width}
        </div>
      )
    }
    
    export default UseLayoutEffectHook
    `
  return (
    <div>
      <h1>UseLayoutEffect hook</h1>
      <p>The useLayoutEffect hook in React allows you to perform side effects in functional components that are similar to the componentDidMount and componentDidUpdate lifecycle methods in class components. However, there's a crucial difference: useLayoutEffect runs synchronously after DOM mutations are complete, before the browser has a chance to repaint the screen.</p>
      <code>{script}</code>
      <h3>Output</h3>
      Window width: {width}

    </div>
  )
}

export default UseLayoutEffectHook
