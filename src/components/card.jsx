import { useEffect, useMemo } from "react";
import { useState } from "react";

export default function Cards(){
  const [ditto, setDitto]=useState();
  const [charizard, setCharizard] = useState();
  const fetchImages = async () => {
    await fetch('https://pokeapi.co/api/v2/pokemon/ditto', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setDitto(response.sprites.other['official-artwork'].front_default)
    })
    await fetch('https://pokeapi.co/api/v2/pokemon/charizard', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCharizard(response.sprites.other['official-artwork'].front_default)
    })
  }
    useEffect(()=>{
      fetchImages();
}, [])

    return(
  <>
  <img src={ditto}></img>
  <img src={charizard}></img>
  </>
    );
}