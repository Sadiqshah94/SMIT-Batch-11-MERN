import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../store/featrues/counterReducers';

const Counter = () => {

    const data = useSelector((state) => state?.counter);
    console.log(data);

    const dispatch = useDispatch()
    const handleIncrment = () => {
        dispatch(increment(1));
    }
     const handleDecrment = () => {
         dispatch(decrement(1));
    }

  return (
    <div>
          <button onClick={handleIncrment}>+</button>
          <p>{data?.counter <=0 ? 0 : data?.counter}</p>
          <button   onClick={handleDecrment}>-</button>
    </div>
  )
}

export default Counter
