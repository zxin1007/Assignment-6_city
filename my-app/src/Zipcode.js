import React from "react"

export default function Zipcode (){

    const [city, setCity] = React.useState([])
    const item=[]
    React.useEffect(function(){
        fetch("http://ctp-zip-api.herokuapp.com/zip/10016")
            .then(res => res.json())
            .then(json => setCity(json.map(data => [data.City]
                )))
    })

    const display = city.map(city => <p>{city}</p>)
    return (
        <div>
            {display}
        </div>
    )
}