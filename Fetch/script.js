async function fetchPosts() {
    try {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let posts = await res.json();
      posts = posts.slice(0, 10);
      for (const post of posts) {
        console.log(`Title: ${post.title}\nBody: ${post.body}`);
      }
    } catch (e) {
      console.log(e);
    }
}
  
fetchPosts();