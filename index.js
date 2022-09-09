const app = require("./src/app");

const port = process.env.PORT || 8080;

// Listener
app.listen(port);

console.log(`Server running OK! on port ${port}`);

