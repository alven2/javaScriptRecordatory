 // agarra la api
 // luego se le agrega un then para que lo `return` al res.json()
 fetch('https://jsonplaceholder.typicode.com/posts')
 .then(res => res.json())
 // luego el res.json() se le agrega un then para lo que se va hacer
 .then((data) => {
     console.log(data)
 })