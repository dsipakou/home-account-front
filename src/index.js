import React from 'react'
import ReactDOM from 'react-dom'
import { Home } from './components/Home'

const App = () => {
  return (
    <>
      <Home />
      <div>Hello there</div>
    </>
  )
}
ReactDOM.render(<App />, document.getElementById('root'))
