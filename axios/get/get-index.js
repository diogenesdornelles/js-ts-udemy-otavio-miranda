// https://www.youtube.com/watch?v=TKqkqKnL3fk&t=329s
// https://www.youtube.com/watch?v=KjL6K3vi7n8

// EXAMPLES
// https://axios-http.com/docs/api_intro

// REQUEST CONFIG
// https://axios-http.com/docs/req_config

// GET request for remote image in node.js

// Com parâmetros
// axios({
//   method: 'get',
//   url: 'db.json',
//   responseType: 'json'
// })
//   .then(response => {
//     console.log(response.data)
//   });


axios.get('db.json')
.then(response => {
  mainApplication(response.data)
});

// método get é o padrão
// axios('db.json')
// .then(response => {
//   console.log(response.data)
// });

function mainApplication(json){
  console.log(json)
}



