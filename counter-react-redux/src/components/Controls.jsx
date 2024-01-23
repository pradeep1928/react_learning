
import { useRef } from 'react'
import { useDispatch } from 'react-redux'



function Controls() {

    const dispatch = useDispatch()
    const inputElement = useRef()

    const handleIncreament = () => {
        dispatch({ type: 'INCREAMENT' })
    }

    const handleDecreament = () => {
        dispatch({ type: 'DECREAMENT' })
    }

    const handlePrivacyToggle = () => {
        dispatch({type: 'PRIVACY_TOGGLE'})
    }

    const handleAdd = () => {
        dispatch({ type: 'ADD', payload: { num: inputElement.current.value } })
        inputElement.current.value = ''

    }

    const handleSubstract = () => {
        dispatch({ type: 'SUBTRACT', payload: { num: inputElement.current.value } })
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