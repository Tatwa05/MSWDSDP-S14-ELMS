import React from 'react'
import homepic from './home.png'

const styles = {
  container: {
    backgroundImage: `url(${homepic})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100vw',
    height: '89vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white', // Optional: Set text color to contrast with the background
  },
};


export default function Home() {
  return (
    <div style={styles.container}>
      
    </div>
  )
}
