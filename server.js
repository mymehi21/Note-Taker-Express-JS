const express = require('express');
const html_routes = require('./routes/routesHTML')
const api_routes = require('./routes/api-routes')
const PORT = process.env.PORT || 8000;
// set the port
const app = express();

// Express middleware 
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(html_routes)
app.use(api_routes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
