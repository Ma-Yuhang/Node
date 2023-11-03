fetch('http://localhost:8080/api/student',{
  method: 'GET',
  headers: {
    a: 1
  },
  credentials: 'include'
}).then(resp => resp.json()).then(res => {
  console.log(res);
})