import { useState, useEffect } from "react"
import axios from 'axios'
const BeerRandom = () => {
    const [beer, setBeer] = useState([])
    useEffect(()=>{
        const getBeer = async ()=>{
            const {data} = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            setBeer(data)
        }
        getBeer()
    },[])
    return(
        <div>
            <picture>
                <img src={beer.image_url} alt={beer.name}/>
            </picture>
            <div>
                <p>name: {beer.name}</p>
                <p>first_brewed: {beer.first_brewed}</p>
                <p>attenuation_level: {beer.attenuation_level}</p>
                <p>contributed_by: {beer.contributed_by}</p>
                <article>description: {beer.description}</article>
            </div>
        </div>
    )
}

export default BeerRandom