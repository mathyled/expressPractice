const express = require("express")
const app = express()

app.listen(5000);

app.get("/",(req,res)=>{
    res.send("holaa mathias")
});

app.get("/api",(req,res)=>{
    let object = {
        studient: "mathias",
        lesson: "express",
        mood :"happy"
    };
    res.json(object)
})

app.get("/params/:name/:age",(req,res)=>{
    res.send(req.params)
});

app.get("/apiTwo",(req,res)=>{
    let object = {
        studient: "mathias",
        lesson: "express",
        mood :"happy"
    }
    res.send(object)
})

app.get("/example/b",
(req,res,next) =>{
    console.log("the response will be send by the next function..")
    next()
},
(req,res) =>{
    res.send("Hello from B!!")
}
)

const cb0 = function (req, res, next) {
    console.log('CB0')
    next()
  }
  
  const cb1 = function (req, res, next) {
    console.log('CB1')
    next()
  }
  
  const cb2 = function (req, res) {
    res.send('Hello from C!')
  }
  
  app.get('/example/c', [cb0, cb1, cb2])


  app.get("/api/:id",(req,res)=>{
      res.json({parametro: req.params.id})
  });

  app.get("/api2/:id",(req,res)=>{
    const {id} = req.params
    let object = {
        parametro: id
    }  
    res.json(object)
  });

  app.get("/api3/:name/:age",(req,res)=> {
      const {name,age} = req.params
      res.json({nombre:name,edad:age})
  });

  app.get("/api4/:name/:age",(req,res)=>{
      res.json({parametros:req.params})
  })

  app.get("/static",(req,res) =>{
      res.send(
        '<html><head> \
        <link href="./assets/style.css" rel="stylesheet"> \
        </head><body> \
            <p>Archivos estaticos rapido y facil!!</p>\
            <img src="./assets/dog.jpg">\
        </body></html>'
      )
  });


  app.use("/demo", function (req, res, next) {
    console.log("Hicieron un Request a " + req.url);
    next();
  });
 
  app.get("/query",(req,res)=>{
      res.json(req.query)
  })

  app.get("/query2",(req,res)=>{
    const {name} = req.query;
let object = {
    user:name,
    fullname:req.query
}
    res.json(object)
})