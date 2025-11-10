// Save favorite ideas
const ideasList = document.querySelector('.ideas-list');
const favoritesList = document.querySelector('.favorites-list');

ideasList.addEventListener('click', function(e) {
  if (e.target.tagName === 'LI') {
    const idea = e.target.textContent;
    const li = document.createElement('li');
    li.textContent = idea;
    favoritesList.appendChild(li);
    alert('Saved to favorites!');
  }
});

// Send message alert
const sendButton = document.querySelector('#send-message button');
sendButton.addEventListener('click', () => {
  const textarea = document.querySelector('#send-message textarea');
  if (textarea.value.trim() !== '') {
    alert(`Message sent: "${textarea.value}"`);
    textarea.value = '';
  } else {
    alert('Please write a message before sending!');
  }
});
