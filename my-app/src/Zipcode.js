import React from "react"

//app 1
function Zipcode (){

    const [info, setInfo] = React.useState([])
    const [zipcode, setZipcode] = React.useState("10006")

    React.useEffect(function(){
        fetch(`http://ctp-zip-api.herokuapp.com/zip/${zipcode}`)
            .then(res => res.json())
            .then(json => setInfo(json.map(data => data)))
            .catch(err=> alert("zip code doesn't match"))
    },[zipcode])

    function handleSumbit(event){
        event.preventDefault();
        setZipcode(event.target.zipcode.value)
        // console.log(event.target.zipcode.value)
    }

    const display = info.map((data,index )=> <p key={index}>{data.City}</p>)

    return (
        <form onSubmit={handleSumbit}>
            <input placeholder="Zip Code" name="zipcode" type="number"></input>
            <input type="submit" value="Submit" />
            {display}
        </form>
    )
}

//app 2
function City (){

    const [info, setInfo] = React.useState([])
    const [city, setCity] = React.useState("SPRINGFIELD")

    React.useEffect(function(){
        fetch(`http://ctp-zip-api.herokuapp.com/city/${city}`)
            .then(res => res.json())
            .then(json => setInfo(json))
            .catch(err => {console.log("Error Reading data " + err);});
    },[city])

    function handleSumbit(event){
        event.preventDefault();
        setCity(event.target.city.value.toUpperCase())
    }

    const display = info.map((data,index )=> <p key={index}>{data}</p>)

    return (
        <form onSubmit={handleSumbit}>
            <input placeholder="City" name="city" type="text"></input>
            <input type="submit" value="Submit" />
            {display}
        </form>
    )
}

export {Zipcode,City}