// Get the elements
const profileButton = document.getElementById('profile-button');
const friendsButton = document.getElementById('friends-button');
const postsButton = document.getElementById('posts-button');
const profileSection = document.getElementById('profile-section');
const friendsSection = document.getElementById('friends-section');
const postsSection = document.getElementById('posts-section');

// Add event listeners
profileButton.addEventListener('click', showProfile);
friendsButton.addEventListener('click', showFriends);
postsButton.addEventListener('click', showPosts);

// Function to show the profile section
function showProfile() {
  profileSection.style.display = 'block';
  friendsSection.style.display = 'none';
  postsSection.style.display = 'none';
}

// Function to show the friends section
function showFriends() {
  profileSection.style.display = 'none';
  friendsSection.style.display = 'block';
  postsSection.style.display = 'none';
}

// Function to show the posts section
function showPosts() {
  profileSection.style.display = 'none';
  friendsSection.style.display = 'none';
  postsSection.style.display = 'block';
}
