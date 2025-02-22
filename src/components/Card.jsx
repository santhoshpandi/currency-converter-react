import { useEffect, useState } from "react"

export default function Card(props) {

  const obj = props.obj
  const [optionHTML, setOptionHTML] = useState([])
  const [currName, setCurrName] = useState(obj.currencyType)

  function handleChange(event) {
    const updatedObj = ({
      ...obj,
      [event.target.name]: event.target.value
    })
    props.setObj(updatedObj)
  }

  //For loading all the available currencies in select option
  useEffect(() => {
    async function currency() {
      try {
        const res = await fetch('https://api.frankfurter.dev/v1/currencies')
        const data = await res.json()
        // Object.keys(data) to get the key of the json file
        const HTML = Object.keys(data).map((key, idx) => (
          <option key={idx} value={key}>{key}</option>
        ))
        setOptionHTML(HTML)
        const key = Object.keys(data).find(key =>
          key === obj.currencyType.toUpperCase())

        setCurrName(data[key])
      }
      catch(err){
        console.log(err.message)
      }
    }
    currency()

  }, [obj.currencyType])

  return (
    <div className="flex shadow-md shadow-slate-500 p-2 justify-between h-2/3 rounded-md">

      <div className="left flex flex-col px-2 py-2 gap-5 justify-between">
        <label htmlFor="num">{obj.name}</label>
        <input type="number"
          disabled={obj.name == 'to' ? true : false}
          className="rounded-md px-2 w-11/12 disabled:bg-white cursor-pointer focus:outline-none"
          name="value"
          onChange={handleChange} value={obj.value}
          id="num" />
      </div>

      <div className="right flex flex-col px-2 py-2 gap-5 justify-between">
        <label htmlFor="currencyType" className="text-slate-600">{currName}</label>

        <select name="currencyType" value={obj.currencyType}
          onChange={handleChange}
          className="rounded-md px-1 cursor-pointer scroll-custom
          focus:outline-none " id="currencyType">
          {optionHTML}
        </select>

      </div>
    </div>
  )
}