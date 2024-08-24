// Import of the Express application instance
import app from '../app';

// Identification of the port to listen on
const PORT = process.env.PORT || 3000;

// Starts server and begins listening for request on PORT
app.listen(PORT, () => {
  console.log(`Server is Listening on port http://localhost:${PORT}`);
})


