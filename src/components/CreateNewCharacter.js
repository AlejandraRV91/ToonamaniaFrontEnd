import "./Create.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Create() {

	const navigate = useNavigate();
	const [character, setCharacter] = useState({
		name: "",
		age: "",
		image: "",
		description: "",
	});

	function HandleSubmit(event) {
		event.preventDefault();
		const response = axios.post(
			process.env.REACT_APP_API_URL + "/characters/new",
			character
		);
		response.then((data) => {
			if (data.status === 201) {
				navigate("/index");
			}
		});
	}

	function handleChange(event) {
		setCharacter({ ...character, [event.target.name]: event.target.value });
	}
	
	return (
		<div className="create-wrapper">
			<div className="create">
				<h1>Create Character</h1>
				<form onSubmit={HandleSubmit}>
					<div className="form-group">
						<label htmlFor="name">Name:</label>
						<input
							type="text"
							id="name"
							name="name"
							required
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="age">Age:</label>
						<input
							type="number"
							id="age"
							name="age"
							required
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="image">Image URL:</label>
						<input
							type="text"
							id="image"
							name="image"
							required
							onChange={handleChange}
						/>
					</div>
					<div className="form-group">
						<label htmlFor="description">Description:</label>
						<textarea
							id="description"
							name="description"
							required
							onChange={handleChange}
						></textarea>
					</div>
					<div className="form-group">
						<button type="submit">Create Character</button>
					</div>
				</form>
			</div>
		</div>
	);
}
export default Create;
