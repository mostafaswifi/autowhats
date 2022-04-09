let comments = document.querySelectorAll('.comment');

comments.forEach(comment =>{
    comment.addEventListener("click",()=>{
        
        comment.children[1].classList.toggle("showMe")
    })
})

// let closers = document.querySelectorAll('.closer');
// closers.forEach(closer =>{
//     closer.addEventListener("click",()=>{
//         console.log(closer.parentElement.parentElement)
//         closer.parentElement.parentElement.classList.remove("showMe")
//     })
// })