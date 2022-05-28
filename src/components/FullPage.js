import React from 'react'
import './FullPage.css'
import Card from './Card';
import axios from 'axios';

const FullPage = () => {
    const [search,setSearch] = React.useState('');
    const [data,setData] = React.useState('');
    const handler = e => {
         setSearch(e.target.value);
    }
    React.useEffect(() => {
        axios.get('https://api.coinstats.app/public/v1/coins?skip=0&limit=100').then(
            res => {
                setData(res.data.coins);
            }
        )
    },[])
  return (
      <>
        <div className="header-container">
            <input placeholder="search..." value={search} onChange={handler}/>
        </div>
        {
            data.length > 0 &&
        <div className="grid-container">
        {data
        .filter(crypto => crypto.name.toLowerCase().includes(search.toLowerCase())).map(crypto => <Card 
            name={crypto.name}
            rank={crypto.rank}
            price={crypto.price}
            marketCap={crypto.marketCap}
            key={crypto.id}
            img={crypto.icon}
        />)}
        </div>
        }
      </>
  )
}

export default FullPage;