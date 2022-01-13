import React from "react";

//app 2
function City (){

    const [info, setInfo] = React.useState([])
    const [city, setCity] = React.useState("")

    React.useEffect(function(){
        if (city){
            fetch(`http://ctp-zip-api.herokuapp.com/city/${city}`)
            .then(res => res.json())
            .then(json => setInfo(json))
            .catch(err => {console.log("Error Reading data " + err);});
        }
    },[city])

    console.log(info)

    function handleSumbit(event){
        event.preventDefault();
        setCity(event.target.city.value.toUpperCase())
    }

    const display = info.map((data,index )=> <p key={index}>{data}</p>)

    return (
        <main>
            <form onSubmit={handleSumbit}>
                <input placeholder="City" name="city" type="text"></input>
                <input className="button" type="submit" value="Search" />
            </form>
            <h2>Zipcodes:</h2>
            <div className="zipcodes">
                <div className="zipcode">{display}</div>
            </div>
        </main>
    )
}

export default City