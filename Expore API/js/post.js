function loadPost(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(posts =>displayPost(posts))
}

function displayPost(posts){
    const postContainer = document.getElementById('post-container');
    for (const post of posts){
       const postDiv = document.createElement('div');
        postDiv.innerHTML = `
        <h4> user- ${post.userId}</h4>
        <h5>Post: title ${post.title}</h4>
        <p>Post Desprition ${post.body}</p>
        `;
        postContainer.appendChild(postDiv)
    }
}
loadPost();

function deletePost(){
    meth
}