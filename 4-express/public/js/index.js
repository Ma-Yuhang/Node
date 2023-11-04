const loginBtn = document.querySelector('.login')
const getStuBtn = document.querySelector('.getStudents')

loginBtn.onclick = function () {
  fetch('http://localhost:8080/api/login', {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify({
      loginId: 'admin',
      loginPwd: 123456
    })
  }).then(resp => resp.json()).then(res => {
    console.log(res);
  })
}

getStuBtn.onclick = function () {
  fetch('http://localhost:8080/api/student', {
    method: 'GET',
    credentials: 'include'
  }).then(resp => resp.json()).then(res => {
    console.log(res);
  })
}