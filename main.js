const arr = []

class Costumer {
    constructor(name, review) {
        this.name = name
        this.review = review
    }
}

const createReview = function (name, review) {
    const addReview = new Costumer(name, review);
    arr.push(addReview);
}

createReview("Dzolo", "Millie & James were very helpful and the response was very quick, brilliant")
createReview("Amy", "good readwell worth looking at")
createReview("John", "The usual good service !")
createReview("Kayle", "Once again you have been amazing especially in these trying times. Super fast delivery really pleased with my order")



/////////////////////////////////////////////////////////////////
const nickname = document.querySelector("p.name")
const opinion = document.querySelector(".review span")
const sendBtn = document.querySelector(".send")
const userReview = document.querySelector(".text-review")
const userName = document.querySelector(".text-name")

const addNewReview = (e) => {
    e.preventDefault();
    if (userName.value === "" || userReview.value === "") {
        alert('Add Your name and review')
    } else {
        createReview(userName.value, userReview.value);
        nickname.innerHTML = (arr[arr.length - 1].name);
        opinion.innerHTML = (arr[arr.length - 1].review);
        userName.value = "";
        userReview.value = "";
    }
}




sendBtn.addEventListener('click', addNewReview)




////////////////////////////////////////////////////////////////

const left = document.querySelector('.left')
const right = document.querySelector('.right')

const prev = () => {

    if (lastNumber === 0) {
        lastNumber = arr.length - 1
        nickname.innerHTML = (arr[lastNumber].name);
        opinion.innerHTML = (arr[lastNumber].review);
    } else {
        lastNumber--;
        nickname.innerHTML = (arr[lastNumber].name);
        opinion.innerHTML = (arr[lastNumber].review);

    }
}

const next = () => {
    if (lastNumber === arr.length - 1) {
        lastNumber = 0
        nickname.innerHTML = (arr[lastNumber].name);
        opinion.innerHTML = (arr[lastNumber].review);
    } else {
        lastNumber++;
        nickname.innerHTML = (arr[lastNumber].name);
        opinion.innerHTML = (arr[lastNumber].review);

    }
}
// const arrows = document.querySelectorAll('.arrow')

// const handleArrows = (e) => {
//     if (e.target.classList.contains('left')) {
//         console.log('left')
//     } else {
//         console.log('right')
//     }
//     // console.log('dfsf')
// }


// arrows.forEach = (arrow) => {
//     arrow.addEventListener('click', handleArrows(e))
// }
left.addEventListener('click', prev)
right.addEventListener('click', next)

///////////////////////////////////////////////////////////////


let lastNumber = arr.length - 1

const lastReview = () => {
    nickname.innerHTML = (arr[lastNumber].name)
    opinion.innerHTML = (arr[lastNumber].review)
}



lastReview()