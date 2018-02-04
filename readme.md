# PolitiSmart

## Built by Stav Davis

### About PolitiSmart

PoltiSmart is an tool for individuals who want to make political contributions according to a set of causes they care about. For example, if you support LGBTQ rights and also are pro-life - it will help you find the lawmakers that fit that profile (there are 4 senators who match that profile, as of Jan 2018). It also sorts the matching lawmakers according to their re-election risk, so that you know where your contribution will make the most impact.

The current version has five preference options: Gun control, pro-life/choice, LGBTQ rights, Clean energy and small government - each with "support", "oppose" or "neutral" options. The current version has 100 US senators in its database. 

Future versions will have an expanded database of lawmakers (congress members, mayors, local officials, councilmembers, etc) and will have a sliding scale for each preference category, as well as more preference options. Future versions will also have a political contribution payment processing tool, for a one-stop-shop experience - divvying up your contribution according to the optimized breakdown of your preferences. 


### How to use PolitiSmart

For now, you can use PolitiSmart with or without registering and logging in, for demonstration purposes.

The login module is active (demonstrating authentication handling with JWTs), but the landing page has the full functionality of the protected dashboard page).

The user selects his/her preferences for any/all of the preference switches. Each action updates the list of "lawmaker cards" below. The cards display each lawmaker's profile regarding the five categories. The cards are sorted by order of "re-election" risk, so that the lawmakers who need the user's contribution the most appear first. Future versions will have a contribution payment processing tool, displaying the exact amount each lawmaker will recieve from the user, based on the optimized sorting.


### The code

* Frontend: 
	* ReactJS, Redux
		* Supporting packages: jwt-decode; react-bootstrap; react-router; react-spinkit; redux-form; redux-thunk; enzyme (testing); 
	* Deployed on Netlify: https://politismart.netlify.com/
	* API calls are made to https://politismart-serverside.herokuapp.com
* Backend: 
	* NodeJS with Express
	* Deployed on Heroku: https://politismart-serverside.herokuapp.com
	* Endpoints (all routed from server.js): 
		* '/senators':
			* GET '/standsFor' - takes a string such as: '/senators/standsFor?gunControl=100&proLife=0& ...', where 0=oppose, 100=support, 50=neutral
			* POST '/' - active endpoint, not used in current version of app 
			* PUT '/:id' - active endpoint, not used in current version of app
			* DELETE '/:id' - active endpoint, not used in current version of app 
		* '/users'
			* POST '/' - used to registed a new user
		* '/auth':
			* POST '/login' - returns and authentication token upon user's login
			* POST '/refresh' - refreshes the token, upon user's API request
		* See full documentation at: https://github.com/stavdavis/politismart-serverside
* Database: mongoDB via mLab
* The navigation bar was created using react-bootstrap (NavBar component) 
* Login, registration and authentication files were initially based on starter files compiled by @oampo.