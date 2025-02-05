import React, { useReducer } from 'react';

function UseReducer() {
  const initialState = {
    count: 0,
  };

  const countReducer = (state, action) => {
    console.log(state, action);
    if (action.type === 'increment') {
      return { count: state.count + action.payload };
    } else {
      return state;
    }
  };

  const [state, dispatch] = useReducer(countReducer, initialState);

  // const [count , setCount] = useState(0)
  return (
    <div className="mt-28">
      <h1 className="text-center font-bold text-3xl underline underline-offset-4">
        USE REDUCER HOOK
      </h1>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: 'increment', payload: 5 })}>
        Increment
      </button>
      <button>Decrement</button>
    </div>
  );
}

export default UseReducer;

//action => { type : 'increment' ,payload : 5}
//dispatch
//reducer => count : 0 action => increment => state.count + 1
// //initialState => const initialState = {
//     username : '' ,
//     password : ''
// }
