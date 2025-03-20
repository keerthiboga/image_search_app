import ImageSearch from './ImageSearch'
import './App.css'

function App() {

  const apikey=import.meta.env.VITE_API_KEY;
  return (
    <>
      <ImageSearch apikey={apikey} />
    </>
  )
}

export default App
