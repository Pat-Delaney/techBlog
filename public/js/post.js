const editHandler = async(event) =>{
    event.preventDefault();
    const title = document.getElementById('edit_post_title').value.trim();
    const desc = document.getElementById('edit_post_desc').value.trim();
    const post = document.getElementById('confirm_button');
    const post_id = post.dataset.id;
    console.log(JSON.stringify( title, desc, post_id));
    if (title && desc && post_id) {
      const response = await fetch(`/api/posts`, {
        method: 'PUT',
        body: JSON.stringify( {title, desc, post_id}),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response);
      if (response.ok) {
        document.location.replace('/post/'+post_id);
      } else {
        alert('Failed to update post');
      }
    }
}
const commentHandler = async(event) =>{
  event.preventDefault();
  const desc = document.getElementById('edit_comment_desc').value.trim();
  const post = document.getElementById('comment_button');
  const post_id = post.dataset.id;
  console.log(JSON.stringify(desc, post_id));
  if (desc && post_id && user_id) {
    const response = await fetch(`/api/comments`, {
      method: 'PUT',
      body: JSON.stringify( {desc, post_id}),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace('/post/'+post_id);
    } else {
      alert('Failed to update post');
    }
  }
}


document
.getElementById('confirm_button')
.addEventListener('click', editHandler);

document
.getElementById('comment_button')
.addEventListener('click', commentHandler);