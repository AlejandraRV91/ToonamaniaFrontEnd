import axios from "axios";
import { toast } from "react-toastify";

// get all
export async function getAllCharacters(url) {
	try {
		const response = await axios.get(process.env.REACT_APP_API_URL + url);
		return response.data;
	} catch (error) {
		toast.error(error.response.data.message);
	}
}

//create
export async function createCharacter(url, data) {
	try {
		const response = await axios.post(
			process.env.REACT_APP_API_URL + url,
			data
		);
		return response.data;
	} catch (error) {
		toast.error(error.response.data.message);
	}
}
