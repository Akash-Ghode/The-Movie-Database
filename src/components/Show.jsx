import React from "react";

import '../App.css'
export default function Show({ data }) {
  return (
    <>
      {/* {console.log(data)} */}
      <div className="container">
          {data.map((d) => {
            return (
              <div className="card">
                <div className="card-image">
                <a href={d?.show?.url} target='_akash'>
                    <img src={d?.show?.image?.medium}  />
                  </a>
                </div>
                <div className="card-title">
                  <h3>{d?.show?.name}</h3>
                </div>
                
              </div>
            );
          })}
      
      </div>
      
    </>
  );
}
