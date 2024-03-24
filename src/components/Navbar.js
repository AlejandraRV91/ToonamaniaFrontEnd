import "./Navbar.css";
import icon from "../assets/img/Community.svg";
import { Link } from "react-router-dom";

export default function Navbar() {
	return (
		<header className="navbar">
			<div className="logo">
				<img src={icon} alt="icon" width="30" height="30" />
				<h1><Link to="/">Toonamania </Link></h1>
			</div>
			<nav>
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/create">Create a character</Link></li>
					<li><Link to="/index">All characters</Link></li>
				</ul>
			</nav>
		</header>
	);
}
