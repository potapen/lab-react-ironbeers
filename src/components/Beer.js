import './Beer.css'
import { Link } from 'react-router-dom'

const Beer = ({image_url,name,tagline,contributed_by, _id,...allProps}) => {
    return(
        <div className='beer'>
            <picture>
                <img src={image_url} alt={name}/>
            </picture>
            <div>
                <Link to={`/beers/${_id}`}><h2>Name: {name}</h2></Link>
                <p>tagline: {tagline}</p>
                <p>contributed_by: {contributed_by}</p>

            </div>
        </div>
    )
}

export default Beer
