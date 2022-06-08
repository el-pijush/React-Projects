
import { useSelector,useDispatch } from 'react-redux'
import './App.css'
import {incrementCountAction,decrementCountAction} from "./Redux/action"

function App() {
  //const [count, setCount] = useState(0)
  const dispatch=useDispatch();
  const count=useSelector((state)=>state.count);

  return (
    <div className="App">
     <h1>count:{count}</h1>
     <button onClick={()=>{dispatch(incrementCountAction(1))}}>ADD</button>
     <button onClick={()=>{dispatch(decrementCountAction(-1))}}>SUB</button>
    </div>
  )
}

export default App
