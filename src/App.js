import React, { useState, useEffect } from "react";
import StarshipCard from "./components/StarshipCard";
import Nav from "./components/Nav";

import "./App.css";

function App() {
  const [starships, setStarships] = useState(null);

const getStarships= async() => {
  const response = await fetch('https://swapi.dev/api/starships/')
  const data = await response.json()
  setStarships(data)
}

  useEffect(() => {
    getStarships()
  }, [])


// console.log(starships.results)

// starships.results.map() 

    // const allStarships = starships.results.map((ele, index) => {
    //   return <StarshipCard name={ele.name} />
    // })


  if (starships) {
  return (
    <div className="App">
      <Nav />
      <div className="container">
        <StarshipCard starships={starships} />
      </div>
    </div>
  );
  }
}

export default App;
