import React from 'react';
import ToyCard from './ToyCard'

const ToyContainer = (props) => {

  const renderToyCards = () => {
    return props.toyArray.map(toy=> <ToyCard updateLike={props.updateLike} deleteToy={props.deleteToy} key={toy.id} toyObj={toy}/>)
  }

  return(
    <div id="toy-collection">
      {renderToyCards()}
    </div>
  );
}

export default ToyContainer;