import React, { useEffect, useMemo, useState } from 'react';
import './KittiesFetch.css';

const KittiesFetch = () => {

  const [kitties, setKitties] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    (async() => {
      const res = await fetch('https://dummyjson.com/users')
      const data = await res.json()

      setKitties(data.users)
    })()
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const regex = new RegExp(search, 'gi');

  const filteredKitties = useMemo(() => {
    return (
        kitties.filter(kittie => (
        kittie.firstName.match(regex) ||
        kittie.lastName.match(regex) ||
        (typeof kittie.age === 'number' && !isNaN(kittie.age) && kittie.age.toString().match(regex))
      )
      ));

  }, [kitties, regex]);

  return (
    <div className='Kitties'>
      <div style={{ textAlign: 'center' }}>
        <h2>My Kitties</h2>
        <input type="text" placeholder='Search...' onChange={handleSearch} />
        <p>Test result: {search}</p>
      </div>
      <div style={{ margin: 'auto' }} className="kittiesList">
        {filteredKitties.map((kittie, idx) => (
          <div className="kittie" key={idx}>
            <p>{kittie.firstName}</p>
            <p>{kittie.lastName}</p>
            <p>{kittie.age}</p>
            <img src={kittie.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KittiesFetch;
