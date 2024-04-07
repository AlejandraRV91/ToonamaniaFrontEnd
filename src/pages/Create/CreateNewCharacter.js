import "./Create.css";
import { createCharacter } from "../../api/Crud";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

 function Create() {
    const navigate = useNavigate();
	function HandleSubmit(event) {
		event.preventDefault();
        const name = event.target.name.value;
        const age = event.target.age.value;
        const image = event.target.image.value;
        const description = event.target.description.value;
        createCharacter("/characters/new", { name, age, image, description }).then((data) => {
            toast.success("Character created successfully");
            navigate("/index");
        })
	}
	return (
		<div className="create-wrapper">
			<div className="create">
				<h1>Create Character</h1>
				<form onSubmit={HandleSubmit}>
					<div className="form-group">
						<label htmlFor="name">Name:</label>
						<input type="text" id="name" name="name" required />
					</div>
					<div className="form-group">
						<label htmlFor="age">Age:</label>
						<input type="number" id="age" name="age" required />
					</div>
					<div className="form-group">
						<label htmlFor="image">Image URL:</label>
						<input type="text" id="image" name="image" required />
					</div>
					<div className="form-group">
						<label htmlFor="description">Description:</label>
						<textarea
							id="description"
							name="description"
							required
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
export default Create