import React from 'react'
import axios from "axios";




function Axios2(profile) {
  axios.get('https://api.github.com/users/VshivcevA')
    .then((profile) => {
      // console.log(profile.data.login)
      return profile
    })
  console.log(profile.data)
  return (
    <p>Загрузился API GitHub {profile.data}</p>
  )
}

export default Axios2
