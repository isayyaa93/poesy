import React from "react";
import Poem from "./Poem";

function PoemsContainer({poems, setPoems}) {
  
  return (
    <div className="poems-container">
      {poems.map((element)=>{
        return(
        <Poem key={element.id} title={element.title} content={element.content} author={element.author}/>)

      })}
    </div>
  );
}

export default PoemsContainer;
