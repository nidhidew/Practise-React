import React from 'react'
import { Link } from 'react-router-dom'

const DashBoard = () => {

  const backgroundColor = {
    color: 'white',
    backgroundColor: 'lightgray',
  }
  return (
    <div style={backgroundColor}>
        <h3><Link to="/funcComp">Functional Component</Link></h3>
        <h3><Link to="/classComp">Class Component</Link></h3>
        <h3><Link to="/propComp">Props </Link></h3>
        <h3><Link to="/mountingcycleComp">Component Cycle (Mounting)</Link></h3>
        <h3><Link to="/mountingcycleCompClass">Component Cycle (Mounting in class)</Link></h3>
        <h3><Link to="/updatingCycleComp">Component Cycle (Updating)</Link></h3>
        <h3><Link to="/errorCycleComp">Component Cycle (Error)</Link></h3>
        <h3><Link to="/handleComp">Event Handle</Link></h3>
        <h3><Link to="/handlesyncComp">Synthatic Handle</Link></h3>
        <h3><Link to="/bindingevents">Binding Events</Link></h3>
        <h3><Link to="/ifelsecomp">IF ELSE Condition</Link></h3>
        <h3><Link to="/ternarycomp">Ternary Operator</Link></h3>
        <h3><Link to="/logicaland">Logical && Operator</Link></h3>
        <h3><Link to="/renderinglist">Rendering List</Link></h3>
        <h3><Link to="/formhandling">Form Handling</Link></h3>
        <h3><Link to="/controlled">Controlled component</Link></h3>
        <h3><Link to="/uncontrolled">Uncontrolled Component</Link></h3>
        <h3><Link to="/formvalidation">Form Validation</Link></h3>
        <h3><Link to="/apiaxios">API request(axios)</Link></h3>
        <h3><Link to="/apifetch">API request(fetch)</Link></h3>
        <h3><Link to="/asyncfetch">Asynchronous API request(axios)</Link></h3>
        <h3><Link to="/useStatehook">UseState Hook</Link></h3>
        <h3><Link to="/useEffectHook">UseEffect Hook</Link></h3>
        <h3><Link to="/useContextHook">UseContext Hook</Link></h3>
        <h3><Link to="/useReducerHook">UseReducer Hook</Link></h3>
        <h3><Link to="/useCallbackHook">UseCallback Hook</Link></h3>
        <h3><Link to="/useMemoHook">UseMemo Hook</Link></h3>
        <h3><Link to="/useRefHook">UseRef Hook</Link></h3>
        <h3><Link to="/useLayoutEffectHook">UseLayoutEffect Hook</Link></h3>
        <h3><Link to="/useImperativeHandleHook">UseImperativeHandle Hook</Link></h3>
        <h3><Link to="/useDebugValueHook">UseDebugValue Hook</Link></h3>
        <h1><Link to="/project">Projects</Link></h1>
    </div>
  )
}

export default DashBoard
