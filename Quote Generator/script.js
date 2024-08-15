const api_url="https://api.quotable.io/random"
const author = document.querySelector(".author");
const quoteContent = document.querySelector(".quotetxt")
console.log(quoteContent)
console.log(author)
let category = 'happiness'
const next = fetch('https://api.api-ninjas.com/v1/quotes',{
    headers:{'X-Api-Key': 'QezM0P3N74H/LRtP2NJrvw==SuqcFvawN5IogPic'}
})
.then((response)=>{
    return response.json();
})
.then((data)=>{
    quoteContent.innerHTML=`${data[0].quote}`
    author.innerHTML=data[0].author
    console.log(data)
})
.catch((error)=>{
    console.log(error)
})
const nextButton = document.querySelector('.next')
nextButton.addEventListener('click',(e)=>{
    fetch('https://api.api-ninjas.com/v1/quotes',{
        headers:{'X-Api-Key': 'QezM0P3N74H/LRtP2NJrvw==SuqcFvawN5IogPic'}
    })
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
        quoteContent.innerHTML=`${data[0].quote}`
        author.innerHTML=data[0].author
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    })
})
const tweet = document.querySelector('.twitter');
tweet.addEventListener('click',()=>{
    let tweet_url=`https://twitter.com/intent/tweet?url=${quoteContent.innerHTML} by ${author.innerHTML}`
    window.open(tweet_url,"_blank");
})
 const audio = document.querySelector(".speak")
 audio.addEventListener('click',()=>{
    let voice = new SpeechSynthesisUtterance(`${quoteContent.innerHTML} by ${author.innerHTML}`)
    speechSynthesis.speak(voice);
 })
 const copy = document.querySelector(".copy")
 copy.addEventListener("click",()=>{
   navigator.clipboard.writeText(quoteContent.innerHTML);
 })
 
