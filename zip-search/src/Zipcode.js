import React from "react"

//app 1
function Zipcode (){

    const [info, setInfo] = React.useState([])
    const [zipcode, setZipcode] = React.useState("")

    React.useEffect(function(){
        if (zipcode){
            fetch(`http://ctp-zip-api.herokuapp.com/zip/${zipcode}`)
                .then(res => res.json())
                .then(json => setInfo(json.map(data => data)))
                .catch(err=> alert("zip code doesn't match"))
        }
    },[zipcode])

    function handleSumbit(event){
        event.preventDefault();
        setZipcode(event.target.zipcode.value)
        // console.log(event.target.zipcode.value)
    }

    const display = info.map((data,index )=> <p key={index} className="data">{data.City}</p>)
    
    return (
        <div className="zip-code">
            <form onSubmit={handleSumbit}>
            <input placeholder="Zip Code" name="zipcode" type="number"></input>
            <input type="submit" value="Submit" />
        </form>
        <p>{display}</p>
        </div>
    )
}

export default Zipcode
