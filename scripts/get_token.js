// Small helper to register and login, printing the returned JWT
(async function(){
  try{
    const base = 'http://localhost:5000';
    const regRes = await fetch(base + '/api/auth/register', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify({name:'Harish', email:'harishbabu.jobs@gmail.com', password:'Password1!'})
    });
    const regBody = await regRes.text();
    console.log('== REGISTER ==');
    console.log('Status:', regRes.status);
    console.log(regBody);

    const loginRes = await fetch(base + '/api/auth/login', {
      method: 'POST',
      headers: {'content-type':'application/json'},
      body: JSON.stringify({email:'harishbabu.jobs@gmail.com', password:'Password1!'})
    });
    const loginBody = await loginRes.text();
    console.log('\n== LOGIN ==');
    console.log('Status:', loginRes.status);
    console.log(loginBody);

    try{
      const j = JSON.parse(loginBody);
      if(j.token){
        console.log('\nEXTRACTED_TOKEN:\n' + j.token);
      } else {
        console.log('\nNo token returned in login response');
      }
    }catch(e){
      console.error('Failed to parse login JSON:', e);
    }
  }catch(err){
    console.error('Request error:', err);
  }
})();
