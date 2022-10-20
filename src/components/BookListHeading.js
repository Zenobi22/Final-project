import React, {useState}from 'react';
import Card from './Card.js';
import axios from 'axios';

const BookListHeading=()=>{
   const [search,setSearch]=useState('');
   const[bookData, setData]=useState([]);
   const searchBook=(evt)=>{
    if(evt.key==='Enter')
    {
       axios.get(`https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDmbSNDgfIUzYZ8yBm8r01fatVU2mcNuhM`+`&maxResults=40`)
       .then(res=>setData(res.data.items))
       .catch(err=>console.log(err))
    }
   }
   return(
      <>
        <div className='header'>
         <div className="row1">
           <h1>That's the thing about books. They let you travel without moving your feet.</h1>
         </div>
          <div className="row2">
            <h2>Find your Favorite book</h2>
            <div className='search'>
            <input type='text' placeholder='Search Book Name'
            value={search} onChange={e =>setSearch(e.target.value)}
            onKeyPress={searchBook}/>
            <button><i className="fa-solid fa-magnifying-glass"></i></button>
            </div>
          </div>
          <img className='books' src='./images/bookstack.png' alt='girl leaning on book'></img>
        </div>
         
        <div className='container'>
         <Card book={bookData}/>
         

        
        </div>
      </>
   );
}

export default BookListHeading;
