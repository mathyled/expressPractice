const express = require("express")
const morgan = require("morgan")
const app = express()
 app.use(morgan('tiny'))
app.listen(5000,  ()=> {
    console.log('Web server listening on port 5000')
  });

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
    // console.log("QUUERY2 REQ",req)
let object = {
    name:name,
    fullname:req.query
}
    res.json(object)
})

app.use(express.json())

app.get("/form3", function (req, res) {
    res.send(
      '<html><head> \
              <link href="/assets/style.css" rel="stylesheet"> \
              </head><body>\
                  <form method="POST" action="/form">\
                  Nombre <input name="nombre" type="text"><br>\
                  Apellido <input name="apellido" type="text"><br>\
                  Curso <input name="curso" type="text"><br>\
                  <input type="submit">\
                  </form>\
              </body></html>' 
    );
  });
  
  app.use(express.urlencoded({ extended: false }));
  app.post("/form3", function (req, res) {
    res.json(req.body);
    console.log(req.body)
  });


//   const cb1 = function (req, res, next) {
//     console.log('CB1')
//     next()
//   }


//*****CONFLICT RESOLUTION */

//Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

// This message happend when it is more that two response
app.get("/datos2",(req,res)=>{ 
    //http://localhost:5000/datos?name=mathias&lastname=ledesma&age=27
  console.log(req.query)
  let {name,lastname,age}= req.query;
  if(name && lastname && age){
      if(name==="mathias"){
          res.send(`${name} usa también tu segundo nombre!`)
      }
      if(age < 18){
          res.send(`${name} tenes ${age} años, No tenes permiso`)
      }
      res.send(`${name} ${lastname} tiene ${age} años`)
  }else{
      res.send("Falta informacion")
  }
});

// solution -> return in conditionals or delete response
  app.get("/datos",(req,res)=>{ 
      //http://localhost:5000/datos?name=mathias&lastname=ledesma&age=27
    console.log(req.query)
    let {name,lastname,age}= req.query;
    if(name && lastname && age){
        if(name==="mathias"){
           return res.send(`${name} usa también tu segundo nombre!`)
        }
        if(age < 18){
           return res.send(`${name} tenes ${age} años, No tenes permiso`)
        }
        res.send(`${name} ${lastname} tiene ${age} años`)
    }else{
        res.send("Falta informacion")
    }
});

