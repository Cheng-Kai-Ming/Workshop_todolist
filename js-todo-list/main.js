// TO DO

document.addEventListener("DOMContentLoaded", () => {
  const close = document.querySelector(".close")
  const lis = document.querySelectorAll("li")
  const list = document.querySelector("li")
  const span = document.querySelector(".close")
  const ul = document.querySelector("ul")


  lis.forEach(li => li.addEventListener("click", () => {
    if (li.className !== "checked") {
      li.className = "checked"
    }
  })
  )
  ul.addEventListener("click", (e) => {
    if (e.target.nodeName === "SPAN") {
      e.target.parentNode.remove()
    }



  })
  //console.log(list.innerHTML)
  //console.log(span)


})


  })
  )

 
})
