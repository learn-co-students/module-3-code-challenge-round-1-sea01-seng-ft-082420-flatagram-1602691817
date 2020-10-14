// write your code here

const photosUrl = 'http://localhost:3000/images/1'

const comments = document.createElement('ul')

const likesBtn = document.querySelector('.like-button')

const imageContainer = document.querySelector('.image-container')

getphotos();

function getphotos(){
    console.log('Hi')
    return fetch(photosUrl)
    .then(res => res.json())
    .then(photos => {
        console.log(photos)
        return photos
})}

function renderPhotos(photos){
    let img = document.querySelector('.image').setAttribute('src', photos.image)
    let h2 = document.querySelector('.title').textContent = photos.title
    let comment = document.querySelector('.comments').textContent = photos.comment

    likesBtn.setAttribute('id', photos.id)

    likesBtn.addEventListener('click', (e) => {
        likes(e)
    })
    debugger
}

function likes(e){
    e.preventDefault()

    let more = parseInt(e.target.previousElementSibling.innerText) + 1
    fetch(`http://localhost:3000/images/1/${e.target.id}`, {
        method: 'PATCH', 
        headers: {
            'Content-type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            'likesBtn': more
        })
    })
    .then(res => res.json())
    .then(like_obj => {
        e.target.previousElementSibling.innerText = `${more} likes`
    })
}

// function postComment(comment){
//     fetch(`${photosUrl}/comments`, {
//         method: 'POST', 
//         headers: { 
//             'Content-type': 'applicaton/json',
//             'Accept': 'application/json'
//         },
//         body: JSON.stringify({
//             'comments': comment.value
//         })
//     })
// }





getphotos().then(photos => {
    // console.log(photos)
    renderPhotos(photos)
    })