

const newPostHandler = async (event) => {
    event.preventDefault();
    const title = document.getElementById('title').value.trim();
    const desc = document.getElementById('desc').value.trim();
    const user = document.querySelector('.new_post_form');
    const user_id = user.dataset.id;
    if (title && desc && user_id) {
      const response = await fetch(`/api/posts`, {
        method: 'POST',
        body: JSON.stringify( {title, desc, user_id}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert('Failed to create post');
      }
    }
  };

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to delete post');
      }
    }
  };
  
document
.querySelector('.new_post_form')
.addEventListener('submit', newPostHandler);
  



