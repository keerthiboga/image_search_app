import ImageSearch from './ImageSearch'
import './App.css'

function App() {

  const Key=import.meta.env.VITE_API_KEY;
  return (
    <>
      <ImageSearch apikey={Key}/>
    </>
  )
}

export default App
