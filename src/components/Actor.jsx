import React from "react";

import '../App.css'
export default function Actor({ data }) {
  return (
    <>
      {/* {console.log(data)} */}
      <div className="container">
          {data.map((d,i) => {
            return (
              <div className="card" key={i}>
                <div className="card-image">
                <a href={d?.person?.url} target='_akash'>
                    <img src={d?.person?.image?.medium} />
                </a>
                </div>
                <div className="card-title">
                  <h3>{d?.person?.name}</h3>
                </div>
                
              </div>
            );
          })}
      
      </div>
      
    </>
  );
}