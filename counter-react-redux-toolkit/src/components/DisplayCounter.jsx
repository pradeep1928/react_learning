import { useSelector } from "react-redux"



function DisplayCounter() {

  const { counterVal } = useSelector(store => store.counter)

  return (
    <p className="lead mb-4">Counter current value: {counterVal} </p>
  )
}

export default DisplayCounter