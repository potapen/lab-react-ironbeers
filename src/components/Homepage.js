import { Link } from 'react-router-dom'

const Homepage = () => {
    return(
        <section className="homepageSection">
            <p>Homepage</p>
            <div>
                <picture>
                    <img src="/assets/beers.png" alt="beer"/>
                </picture>
                <div>
                    <Link to="/beers">All Beers</Link>
                </div>
            </div>
            <div>
                <picture>
                    <img src="/assets/random-beer.png" alt="beer"/>
                </picture>
                <div>
                    <Link to="/random-beer">Random Beer</Link>
                </div>
            </div>
            <div>
                <picture>
                    <img src="/assets/new-beer.png" alt="beer"/>
                </picture>
                <div>
                    <Link to="/new-beer">New Beer</Link>
                </div>
            </div>
        </section>
    )

}

export default Homepage