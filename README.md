# Vinylog

Vinylog is web application that allows users to create a private and secure account to catalog their vinyl collection so when record shopping, they can check to see if they already own that album. By searching for an album title or artists name, users can retrieve a list of album release data including title, album image, genre, and release year. Users will be able to save results to their collection, view their collection, and remove them as well. 

### Link to App 
[https://vinylog.herokuapp.com/]

### Stack
-	React
-	Redux
-	Node
-	MongoDB
-	JWT Auth
-	Mocha/Chai testing on back-end

### 3rd party API
I used Discogs API to fetch data queried by the users search input. It is the worlds largest music database and marketplace.

API: [https://www.discogs.com/developers/]

Website: [https://www.discogs.com/]

### Screenshots

#### Mobile Small

Login Page iPhone

![Mobile Small Login Page](https://github.com/thinkful-ei21/mike_vinylog_client/blob/master/src/assets/images/mobile-login_s.png?raw=true "Mobile Small  Login Page")
Home Page iPhone

![Mobile Small Home Page](https://github.com/thinkful-ei21/mike_vinylog_client/blob/master/src/assets/images/mobile-home_s.png?raw=true "Mobile Small  Home Page")

Search Page iPhone

![Mobile Small Search Page](https://github.com/thinkful-ei21/mike_vinylog_client/blob/master/src/assets/images/mobile-search_s.png?raw=true "Mobile Small  Search Page")
Collection Page iPhone

![Mobile Small Collection Page](https://github.com/thinkful-ei21/mike_vinylog_client/blob/master/src/assets/images/mobile-collection_s.png?raw=true "Mobile Small  Collection Page")

#### Mobile Large

Login Page iPad

![Mobile Large Login Page](https://github.com/thinkful-ei21/mike_vinylog_client/blob/master/src/assets/images/mobile-m-login.png?raw=true "Mobile Large Login Page")

Home Page iPad

![Mobile Large Home Page](https://github.com/thinkful-ei21/mike_vinylog_client/blob/master/src/assets/images/mobile-m-home.png?raw=true "Mobile Large Home Page")

Search Page iPad

![Mobile Large Search Page](https://github.com/thinkful-ei21/mike_vinylog_client/blob/master/src/assets/images/mobile-m-search.png?raw=true "Mobile Large Search Page")

Collection Page iPad

![Mobile Large Collection Page](https://github.com/thinkful-ei21/mike_vinylog_client/blob/master/src/assets/images/mobile-m-collection.png?raw=true "Mobile Large Collection Page")

### Key Parts of the Project

#### Client

- Redux actions can be found in src/actions
- Redux reducers can be found in src/reducers
  - CombinedReducers can be found in src/reducers/index.js
- React components can be found in src/components
  - Components
    - Header
    - Register
    - Login
    - Landing Page
    - Dashboard
    - Search Results
    - Collection
- Client validation can be found in src/validators
- Redux store can be found in src/store
- 3rd party API fetch can be found in src/fetch-albums.js

#### Server

- Repo can be found at [https://github.com/thinkful-ei21/mike_vinylog_server]
- JWT authentication can be found in /auth/strategies
- Models can be found in /models
- Routes can be found in /routes
- Tests can be found in /tests
