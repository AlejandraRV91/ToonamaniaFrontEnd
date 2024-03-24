import { useEffect, useState } from "react";
import { getAllCharacters } from "../../api/Crud";
import "./Index.css";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";

export default function Index() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
	useEffect(() => {
		getAllCharacters("/characters").then((data) => {
			setCharacters(data);
            setLoading(false);
		});
	}, []);
    
	return (
		<div className="index">
            {(!loading && characters.length > 0) ? (
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
