import React from "react";

export default function StarshipCard({ starships }) {
  return (
    starships &&
    starships.results.map((ele, index) => {
        const { name, manufacturer } = ele
      return <div key={index}className="card">
          <h2>{ name }</h2>
      </div>;
    })
  );
}
