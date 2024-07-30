function Hello() {

    let number = 1
    let fullName = () => {
        return 'Pradeep Padmukhi'
    }

    return <div>
        <p>message no. {number} Hello I am {fullName()} </p>
    </div>
}


export default Hello