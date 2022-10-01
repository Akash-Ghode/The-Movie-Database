import React,{useState, useEffect} from "react";
import '../App.css'

export default function Def() {

  const [data,setData] = useState([])

  useEffect(() =>{

    fetch(`https://api.tvmaze.com/shows?page=1`)
    .then((result) => {
      result.json()
      .then((response) => {
        setData(response);
      });
    }
    );
    // console.log("again")
  },[])

  return (
    <>
      <div className="container">
          {data.map((d,index) => {
            return (
              <div className="card" key={index}>
                <div className="card-image">
                <a href={d?.url} target='_akash'>
                    <img src={d?.image?.medium}  />
                  </a>
                </div>
                <div className="card-title">
                  <h3>{d?.name}</h3>
                </div>
                
              </div>
            );
          })}
      
      </div>
      
    </>
  );
}
