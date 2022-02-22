import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';

function App() {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    async function fetchPeople(){
      let res = await fetch(`https://swapi.dev/api/people/?search=`);
      let data = await res.json();
      setPeople(data.results);
      setLoading(false);
    }

    fetchPeople();
  }, []);
  console.log('people', people)

  
  return (
    <div className="App">
      <SearchStyles>
                <form className='search'>
                    <input
                        className='searchbar'
                        type='text'
                        placeholder='Search Characters ...'
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </form>
      </SearchStyles>
      <ProfileStyles>
        {loading ? (<h3 className="loading">Loading ... </h3>) : (
                people.filter((value) => {
                  if (query === ""){
                    return value;
                  } else if (value.name.toLowerCase().includes(query.toLowerCase())
                  ){
                    return value;
                  }
                }).map((people, i) => (
                    <div className="container" key={i}>
                        <div className="character">
                            <h5>Height: {people.height}</h5><br />
                            <h5>Weight: {people.mass}</h5><br />
                            <h5>Hair Color: {people.hair_color}</h5><br />
                            <h5>Birth Year: {people.birth_year}</h5><br />
                            <h5>Species: {people.species}</h5><br />
                            <h5>Films: {people.films}</h5><br />
                            <h5>Starships: {people.starships}</h5><br />
                            <h3>{people.name}</h3>
                            
                        </div>
                    </div>
                
                )
            )
        )}
      </ProfileStyles>
    </div>
  );
}

export default App;

const SearchStyles = styled.div`

.search {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 5rem;
    font-family: 'LibreFranklin';
}
.searchbar {
    padding: 15px;
    background-color: transparent;
    color: var(--faraway-blue);
    border: 2px solid var(--faraway-blue);
    border-radius: 30px 30px 30px 30px;
    padding-left: 2rem;
    cursor: pointer;
}
input {
    outline: none;
}
input::placeholder{
    color: var(--faraway-blue);
    font-family: 'LibreFranklin';
    font-size: 1rem;
}
.search > input[type="text"]{
    width: 40%;
    min-width: 170px;
}
`;

const ProfileStyles = styled.div`
.loading {
    margin-top: 10rem;
    display: flex;
    justify-content: center;
    font-family: 'theboldfont';
    color: white;
}
.container{
    display: flex;
    justify-content: center;
    height: 650px;
    perspective: 600px;
    font-size: 375%;
    letter-spacing: 5px;
    line-height: 80%;
    text-align: center;
  }
.character {
    position: absolute;
    top: 50%;
    left: 40%;
    width: 50rem;
    margin: 0 0 0 -250px;
    bottom-margin: 10rem;
    top: -20rem;
    bottom: 0;
    height: 50rem;
    font-family: 'theboldfont';
    color: var(--gold);
    transform-origin: center bottom;
    transform: perspective(500px) rotateX(20deg);
  }
`;