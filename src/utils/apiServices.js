import axios from 'axios';
let api={};

api.get =(url)=>{
  return new Promise((resolve,reject)=>{
    axios.get(url)
    .then(function (response) {
      resolve(response)
    })
    .catch(function (error) {
     reject(error)
    })
  })
}

export default api;