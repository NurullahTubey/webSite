const posts = [
    { image: "post1.jpg", title: "Deneme1", author: "Nurullah", date: "Jan 18, 2019" },
    { image: "post2.webp", title: "Deneme2", author: "Nurullah", date: "Feb 5, 2024" },
    { image: "post3.webp", title: "Deneme3", author: "Nurullah", date: "Mar 10, 2023" }
  ];
  
  const container = document.getElementById("posts-container");
  
  posts.forEach(post => {
    container.innerHTML += `
      <div class="post">
        <img src="${post.image}" alt="${post.title}">
        <div class="post-content">
          <h3>${post.title}</h3>
          <p class="post-info">${post.author} • ${post.date}</p>
        </div>
      </div>
    `;
  });
  