import './App.css'
// eslint-disable-next-line @typescript-eslint/no-var-requires
const logo: string = require('./logo.svg').default

const App = () => {
  return (
    <div className='app'>
      <img src={logo} className='app-logo' alt='logo' />
    </div>
  )
}

export default App
