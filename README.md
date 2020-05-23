### `H2 Console`


You can access the H2 console by navigating to localhost:8080/h2-console with the web browser. Use jdbc:h2:mem:testdb as the JDBC URL and leave the Password field empty in the Login window. Press the Connect button to log in to the console

http://localhost:8080/h2-console


### `API LINKS`

http://localhost:8080/api

### `CARS`

githttp://localhost:8080/cars

### `authenticated curl` 
http://localhost:8080/api -u admin
password admin 

### `JWT`

The first part is the header that defines the type of the token and the hashing algorithm.
The second part is the payload that, typically, in the case of authentication, contains information pertaining to the user.
The third part is the signature that is used to verify that the token hasn't been changed along the way. The following is an example of a JWT token:
eyJhbGciOiJIUzI1NiJ9.
eyJzdWIiOiJKb2UifD.
ipevRNuRP6HflG8cFKnmUPtypruRC4fc1DWtoLL62SY

https://github.com/jwtk/jjwt


The following URL demonstrates how to fetch cars by brand:

http://localhost:8080/api/cars/search/findByBrand?brand=Ford


after we run the application, we can call the /login endpoint with the POST method and, in the case of a successful login, we will receive a JWT token in the Authorization header:

POST 
http://localhost:8080/login
body 
{"username":"admin", "password":"admin"}
Authorization Bearer Token
Access-Control-Expose-Headers Authorization
returns 200
Authorization Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImV4cCI6MTU5MDI4MDE4NX0.kxdcRvgV3PEGhrdVPZT78Eh8_ACrBw6PNH32xZ3FiH8GPWv5OK0OIKu6lFkQ7eUPkcwlbGihQlUcA-j5g5urLA

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify