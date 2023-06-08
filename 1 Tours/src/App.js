import React, {useState} from "react";
import data from './data'
import Tours from "./components/Tours";

const App = () => {

/* 
  This function removes the tour by filtering out the tour's id. It uses the id to create a new array of tours and then sets the state of tours to that new array
*/
  const [tours, setTours] = useState(data);

  function removeTour(id) {
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

  /* 
    This code is used to reset the tours when you have filtered out all of the tours. A conditional statement that will check if the length of the array of tours is equal to zero. If it is, it will return a div with a button that will reset the tours to the original data set.
  */

  if(tours.length === 0) {
    return (
        <div className="refresh">
          <h2>No Tours Left</h2>
          <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
          </button>
        </div>
    );
  }

  return (
    <div className="App">
      <Tours tours={tours} removeTour={removeTour}></Tours>
    </div>
  )
};

export default App;
