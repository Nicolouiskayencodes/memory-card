import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import '../styles/card.css';

export default function Cards(){
  const [cardArray, setCardArray] = useState([]);
  const [selected, setSelected] = useState([]);
  const [streak, setStreak] = useState(0);
  const [high, setHigh] = useState(0);
  const mounted = useRef(true);
  const fetchImages = async () => {
    await fetch('https://pokeapi.co/api/v2/pokemon/ludicolo', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:'Ludicolo'}])
    })
    await fetch('https://pokeapi.co/api/v2/pokemon/pikachu', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:'Pikachu'}])
    })
    await fetch('https://pokeapi.co/api/v2/pokemon/staryu', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:'Staryu'}])
    })
    await fetch('https://pokeapi.co/api/v2/pokemon/clefairy', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:'Clefairy'}])
    })
    await fetch('https://pokeapi.co/api/v2/pokemon/pidgey', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:'Pidgey'}])
    })
    await fetch('https://pokeapi.co/api/v2/pokemon/weezing', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Weezing"}])
    })
    await fetch('https://pokeapi.co/api/v2/pokemon/wobbuffet', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Wobbuffet"}])
    })
    await fetch('https://pokeapi.co/api/v2/pokemon/magikarp', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Magikarp"}])
    })
    await fetch('https://pokeapi.co/api/v2/pokemon/mankey', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Mankey"}])
    })
    await fetch('https://pokeapi.co/api/v2/pokemon/sudowoodo', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Sudowoodo"}])
    })
    await fetch('https://pokeapi.co/api/v2/pokemon/gengar', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Gengar"}])
    })
    await fetch('https://pokeapi.co/api/v2/pokemon/mudkip', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Mudkip"}])
    })
    await fetch('https://pokeapi.co/api/v2/pokemon/ditto', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Ditto"}])
    })
    await fetch('https://pokeapi.co/api/v2/pokemon/charizard', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Charizard"}])
    })
    await fetch('https://pokeapi.co/api/v2/pokemon/squirtle', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Squirtle"}])
    })
    await fetch('https://pokeapi.co/api/v2/pokemon/ivysaur', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Ivysaur"}])
    })
  }
  useEffect(()=>{
    if (mounted.current){
      fetchImages();
    }
      return ()=>{mounted.current=false}
}, [])

function shuffle(array) { 
  for (let i = array.length - 1; i > 0; i--) { 
    const j = Math.floor(Math.random() * (i + 1)); 
    [array[i], array[j]] = [array[j], array[i]]; 
  } 
  return array; 
}; 
const shuffledCards = shuffle(cardArray);

function Card({pokemon}){
  function selectCard(){
  if (selected.includes(pokemon.name)){
    setStreak(0);
    setSelected([]);
    setCardArray(shuffledCards);
    if (high < streak) {
      setHigh(streak);
    }
  } else {
    setStreak(streak+1);
    setSelected([...selected, pokemon.name])
    setCardArray(shuffledCards);
  }
  }
  return (
    <button onClick={selectCard} className="card">
      <img src={pokemon.url}></img>
      <h2 className="name">{pokemon.name}</h2>
    </button>
  )
}

    return(
  <>
  <header>
    <h1>Memory Card Game</h1>
    <p>Earn points by selecting pokemon but don{"'"}t select the same one!</p>
    {(streak === 16)?<p>You got all 16!</p> : <p>Streak: {streak}</p>}
    <p>High score: {high}</p>
  </header>
  <div className="card-container">
  {cardArray.map(pokemon => <Card key={pokemon.name} pokemon={pokemon}/>)}
  </div>
  </>
    );
}