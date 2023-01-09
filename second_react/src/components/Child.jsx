import { useDispatch, useSelector } from "react-redux"

const Child = ()=>{
    const counter = useSelector(state=>state);
    const dispatch = useDispatch()
    return(
        <>
        <h1>{counter}</h1>
        <button onClick={()=>dispatch({type:"INCREMENT"})}>INCREASE</button>
        <button onClick={()=>dispatch({type:"DECREMENT"})}>DECREMENT</button>
        <button onClick={()=>dispatch({type:"RESET"})}>Reset</button>
        </>
    )
}
export default Child