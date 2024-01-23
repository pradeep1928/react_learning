import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import DisplayCounter from './components/DisplayCounter'
import Controls from './components/Controls'
import { useSelector } from 'react-redux'
import PrivacyMessage from './components/PrivacyMessage'

function App() {

  const privacy = useSelector(store => store.privacy)

  return (
    <center>
      <div className="card m-5 shadow" style={{ width: "40rem" }}>
        <div className="px-4 py-4 my-4 text-center">
          < Header />
          <div className="col-lg-6 mx-auto">
            {privacy ? < PrivacyMessage /> : < DisplayCounter />}
            < Controls />
          </div>
        </div>
      </div>
    </center>
  )
}

export default App
