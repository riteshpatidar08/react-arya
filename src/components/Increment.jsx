import { useSelector ,useDispatch } from "react-redux";
import { increment } from "../redux/counterSlice";
//REDUX TOOLKIT AND REACT REDUX
// WHAT IS STATE ?
//NOTE global state management library

//NOTE installation steps

//NOTE  we have to install the two libraries
//NOTE - npm install @reduxjs/toolkit
//NOTE - npm install react-redux

function Counter() {
const dispatch = useDispatch()
 const count =  useSelector((state)=>{
 return state.count.count
  })
  const handleClick = () => {
    dispatch(increment())
  }
  return (
    <>
      <p className="text-4xl">{count}</p>
      <button onClick={handleClick} className="bg-indigo-500 px-6 py-2 text-white">Increment</button>
    </>
  );
}

export default Counter;

//NoTe KEYWORDS RELATED TO THE REDUX TOOLKIT

//NOTE - INITIAL STATE => COUNT : 0

//NOTE - REDUCER FUNCTION => WHICH TAKES THE PREVIOUS STATE VALUE AND RETURN UPDATED VALUE BASED ON WHAT WE ARE DOING LIKE INCREMENT  AND DECREMENT THE COUNT VARIABLE => TAKES 0 => RETURN 1 IF INCREMENT => -1 IF DECREMENT

//NOTE - DISPATCH FUNCTION => EQUIVALENT TO A SETTER FUNCTION IN THE USESTATE.

//NOTE  IF WE INCREMENT THE COUNT LIKE SETCOUNT(COUNT+1) WHEN WE CLICK THE INCREMENT BUTTON  // IN TOOLKIT WE  USE DISPATCH(INCREMENT()) => WHICH INCREMENT THE COUNT.

//todo "INCREMENT() HERE IS A REDUCER FUNCTION"

//Slices => INCREMENT , DECREMENT

//STORE => GLOBAL OBJECT {
//   INCLUDE ALL THE REDUCERS FUNCTIONS OF OUr APPLICATION
// }

//TODO TO connect store with our application we use PROVIDER COMPONENT AND PASS THE STORE WE CREATE AS A PROP


//consuming the values defined in the initialState and updating those values

//useSelector 