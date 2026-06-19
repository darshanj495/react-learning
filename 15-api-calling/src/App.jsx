import axios from 'axios'
import React from 'react'

const App = () => {
    async function fetchData(){{
       let response = await axios.get('https://picsum.photos/v2/list')

       console.log(response.data);
    }}
  return (
    <div>
      <button onClick={fetchData}>Get Data</button>
    </div>
  )
}

export default App