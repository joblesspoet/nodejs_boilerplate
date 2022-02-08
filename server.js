const app = require("express")();
const appconf = require("dotenv").config();
const port = process.env.NODE_SERVER_PORT || 3000;

const goalRoutes = require('./routes/goalsRoute');

app.use('/api/goals/', goalRoutes);

app.listen(port, (error, res) => {
  if (error) {
    console.log("Error in server start");
  } else {
    console.log(`server running at: ${port}`);
  }
});
