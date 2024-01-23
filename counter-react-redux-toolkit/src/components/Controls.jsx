
import { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { counterActions } from '../store/counter'
import { privacyActions } from '../store/privacy'



function Controls() {

    const dispatch = useDispatch()
    const inputElement = useRef()

    const handleIncreament = () => {
        dispatch(counterActions.increment())
    }

    const handleDecreament = () => {
        dispatch(counterActions.decrement())
    }

    const handlePrivacyToggle = () => {
        dispatch(privacyActions.toggle())
    }

    const handleAdd = () => {
        dispatch(counterActions.add(inputElement.current.value))
        inputElement.current.value = ''

    }

    const handleSubstract = () => {
        dispatch(counterActions.subtract(inputElement.current.value))
        inputElement.current.value = ''
    }




    return (
        <>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-3">
                <button type="button" className="btn btn-warning"
                    onClick={handleDecreament}
                >-1</button>
                <button type="button" className="btn btn-primary"
                    onClick={handleIncreament}
                >+1</button>
                <button type="button" className="btn btn-info"
                    onClick={handlePrivacyToggle}
                >Privacy Toggle</button>

            </div>

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <input type="number" ref={inputElement} placeholder='Enter Number' />

                <button type="button" className="btn btn-success"
                    onClick={handleAdd}
                >ADD</button>
                <button type="button" className="btn btn-danger"
                    onClick={handleSubstract}
                >SUBTRACT</button>
            </div>
        </>
    )
}

export default Controls