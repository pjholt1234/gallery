import './App.css'
import Card from './components/Card'

const App = () => {
  return (
    <div className='container'>
      <Card />
      <Card offset={1} zIndex={-2}/>
      <Card offset={2} zIndex={-4}/>
    </div>
  )
}

export default App
