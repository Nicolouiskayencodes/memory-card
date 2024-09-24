import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import '../styles/card.css';

export default function Cards(){
  const [cardArray, setCardArray] = useState([]);
  const [selected, setSelected] = useState([]);
  const [streak, setStreak] = useState(0);
  const [high, setHigh] = useState(0);
  const [last, setLast] = useState(0);
  const mounted = useRef(true);
  const fetchImages = async () => {
    fetch('https://pokeapi.co/api/v2/pokemon/ludicolo', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:'Ludicolo'}])
    })
    fetch('https://pokeapi.co/api/v2/pokemon/pikachu', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:'Pikachu'}])
    })
    fetch('https://pokeapi.co/api/v2/pokemon/staryu', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:'Staryu'}])
    })
    fetch('https://pokeapi.co/api/v2/pokemon/clefairy', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:'Clefairy'}])
    })
    fetch('https://pokeapi.co/api/v2/pokemon/pidgey', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:'Pidgey'}])
    })
    fetch('https://pokeapi.co/api/v2/pokemon/weezing', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Weezing"}])
    })
    fetch('https://pokeapi.co/api/v2/pokemon/wobbuffet', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Wobbuffet"}])
    })
    fetch('https://pokeapi.co/api/v2/pokemon/magikarp', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Magikarp"}])
    })
    fetch('https://pokeapi.co/api/v2/pokemon/mankey', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Mankey"}])
    })
    fetch('https://pokeapi.co/api/v2/pokemon/sudowoodo', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Sudowoodo"}])
    })
    fetch('https://pokeapi.co/api/v2/pokemon/gengar', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Gengar"}])
    })
    fetch('https://pokeapi.co/api/v2/pokemon/mudkip', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Mudkip"}])
    })
    fetch('https://pokeapi.co/api/v2/pokemon/ditto', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Ditto"}])
    })
    fetch('https://pokeapi.co/api/v2/pokemon/charizard', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Charizard"}])
    })
    fetch('https://pokeapi.co/api/v2/pokemon/squirtle', {mode: 'cors'}).then(
      function(response) {
      return response.json()
    })
    .then(function(response) {
      setCardArray(cardArray=>[...cardArray, {url:response.sprites.other['official-artwork'].front_default, name:"Squirtle"}])
    })
    fetch('https://pokeapi.co/api/v2/pokemon/ivysaur', {mode: 'cors'}).then(
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
  useEffect(()=>{
    if (last !== 0){
      setTimeout(()=>document.querySelector('dialog').close(), 2000)
    }
  }, [last])

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
    setLast(streak);
    if (high < streak) {
      setHigh(streak);
    }
  } else {
    setStreak(streak+1);
    setSelected([...selected, pokemon.name])
    setCardArray(shuffledCards);
    setLast(0);
  }
  }
  return (
    <button onClick={selectCard} className="card">
      <img src={pokemon.url}></img>
      <h2 className="name">{pokemon.name}</h2>
    </button>
  )
}
function Lose(){
  return <dialog open><p>You clicked a repeat! Your streak was {last}</p></dialog>
}

    return(
  <>
  <header>
    <h1>Memory Card Game</h1>
    <p>High score: {high}</p>
    <p>Earn points by selecting pokemon but don{"'"}t select a repeat!</p>
    {(streak === 16)?<p className="">You got all 16!</p> : <p>Streak: {streak}</p>}
  </header>
  <div className="card-container">
  {cardArray.map(pokemon => <Card key={pokemon.name} pokemon={pokemon}/>)}
  </div>
  {last !==0 && <Lose />}
  </>
    );
}