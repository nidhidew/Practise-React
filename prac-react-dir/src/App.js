import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DashBoard from './DashBoard';
import TestFunctional from './prac/TestFunctional';
import ClassFunctional from './prac/ClassFunctional';
import TestProps from './prac/TestProps';
import MountingCycleComponent from './prac/MountingCycleComponent';
import MountingCycleComponentClass from './prac/MountingCycleComponentClass';
import UpdatingCycleComponent from './prac/UpdatingCycleComponent';
import ErrorComponent from './prac/ErrorComponent';
import EventHandlingComponent from './prac/EventHandlingComponent';
import SynthaticHandlingComponent from './prac/SynthaticHandlingComponent';
import BindingEventsComponent from './prac/BindingEventsComponent';
import IfElse from './prac/IfElse';
import Ternary from './prac/Ternary';
import LogicalAnd from './prac/LogicalAnd';
import RenderingLists from './prac/RenderingLists';
import FormHandling from './prac/FormHandling';
import Controlledcomp from './prac/Controlledcomp';
import Uncontrolledcomp from './prac/Uncontrolledcomp';
import Formvalidation from './prac/Formvalidation';
import Api_axios from './prac/Apiaxios';
import Apifetch from './prac/Apifetch';
import AsyncdatafetchAxios from './prac/AsyncdatafetchAxios';
import UseStateHook from './prac/UseStateHook';
import UseEffectHook from './prac/UseEffectHook';
import AppContext from './prac/UseContext';
import UseReducer from './prac/UseReducer';
import UseCallbackHook from './prac/UseCallbackHook';
import UseMemoHook from './prac/UseMemoHook';
import UseRefHook from './prac/UseRefHook';
import UseLayoutEffectHook from './prac/UseLayoutEffectHook';
import ParentUseImperativeHandleHook from './prac/UseImperativeHandleHook';
import UseDebugValueHook from './prac/UseDebugValueHook';
import Projects from './projects/Projects';
import TodoList from './projects/todo-list/TodoList';


function App() {
  return (
       <Router>
        <Routes>
          <Route path="/" element={<DashBoard />} />
          <Route path="/funcComp" element={<TestFunctional />} />
          <Route path="/classComp" element={<ClassFunctional />} />
          <Route path="/propComp" element={<TestProps name="React dev Nidhi"/>} />
          <Route path="/mountingcycleComp" element={<MountingCycleComponent />} />
          <Route path="/mountingcycleCompClass" element={<MountingCycleComponentClass />} />
          <Route path="/updatingCycleComp" element = {<UpdatingCycleComponent />} />
          <Route path="/errorCycleComp" element = {<ErrorComponent />} />
          <Route path="/handleComp" element = {<EventHandlingComponent />} />
          <Route path="/handlesyncComp" element = {<SynthaticHandlingComponent />} />
          <Route path="/bindingevents" element = {<BindingEventsComponent />} />
          <Route path="/ifelsecomp" element = {<IfElse />} />
          <Route path="/ternarycomp" element = {<Ternary />} />
          <Route path="/logicaland" element = {<LogicalAnd />} />
          <Route path="/renderinglist" element = {<RenderingLists />} />
          <Route path="/formhandling" element = {<FormHandling />} />
          <Route path="/controlled" element={<Controlledcomp />} />
          <Route path="/uncontrolled" element={<Uncontrolledcomp />} />
          <Route path="/formvalidation" element={<Formvalidation />} />
          <Route path="/apiaxios" element={<Api_axios/>} />
          <Route path="/apifetch" element={<Apifetch />} />
          <Route path="/asyncfetch" element={<AsyncdatafetchAxios />} />
          <Route path="/useStatehook" element={<UseStateHook />} />
          <Route path="/useEffectHook" element={<UseEffectHook />} />
          <Route path="/useContextHook" element={<AppContext />} />
          <Route path="/useReducerHook" element={<UseReducer />} />
          <Route path="/useCallbackHook" element={<UseCallbackHook />} />
          <Route path="/useMemoHook" element={<UseMemoHook />} />
          <Route path="/useRefHook" element={<UseRefHook />} />
          <Route path="/useLayoutEffectHook" element={<UseLayoutEffectHook />} />
          <Route path="/useImperativeHandleHook" element={<ParentUseImperativeHandleHook />} />
          <Route path="/useDebugValueHook" element={<UseDebugValueHook />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/todoList" element={<TodoList />} />
        </Routes>
       </Router>
  );
}

export default App;
