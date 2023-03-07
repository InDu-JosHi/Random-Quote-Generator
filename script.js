const button = document.querySelector(".btn");
const text = document.querySelector(".text h1");
button.addEventListener("click",()=>{
    const myQuotes = [
        '"One that would have the fruit must climb the tree."',
        '" The only thing necessary for the triumph of evil is for good men to do nothing."',
        '"I am not a member of any organized political party. I am a Democrat."',
        '"Always remember that you are absolutely unique. Just like everyone else."',
        '“I am selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can not handle me at my worst, then you sure as hell do not deserve me at my best.”',
        '“Insanity is doing the same thing, over and over again, but expecting different results.”',
        '“There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.”'
    ]
    const quote = myQuotes[Math.floor(Math.random()*myQuotes.length)];
    text.textContent = quote;
})
