import { useEffect } from "react"
import Home from "./page/Home";
import Counter from "./component/Counter";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./store/featrues/counterReducers";
import Product from "./page/Product";

const App = () => {
  const data = useSelector((state) => state?.counter);
  console.log(data);

  const disptach = useDispatch();

  // const getProduct = () => {
  //   fetch('https://fakestoreapi.com/products/1')
  //           .then(res=>res.json())
  //      .then(json => console.log(json))
  //   .catch((error)=>console.log(error))
  // }
   const getProduct = async() => {
     const response = await fetch('https://fakestoreapi.com/products/1')
     const data = response.json();
     console.log(data);
          
  }



  useEffect(() => {
    getProduct();
  }, []);

  


  // redux-- -> 
  //   store  (bank balance)
  // actions  reducers  (bank wala)
  // dispatch  (ap khud)





















  return (
    <div>
      {/* <h1>Counter app</h1>
      <Counter />
      <h1>App counter</h1>
       <button onClick={()=>disptach(increment(1))}>+</button>
          <p>{data?.counter}</p>
                <button onClick={()=>disptach(decrement(1))}>+</button> */}
      
                <Product/>
    </div>
  )
}

export default App
