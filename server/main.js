import express from "express";
import Startup from "./Startup";
import DbContext from "./db/DbConfig";

const mongoose = require("mongoose")
//create server & socketServer
const app = express();
const port = process.env.PORT || 3000;


mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/dev-struggles' {
  useNewUrlParser: true,
  useUnifiedTopology: true
}
);

//Establish Socket
Startup.ConfigureGlobalMiddleware(app);
Startup.ConfigureRoutes(app);

//Connect to AtlasDB
DbContext.connect();

//Start Server
app.listen(port, () => {
  console.log("Server running on port:", port);
});