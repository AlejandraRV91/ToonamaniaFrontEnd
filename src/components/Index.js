import { useEffect, useState } from "react";
import "./Index.css";
import axios from "axios";
import Card from "./Card";
import Loader from "./Loader";

export default function Index() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
	useEffect(() => {
        
		const data = axios.get(
			process.env.REACT_APP_API_URL + "/characters",
		);

        data.then((data) => {
            if (data.status === 200) {
                setCharacters(data.data);
                setLoading(false);
            }
        })
	}, []);
    
	return (
		<div className="index">
            {(!loading && characters && characters.length > 0) ? (
                characters.map((character) => (
                    <Card key={character.id} character={character} />
                ))
            ) : (
                <div className="loader-wrapper">
                    <Loader />
                </div>
            )}
		</div>
	);
}
