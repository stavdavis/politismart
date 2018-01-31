module.exports = {
	//env var on Netlify set to: https://politismart-serverside.herokuapp.com (
	//env vars available on Netlify only after linking to github! -- under "Build & Deploy")
	API_BASE_URL: process.env.REACT_APP_API_BASE_URL || 
		//if working locally and you want the remote db rather than the local mongoDB, uncomment the following line
		"https://politismart-serverside.herokuapp.com" ||
    	"http://localhost:808d0"
};


