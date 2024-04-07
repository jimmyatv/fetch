import { React, useEffect, useMemo, useState } from 'react';
import './KittiesFetch.css';

const KittiesFetch = () => {

  const [kitties, setKitties] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {

    (async () => {

      const res = await fetch('https://dummyjson.com/users');
      const data = await res.json()

      setKitties(data.users)
      console.log(data.users)

    })();

  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className='Kitties'>
      <div style={{ textAlign: 'center' }}>
        <h2>My Kitties</h2>
        <input type="text" placeholder='Search...' onChange={handleSearch} />
        <p>Test result: {search}</p>
      </div>
      <div className="kittiesList">
        {kitties.map((kittie, idx) => {
          return (
            <div className="kittie" key={idx}>
              <p>{kittie.firstName}</p>
              <p>{kittie.lastName}</p>
              <p>{kittie.age}</p>
              <img src={kittie.image} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  )
};

export default KittiesFetch;