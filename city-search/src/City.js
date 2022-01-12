import React from "react";

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

export default City