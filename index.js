const app = require("./src/app");

const port = "https://workers-back-vercel.vercel.app/" || 8080;

// Listener
app.listen(port);

console.log(`Server running OK! on port ${port}`);

