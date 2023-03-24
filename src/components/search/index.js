import {useEffect, useState} from "react";

let sessionStorageMock = JSON.parse(sessionStorage.getItem('jsonplaceholder'))

function filter(val,arr){
  return arr.filter(newArr=>(~newArr.title.indexOf(val)))
}

export default function Search() {
  const [data, setData] = useState(sessionStorageMock?sessionStorageMock:[])

  function upload() {
    if (!data.length) {
      fetch('https://jsonplaceholder.typicode.com/posts/?_start=0&_limit=30')
        .then((response) => {return response.json()})
        .then((dataArray) => {
          sessionStorage.setItem('jsonplaceholder', JSON.stringify(dataArray))
          setData(dataArray)
        })
    }
  }
  useEffect(()=>{upload()},[])

  function RenderList({data}) {
    return (
      <ul>
        {
          data.map(item => {
              return <li key={item.id}>{item.title}</li>
            })
        }
      </ul>
    )
  }

  return (
    <div className="js-results">
      <input type="text" id="search" placeholder="Поиск по заголовоку"
             onChange={(e)=>{
               setData(filter(e.target.value,sessionStorageMock))
             }}/>
      <RenderList data={data}/>
    </div>
  )
}
