var express = require("express");
let axios = require("axios");
var app = express();
app.use(express.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
    res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE, HEAD"
  );
  next();
});
const port = 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));


app.post('/callEndpoint', async (req, res) => {
  try{
    let {method, fetchURL, data} = req.body;
    let token = req.headers["authorization"];
    if(method === "GET"){
      let response = await axios.get(fetchURL,{headers:{Authorization:token}});
      res.json(response.data);
    }else if(method === "POST"){
      let response = await axios.post(fetchURL,data,{headers:{Authorization:token}});
      res.json(response.data)
    }else if(method === "PUT"){
      let response = await axios.put(fetchURL,data,{headers:{Authorization:token}});
      res.json(response.data)
    }else if(method === "DELETE"){
      let response = await axios.delete(fetchURL,{headers:{Authorization:token}});
      res.json(response.data)
    }
  }
  catch(error){
    if(error.response){
      let {status,statusText} = error.response;
      res.status(status).send(statusText);
    }
  }
});

