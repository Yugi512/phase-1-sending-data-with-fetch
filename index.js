
function submitData(data,dataTwo){
    return fetch('http://localhost:3000/users', {
        method:'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        body: JSON.stringify({
            name: `${data}`,
            email : `${dataTwo}`,
        })
    })
    .then(res => res.json())
    .then(updatedRes => document.body.textContent=updatedRes.id)
    .catch(message => document.body.textContent=message)
}
