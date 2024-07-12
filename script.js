// Get elements
const profileButton = document.getElementById('profile-button');
const friendsButton = document.getElementById('friends-button');
const postsButton = document.getElementById('posts-button');
const profileSection = document.getElementById('profile-section');
const friendsSection = document.getElementById('friends-section');
const postsSection = document.getElementById('posts-section');
const createPostForm = document.getElementById('create-post-form');
const postContent = document.getElementById('post-content');
const postButton = document.getElementById('post-button');
const postsList = document.getElementById('posts-list');

// Add event listeners
profileButton.addEventListener('click', () => {
  profileSection.style.display = 'block';
  friendsSection.style.display = 'none';
  postsSection.style.display = 'none';
});

friendsButton.addEventListener('click', () => {
  profileSection.style.display = 'none';
  friendsSection.style.display = 'block';
  postsSection.style.display = 'none';
});

postsButton.addEventListener('click', () => {
  profileSection.style.display = 'none';
  friendsSection.style.display = 'none';
  postsSection.style.display = 'block';
});

createPostForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const post = postContent.value.trim();
  if (post!== '') {
    const postHTML = `
      <li>
        <img src="post-icon.gif" alt="Post Icon">
        <h3>New Post</h3>
        <p>${post}</p>
        <time>Just now</time>
      </li>
    `;
    postsList.innerHTML += postHTML;
    postContent.value = '';
  }
});

// Add some retro flair
postsList.style.listStyle = 'none';
postsList.style.padding = '0';
postsList.style.margin = '0';

const posts = postsList.children;
for (let i = 0; i < posts.length; i++) {
  posts[i].style.backgroundImage = 'url("post-bg.gif")';
  posts[i].style.padding = '10px';
  posts[i].style.borderBottom = '1px solid #ccc';
}
