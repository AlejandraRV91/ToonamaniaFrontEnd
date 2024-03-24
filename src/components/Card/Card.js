import "./Card.css";

export default function Card({ character }) {

	return (
		<div className="card">
			<img
				id="background"
				src={"https://picsum.photos/seed/" + character.id + "/300"}
				alt="background"
			/>
			<span className="avatar-wrapper">
				<img
					id="avatar"
					src={character.image}
					alt="avatar"
				/>
			</span>
			<div className="content-wrapper">
				<div className="content">
					<h1>{character.name}</h1>
					<p>
						{character.age} years old
					</p>
					<button className="btn-card">more info</button>
				</div>
			</div>
		</div>
	);
}
