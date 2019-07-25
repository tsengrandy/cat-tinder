// the address of our rails backend, saved as a constant value, because we never want to accidentally change it
// Cloud9 users: This will be your IP address found under the 'Share' link
const BASE = 'http://localhost:3000'

let getFriends = function() {
// the function name getFriends is intended to remind you of the restful rails route --> GET '/friends'.
	return fetch(BASE + '/friends') // this would be equivalent to going to localhost:3000/friends in your browser. Do that - - what do you see?
		.then((resp) => {
           	// resp will be whatever you saw on the page localhost:3000/friends, it is the result of our fetch call
			let json = resp.json() // we want to make sure what we have is just the json part of the response
			console.log(json);
			return json
		})
}

export  {
	getFriends
}
