// TO DO
document.addEventListener("DOMContentLoaded", () => {
  const close = document.querySelector(".close")
  const lis = document.querySelectorAll("li")
  lis.forEach(li => li.addEventListener("click", () => {
    if (li.className !== "checked") {
      li.className = "checked"
    }

  })
  )
})
