const app = require("./src/app");

const PORT = "https://workers-back-vercel.vercel.app/" || 8080;

// Listener
app.listen(PORT, ()=>{
    console.log(`Server running OK! on port ${PORT}`);
});



