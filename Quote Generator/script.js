const api_url="https://api.quotable.io/random"
const author = document.querySelector(".author");
const quote = document.querySelector(".quotetxt")
console.log(quote)
console.log(author)
const next = fetch("https://api.quotable.io/random")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    quote.innerHTML=`${data.content}`
    author.innerHTML=data.author
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
const nextButton = document.querySelector('.next')
nextButton.addEventListener('click',(e)=>{
    fetch("https://api.quotable.io/random")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        quote.innerHTML=`${data.content}`
        author.innerHTML=data.author
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    })
})
const tweet = document.querySelector('.twitter');
tweet.addEventListener('click',()=>{
    let tweet_url=`https://twitter.com/intent/tweet?url=${quote.innerHTML} by ${author.innerHTML}`
    window.open(tweet_url,"_blank");
})
 const audio = document.querySelector(".speak")
 audio.addEventListener('click',()=>{
    let voice = new SpeechSynthesisUtterance(`${quote.innerHTML} by ${author.innerHTML}`)
    speechSynthesis.speak(voice);
 })
 const copy = document.querySelector(".copy")
 copy.addEventListener("click",()=>{
   navigator.clipboard.writeText(quote.innerHTML);
 })
 
