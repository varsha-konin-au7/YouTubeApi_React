import axios from 'axios';

const KEY = 'AIzaSyDeWvx7i-o7siMfbDxN832gD99Qjayyk10';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 25,
		key: KEY
	}
});
