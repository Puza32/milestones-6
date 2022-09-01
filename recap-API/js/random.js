const loadusers = () =>{
    fetch ('https://randomuser.me/api/?results=7')
    .then(res => res.json())
    .then(data => displayUsers(data.results))
}

const displayUsers = users =>{
    const userContainer = document.getElementById('user-container')
    for(const user of users)
{
    const userDiv = document.createElement('div')
   userDiv.classList.add('user')
    userDiv.innerHTML = `
    <h3> User Name ${user.name}</h3>
    <p> Email: ${user.email}</P>
    <p>User Location: ${user.location.city} ${user.location.country}</p>
    `;
    userContainer.appendChild(userDiv)
}  
}

loadusers();