# ReactJS CountriesAPI

This is a small ReactJS application that consumes the  GeoDB Cities API. The application includes an initial page that lists all of the countries in a table, and each country has an image flag of the country, the name of the country, the country code, and a link to open every specific item.

The components are created with MUI (Material UI). Clicking on every country redirects the user to a specific page for that country. 

## Features

- GET Countries
- GET Cities
- Back Button linking
- Continent details 
- Links to other countries based on the same continent


## Installation 

1. Clone the repository:
```
git clone https://github.com/username/projectname.git
```

2. Install dependencies:
```
npm install
```

3. Start the server:
```
npm start
```

## Usage

Once the server is running, navigate to http://localhost:3000/ to view the application. 

## Time Spent

The test took a total of 12 hours to complete. The biggest challenges were fetching the cities and using the material UI library to render the pre-built components. When clicking on the countries name the page doesn't redirect correctly but if you enter the page again it will show the information. I managed to show the countries flag image but couldn't manage to show the information about the continent or the cities befcause I had problems with getting the response back so probably the problem is in the parameters because I think the logic on defining the routes is correct.

## Contributors

[Lirak Kerleshi](https://github.com/l1rak) 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.