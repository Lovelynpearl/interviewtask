
import './App.css';

import { useState, useEffect } from 'react';

function App() {
const [displayedText, setDisplayedText] = useState('');
const text = "  Write a text asking a friend to be my plus one at a Wedding";


useEffect(() => {
let i = 0;

const intervalId = setInterval(() => {
if (i < text.length - 1) {
setDisplayedText((prevText) => prevText + text[i]);
i++;
} else {
clearInterval(intervalId);
}
}, 50);

return () => clearInterval(intervalId);
}, []);

return (
<div className="App">
<body className="bg-black">
<header className="bg-black">
<h1 className="text-red-400 text-[80px] font-bold">ChatGPT</h1>
</header>
<main>
<section className="hero">
<div className="text text-red-400">{displayedText}</div>
</section>
<div className="flex flex-col bg-black">
<div className="flex justify-center mb-[50px] text-[20px] font-bold text-red-400">Get Started</div>
<div className="flex justify-center items-center flex-row space-x-5">
<button className="btn1 bg-red-600 w-[30%] h-[50px] text-white">Log In</button>
<button className="btn2 bg-red-600 w-[30%] h-[50px] text-white">Sign Up</button>
</div>
</div>
</main>
<footer className="mt-[200px] text-white">
<p>&copy; Terms of use | Privacy policy</p>
</footer>
<script src="script.js"></script>
</body>
</div>
);
}

export default App;


   
   
   
   
   
   
   
   
   
  
