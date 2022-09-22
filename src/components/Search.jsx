import React, {useEffect, useState} from 'react'

import '../App.css'
import Show from './Show'
import Actor from './Actor'

const Search = () => {

    const [option, setOption] = useState("default")
    const [input, setInput] = useState('')
    const [actorData, setActorData] = useState([])
    const [showData, setShowData] = useState([])
    // const [showActorData, setShowActorData] = useState([]);
  
    useEffect(() => {
      if (option === "actor") {
        fetch(`https://api.tvmaze.com/search/people?q=${input}`)
          .then((result) => {
            result.json()
            .then((response) => {
              setActorData(response);
            });
          }
          );
          // console.log(actorData)
      } else {
        if (input !== "") {
          fetch(`https://api.tvmaze.com/search/shows?q=${input}`).then(
            (result) => {
              result.json().then((response) => {
                setShowData(response);
              });
            }
          );
          // console.log(showData)
        }
      }
    }, [input]);

    // useEffect(() => {
    //   if (actorData.length !== 0) {
    //     if (input === "") {
    //       setShowActorData([]);
    //     } else {
    //       fetch(
    //         `https://api.tvmaze.com/people/${actorData[0]?.person?.id}/castcredits?embed=show`
    //       ).then((result) => {
    //         result.json().then((response) => {
    //           setShowActorData(response);
    //         });
    //       });
    //       console.log(showActorData);
    //     }
    //   }
    // }, [actorData, input]);

    const optionHandler = (e) =>{
      setOption(e.target.value)
      setInput('')
      setActorData([])
      setShowData([])
      
    };


  return (
    <>
      <div className='select_container'>
        <select value={option} onChange={optionHandler}>
          <option value={"defaut"} >-Select-</option>
          <option value={"show"} >Show</option>
          <option value={"actor"} >Actor</option>
        </select>

        <input 
          className='search-box' 
          type={'search'} 
          value={input} 
          placeholder={'eg. Alan'}
          onChange={(e)=>{
            // console.log(option)
              option === 'show' || option=== 'actor'?
              setInput(e.target.value)
              :
              alert("'Search by Show' or 'Search by Actor'")
          }}
          />
      </div>
      {option === "actor" && input!=="" ?  actorData.length !== 0 ? <Actor data={actorData}/> : <h3 className="noData">Results for '{input}' not found</h3> : ""}
      {option === "show" && input!=="" ? showData.length !== 0 ? <Show data={showData}/> : <h3 className="noData">Results for '{input}' not found</h3> : ""}
    </>
  )
}

export default Search
