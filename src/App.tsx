import './App.css'
import * as pack from '../package.json'

export default function App() {
  return (
    <div className='App'>
      <h1>App: {pack.name}</h1>
    </div>
  )
}
