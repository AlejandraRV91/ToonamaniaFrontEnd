import { Link } from "react-router-dom"
import "./Home.css"

export default function Home() {
    return (
        <div className="home">
            <div className="home-card">
                <h2>Welcome to Toonamania</h2>
                <p>Toonamania is a website that allows you to create your own character</p>
                <Link to="/index" className="button">Go to index</Link>
            </div>
        </div>
    )
}