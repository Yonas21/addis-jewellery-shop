export const is_loggedin = () => {
	if (localStorage.getItem("user") !== null) {
		return true;
	}
	return false;
};

export const handleLogout = () => {
	localStorage.removeItem("user");
	localStorage.removeItem("validUntil");
};

export const checkValidity = () => {
	return localStorage.getItem("validUntil");
};
