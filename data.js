var express = require("express");
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
var port = process.env.PORT||2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

let baseURL = "https://jsonplaceholder.typicode.com";
let baseURL2 = "https://repo-8qu2.onrender.com/studentServer";
let axios = require("axios");

app.get("/posts",function(req,res){
    axios.get(baseURL+"/posts").then((response)=>{
        res.send(response.data);
    })
    .catch((error)=>{
        if(error.response){
            let {status,statusText} = error.response;
            res.status(status).send(statusText);
        }else res.status(404).send(error);
    })
    
})
app.get("/posts/:id",function(req,res){
    let {id} = req.params;
    axios.get(`${baseURL}/posts/${id}`).then((response)=>{
        res.send(response.data);
    })
    .catch((error)=>{
        if(error.response){
            let {status,statusText} = error.response;
            res.status(status).send(statusText);
        }else res.status(404).send(error);
    })
    
})
app.get("/posts/:postId/comments",function(req,res){
    let {postId} = req.params;
    axios.get(`${baseURL}/posts/${postId}/comments`).then((response)=>{
        res.send(response.data);
    })
    .catch((error)=>{
        if(error.response){
            let {status,statusText} = error.response;
            res.status(status).send(statusText);
        }else res.status(404).send(error);
    })
    
})
app.get("/comments",function(req,res){
    let {postId} = req.query;
    let params={};
    if(postId) params.postId = postId;
    axios.get(baseURL+"/comments",{params:params}).then((response)=>{
        res.send(response.data);
    })
    .catch((error)=>{
        if(error.response){
            let {status,statusText} = error.response;
            res.status(status).send(statusText);
        }else res.status(404).send(error);
    })
    
})
app.post("/posts",function(req,res){
    let body = req.body;
    axios.post(baseURL + "/posts" , body).then((response)=>{
        res.send(response.data);
    })
    .catch((error)=>{
        if(error.response){
            let {status,statusText} = error.response;
            res.status(status).send(statusText);
        }else res.status(404).send(error);
    })
    
})
app.put("/posts/:id",function(req,res){
    let {id} = req.params;
    let body = req.body;
    axios.put(`${baseURL}/posts/${id}`, body).then((response)=>{
        res.send(response.data);
    })
    .catch((error)=>{
        if(error.response){
            let {status,statusText} = error.response;
            res.status(status).send(statusText);
        }else res.status(404).send(error);
    })
    
})
app.delete("/posts/:id",function(req,res){
    let {id} = req.params;
    axios.delete(`${baseURL}/posts/${id}`).then((response)=>{
        res.send(response.data);
    })
    .catch((error)=>{
        if(error.response){
            let {status,statusText} = error.response;
            res.status(status).send(statusText);
        }else res.status(404).send(error);
    })
    
})

app.get("/getToken",function(req,res){
    axios.get(baseURL2+"/getToken").then(function(response){
      res.send(""+response.data);
    })
    .catch(function(error){
      if(error.response){
        let {status,statusText} = error.response;
        res.status(status).send(statusText);
      }else res.status(404).send(error);
    })
  })
  app.get("/students",function(req,res){
    let token = req.headers["authorization"];
    axios.get(baseURL2+"/students",{headers:{authorization:token}}).then(function(response){
      res.send(response.data);
    })
    .catch(function(error){
      if(error.response){
        let {status,statusText} = error.response;
        res.status(status).send(statusText);
      }else res.status(404).send(error);
    })
  })
  app.get("/students/:id",function(req,res){
    let {id} = req.params;
    let token = req.headers["authorization"];
    axios.get(`${baseURL2}/students/${id}`,{headers:{authorization:token}}).then(function(response){
      res.send(response.data);
    })
    .catch(function(error){
      if(error.response){
        let {status,statusText} = error.response;
        res.status(status).send(statusText);
      }else res.status(404).send(error);
    })
  })
  app.get("/students/course/:name",function(req,res){
    let {name} = req.params;
    let token = req.headers["authorization"];
    axios.get(`${baseURL2}/students/course/${name}`,{headers:{authorization:token}}).then(function(response){
      res.send(response.data);
    })
    .catch(function(error){
      if(error.response){
        let {status,statusText} = error.response;
        res.status(status).send(statusText);
      }else res.status(404).send(error);
    })
  })
  app.post("/students",function(req,res){
    let body = req.body;
    let token = req.headers["authorization"];
    axios.post(baseURL2 + "/students",body,{headers:{authorization:token}}).then(function(response){
      res.send(response.data);
    })
    .catch(function(error){
      if(error.response){
        let {status,statusText} = error.response;
        res.status(status).send(statusText);
      }else res.status(404).send(error);
    })
  })
  app.put("/students/:id",function(req,res){
    let {id} = req.params;
    let body = req.body;
    let token = req.headers["authorization"];
    axios.put(`${baseURL2}/students/${id}`,body,{headers:{authorization:token}}).then(function(response){
      res.send(response.data);
    })
    .catch(function(error){
      if(error.response){
        let {status,statusText} = error.response;
        res.status(status).send(statusText);
      }else res.status(404).send(error);
    })
  })
  app.delete("/students/:id",function(req,res){
    let {id} = req.params;
    let token = req.headers["authorization"];
    axios.delete(`${baseURL2}/students/${id}`,{headers:{authorization:token}}).then(function(response){
      res.send(response.data);
    })
    .catch(function(error){
      if(error.response){
        let {status,statusText} = error.response;
        res.status(status).send(statusText);
      }else res.status(404).send(error);
    })
  });
  