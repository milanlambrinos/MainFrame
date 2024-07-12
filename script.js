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
const avatarImage = document.getElementById('avatar-image'); // new element

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
  if (post !== '') {
    const postHTML = `
      <li>
        <h3>New Post</h3>
        <p>${post}</p>
        <time>Just now</time>
      </li>
    `;
    const postsList = document.getElementById('posts-list');
    postsList.innerHTML += postHTML;
    postContent.value = '';
  }
});

// Add event listener for avatar image
avatarImage.addEventListener('click', () => {
  console.log('Avatar image clicked!');
  // Add any additional functionality here
});
