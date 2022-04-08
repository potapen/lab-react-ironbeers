import { useState, useEffect } from "react"
import axios from 'axios'
import Beer from "../components/Beer"
const Beers = () => {
    const [beers, setBeers] = useState([])
    useEffect(()=>{
        const getBeers = async ()=>{
            const {data} = await axios.get('https://ih-beers-api2.herokuapp.com/beers')
            setBeers(data)
        }
        getBeers()
    },[])
    return(
        <>
            {beers.map(beer => <Beer key={beer._id}{...beer}/>)}
        </>
    )
}

export default Beers