const selectedImage = document.getElementById("image");
const btn = document.getElementById("btn");

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVzZXJAZW1haWwuY29tIiwidXNlcklkIjoiNjY0MjYyMjMyNmZiNDQxNGIyYjhlYjBjIiwiaWF0IjoxNzE1NzA3NzE5LCJleHAiOjE3MTU3MjIxMTl9.jFd97xlzemQrvf10-T5vx_G3tIN8yuxYq56TbPZun4k";

btn.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log(selectedImage.value);
  console.log(selectedImage.files);

  const formData = new FormData();
  formData.append("image", selectedImage.files[0]);
  formData.append("content", "Conteudo vindo de JavaScript");
  formData.append("title", "Titulo do JS");

  const result = await fetch("http://10.92.198.38:8080/feed/post", {
    method: "Post",
    body: formData,
    headers:{
        Authorization: 'Bearer '+ token
    }
  });

  console.log(result);
});
