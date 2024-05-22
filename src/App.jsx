import './App.css'
import axios  from 'axios'
import { useState, useEffect } from 'react'
import Counter from './components/Counter/Counter'
import Teacher from './components/Teacher/Teacher'
import StarWars from './components/StarWars/StarWars'

function App() {
const [characters, setCharacters] = useState([]);
const getCharacters = async () => {
  const res = await axios.get('https://swapi.dev/api/people');
  setCharacters(res.data.results);
};
useEffect(() => {
  getCharacters();
},[]);

  return (
    <div className='center'>
      {/* <Counter initialState={0} howMuchMore={1} howMuchLess={1}/>
      <Counter initialState={0} howMuchMore={2} howMuchLess={2}/>
      <Counter initialState={0} howMuchMore={3} howMuchLess={3}/> */}
      <Teacher />
      {/* <StarWars characters={characters}/> */}
    </div>
  )
}

export default App
