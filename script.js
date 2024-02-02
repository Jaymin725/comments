let comments = [];

let usernameEl = document.getElementById("username");
let emailEl = document.getElementById("email");
let messageEl = document.getElementById("comment-msg");
let ratingEl = document.getElementById("rating");
let comment_button = document.getElementById("send-button");
let comment_list = document.getElementById("comment-list");

class Comment {
  constructor(username, email, message, rating) {
    this.username = username;
    this.email = email;
    this.message = message;
    this.rating = rating;
  }
}

function addComment() {
  let comment = new Comment(
    usernameEl.value,
    emailEl.value,
    messageEl.value,
    ratingEl.value
  );

  comments.unshift(comment);
  print_comments();
  // print_time();
}

function print_time() {
  let now = new Date();
  let time = ""

  let hours = now.getHours();
  let minutes = now.getMinutes();
  time += `${now.getDate()}/${now.getMonth()}/${now.getFullYear()}, ${(hours > 12) ? (hours - 12) : (hours)}:${(minutes < 10) ? ("0" + minutes) : (minutes)} ${(hours > 12) ? ("PM") : ("AM")}`;

  return time;
}

function print_comments() {
  comment_list.innerHTML = "";

  comments.forEach(comment => {
    comment_list.innerHTML += `<div class="p-3 border rounded-md">
    <p>${comment.username} <i class="text-gray-300 text-sm">(${comment.email})</i></p>
    <p class="border-y px-2 py-3 my-2 max-h-48 overflow-y-auto">${comment.message}</p>
    <p class="flex justify-between">
      <span class="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
          <path fill-rule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clip-rule="evenodd" />
        </svg>              
        ${comment.rating} Star
      </span>
      <i class="text-gray-300">${print_time()}</i>
    </p>
  </div>`;
  });
}

comment_button.addEventListener("click", addComment);
