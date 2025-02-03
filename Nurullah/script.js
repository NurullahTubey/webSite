const posts = [
  { image: "post1.jpg", title: "Deneme1", author: "Nurullah", date: "Jan 18, 2019", content: "Bu Deneme1 raporudur." },
  { image: "post2.webp", title: "Deneme2", author: "Nurullah", date: "Feb 5, 2024", content: "Bu Deneme2 raporudur." },
  { image: "post2.webp", title: "Deneme2", author: "Nurullah", date: "Feb 5, 2024", content: "Bu Deneme2 raporudur." },
  { image: "post3.webp", title: "Deneme3", author: "Nurullah", date: "Mar 10, 2023", content: "Bu Deneme3 raporudur." }
];

const container = document.getElementById("posts-container");

posts.forEach((post, index) => {
  container.innerHTML += `
    <div class="post" data-index="${index}">
      <img src="${post.image}" alt="${post.title}">
      <div class="post-content">
        <h3>${post.title}</h3>
        <p class="post-info">${post.author} • ${post.date}</p>
      </div>
    </div>
  `;
});

// Postlara tıklama olayı ekle
document.querySelectorAll(".post").forEach(postElement => {
  postElement.addEventListener("click", function () {
    const postIndex = this.dataset.index;
    localStorage.setItem("selectedPost", JSON.stringify(posts[postIndex]));
    window.location.href = "post.html";
  });
});
const postsContainer = document.getElementById("posts-container");
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

// Sol ok ile kaydır
leftArrow.addEventListener("click", () => {
  postsContainer.scrollBy({ left: -300, behavior: "smooth" });
});

// Sağ ok ile kaydır
rightArrow.addEventListener("click", () => {
  postsContainer.scrollBy({ left: 300, behavior: "smooth" });
});
