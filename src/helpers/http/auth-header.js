export const authHeader = {
	headers: {
		Authorization: `Bearer ${localStorage.getItem('access_token')}`,
    	'Content-Type': 'application/json'
	}
};