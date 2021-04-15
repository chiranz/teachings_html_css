// Javascript CHEATCODEURL
// https://gist.github.com/thegitfather/9c9f1a927cd57df14a59c268f118ce86
const postsDiv = document.getElementById("posts");

const getPosts = async () => {
  postsDiv.innerText = "Loading...";
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  const singlePost = posts[0];
  const singlePostDiv = document.createElement("div");
  const postHeading = document.createElement("h1");
  const postContent = document.createElement("p");
  const postHeadingText = document.createTextNode(singlePost.title);
  const postBodyText = document.createTextNode(singlePost.body);
  postsDiv.innerText = "";
  postHeading.appendChild(postHeadingText);
  postContent.appendChild(postBodyText);
  singlePostDiv.appendChild(postHeading);
  singlePostDiv.appendChild(postContent);
  postsDiv.appendChild(singlePostDiv);
};

getPosts();
