import React, { useRef, useImperativeHandle, forwardRef } from 'react'

const ChildUseImperativeHandleHook = forwardRef((props, ref) => {

    const inputRef = useRef();

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        }
    }));
    return <input ref={inputRef} />
});

const ParentUseImperativeHandleHook = () => {
    const childRef = useRef();

    const focusInput = () => {
        childRef.current.focus();
    };

    const script = `import React, { useRef, useImperativeHandle, forwardRef } from 'react'

    const ChildUseImperativeHandleHook = forwardRef((props, ref) => {
    
        const inputRef = useRef();
    
        useImperativeHandle(ref, () => ({
            focus: () => {
                inputRef.current.focus();
            }
        }));
        return <input ref={inputRef} />
    });
    
    const ParentUseImperativeHandleHook = () => {
        const childRef = useRef();
    
        const focusInput = () => {
            childRef.current.focus();
        };
    
        return (
            <div>
                <ChildUseImperativeHandleHook ref={childRef} />
                <button onClick={focusInput}>Focus Input</button>
            </div>
        )
    }
    
    export default ParentUseImperativeHandleHook
    `

    return (
        <div>
            <h1>UseImperativeHandle hook</h1>
            <p>The useImperativeHandle hook in React allows you to create a ref object that exposes a public API from a functional component to its parent component. This enables a more imperative style of interaction between parent and child components in specific scenarios.</p>
            <code>{script}</code>
            <h3>Output:-</h3>
            <ChildUseImperativeHandleHook ref={childRef} />
            <button onClick={focusInput}>Focus Input</button>
        </div>
    )
}

export default ParentUseImperativeHandleHook
