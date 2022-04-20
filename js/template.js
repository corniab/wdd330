const weekNum = window.location.href.slice(-13, -11);

const layoutTemplate = `
<header>
<h1>Week ${weekNum} Notes</h1>
<a id="home-link" href="/index.html">Home</a>
</header>
<main>
<ol class="directory"></ol>
</main>
<footer>
<p>
	&copy;<span id="year"></span> Ben Cornia |
	<a href="https://github.com/corniab/wdd330" rel="noreferrer nooperner">Github</a> |
	<a href="https://byui.edu/" rel="noreferrer noopener">BYU-I</a>
</p>
</footer>
`;

const body = document.querySelector("body");
body.innerHTML = layoutTemplate;

console.log("hello");
