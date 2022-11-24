import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetAsync } from '../redux/greeting_reducer';

const Greeting = () => {
  const greeting = useSelector((state) => state.greetings);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreetAsync());
  }, [dispatch]);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
