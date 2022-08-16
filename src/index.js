const express = require('express');
const app=express();
app.use(express.json())
const port=3000;
const Books=[
    {id :0, author:"Chinua Achebe",title: "Things Fall Apart"},
    {id:1, author: "Hans Christian Andersen", title: "Fairy tales"}, 
    { id:2,author: "Dante Alighieri",title: "The Divine Comedy"}   
            ]


app.get('/', (req, res) => {
       res.send( Books );
    });

app.get('/:id', (req,res)=>{  //show details
    const b=Books.find(c =>c.id===parseInt(req.params.id))
    res.send(b);
})
 
 app.post('/', (req, res) =>{ //adding book
        const book= {
            id: Books.length,
            author: req.body.author,
            title: req.body.title
        };
          Books.push(book);
        res.send(book);
    });
 
 app.delete('/:id',  (req, res) => {
    const book=Books.find(c =>c.id===parseInt(req.params.id))
      const index= Books.indexOf(book);
      Books.splice(index,1);

       res.send(book);
    });
app.listen(port);
 


