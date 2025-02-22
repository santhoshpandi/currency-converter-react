import './App.css'
import { useEffect, useRef, useState } from 'react'
import Illustration from './components/Illustration'
import Card from './components/Card'
import Footer from './components/Footer'
import imgUrl from './assets/money_illuster.png'
import iconUrl from './assets/swap.png'
import { useIntersectionObserver } from './hooks/useIntersectionObserver'

function App() {

  const cardBox = useIntersectionObserver('md:animate-slide-right animate-slide-top') // When the element is in the viewport, it initiates the animation by adding the required classes

  const [fromObj, setFromObj] = useState({
    name: "from", currencyType: "USD", value: 0
  })
  const [toObj, setToObj] = useState({
    name: "to", currencyType: "INR", value: 0
  })
  const [rotate, setRotate] = useState(false)

  function swapCard() {
    let obj = { ...fromObj, name: "to" }
    setFromObj({ ...toObj, name: "from" })
    setToObj(obj)

    setRotate(!rotate)
  }

  //Calculating the currency values conversion
  useEffect(() => {
    async function convertCurrency() {
      try {
        const res = await fetch(`https://api.frankfurter.dev/v1/latest?base=${fromObj.currencyType}`)
        const data = await res.json()
        var calculatedValue = fromObj.value * data.rates[toObj.currencyType]

        calculatedValue = Math.round(calculatedValue * 100) / 100

        setToObj((t) => (
          { ...t, value: calculatedValue }
        ))
      }
      catch(err){
        console.log(err.message)
      }
    }
    convertCurrency()
  }, [fromObj, toObj])

  return (
    <div className='w-screen h-screen flex flex-col items-center gap-1 justify-center md:flex-row '>

      <Illustration url={imgUrl} />

      <div className="flex p-3 rounded-md flex-col gap-3 md:w-1/3 opacity-0"
        ref={cardBox}>

        <div className="section flex flex-col">
          <Card obj={fromObj} setObj={setFromObj} />

          <button className='swap w-10 mx-auto py-0.5   
           duration-150 focus:outline-none'
            style={{
              transform: rotate ? 'rotateX(360deg)' : 'rotateX(0deg)'
            }}
            onClick={swapCard}
          >
            <img src={iconUrl} alt="" />
          </button>

          <Card obj={toObj} setObj={setToObj} />
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default App
