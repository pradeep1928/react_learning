import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import DisplayCounter from './components/DisplayCounter'
import Controls from './components/Controls'

function App() {

  return (
    <center>
      <div className="card m-5 shadow" style={{ width: "50rem" }}>
        <div className="px-4 py-5 my-5 text-center">
          < Header />
          <div className="col-lg-6 mx-auto">
            < DisplayCounter />
            < Controls />
          </div>
        </div>
      </div>
    </center>
  )
}

export default App
