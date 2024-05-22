
const StarWars = ({characters}) => {
  return (
    <div>
        <h1>Personajes de StarWars</h1>
        {characters.map((character,i) => <p key={i}>{character.name}</p>)}
    </div>
  )
}

export default StarWars