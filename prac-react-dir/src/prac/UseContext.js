import React, { useContext } from 'react'

const MyContext = React.createContext();

const MyProvider = ({ children }) => {
    const sharedValue = 'Hello from context';
    return <MyContext.Provider value={sharedValue}>{children}</MyContext.Provider>;
}

const UseContext = () => {
    const contextValue = useContext(MyContext);
  return (
    <div>
        <h1>UseContext hooks</h1>
        <p>useContext is used to consume values from a React context.It allows you to access the value provided by a Context.Provider higher up in the component tree without having to pass props down manually through every level of the tree.
useContext takes a context object (created by React.createContext) as an argument and returns the current context value.</p>
        <code>{script}</code>
        <h3>Output:-</h3>
      {contextValue}
    </div>
  )
}

const script = `import React, { useContext } from 'react'

const MyContext = React.createContext();

const MyProvider = ({ children }) => {
    const sharedValue = 'Hello from context';
    return <MyContext.Provider value={sharedValue}>{children}</MyContext.Provider>;
}

const UseContext = () => {
    const contextValue = useContext(MyContext);
  return (
    <div>
      {contextValue}
    </div>
  )
}

const AppContext = () => {
    return(
        <MyProvider>
            <UseContext />
        </MyProvider>
    )
}

export default AppContext
`
const backgroundColor = {
  color: 'black',
  backgroundColor: 'lightgray',
}
const AppContext = () => {
    return(
        <MyProvider style={backgroundColor}>
            <UseContext />
        </MyProvider>
    )
}

export default AppContext
