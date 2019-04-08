let id= 0
let books=[
  {
    id: id++,
    title: "harry potter", 
    author: "JK Rowling"

  },
  {
    id: id++,
    title: "The Great White North", 
    author: "Theo Von"

  },
  {
    id: id++,
    title: "Joe Rogan", 
    author: "asdflkjasdlfkj"

  },
  {
    id: id++,
    title: "Harry Potter II", 
    author: "JK Rowling"

  },

]





module.exports= {

create: (request, response)=> {
  let newBook= {
    id: id, 
    author: request.body.author, 
    title: request.body.title
  }
  books.push(newBook)
  id++

  response.send(books)
},


read: (request, response) => {
  response.send(books)
}, 

update:(request, response)=> {
  
  console.log(request.body)
  console.log(request.params.id)
  let id = request.params.id
  let {title, author}= request.body;

  for (let i=0; i<books.length; i++){

    if(+books[i].id===+request.params.id){
      books.splice(i, 1, {title, author, id})
      
    }
  }
// books.push({title, author, id})
  response.send(books)

  
  //takes in id
  //finds item in books array
  //adds stuff off body to new 
  // let {id} = request.params;
  // let newText= request.body.title
  // let newAuthor= request.body.author  
  // let eToModify=books.find((element, id)=>{
  //   return +element.id===+request.params.id
  // })

  // eToModify= {
  //   author: newAuthor, 
  //   title:newText, 
  //   id:id
  // }


}, 

destroy: (request, response)=> {
  //get id off params
  //find element in books array that has matching id. 
  for (let i=0; i<books.length; i++) {
    if(+books[i].id===+request.params.id){
     books.splice(i, 1) 
    }
  }
  response.send(books)
}, 





}