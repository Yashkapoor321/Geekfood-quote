import { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import QuoteCard from './Components/Quote/Quote'
import QuoteData from './Components/Quote/QuoteData'
import './App.css';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
    <div>
     <Navbar/>
     <div className='data'>
         
              {QuoteData.map(movie => (
                  <div key={movie.id} className="content">
                      <QuoteCard
                          info={movie.info}
                          name={movie.name}
                        
                      />
                  </div>
              ))}
          
     </div>
     
     <Footer/>
     </div>
    </>
  )
}

export default App
