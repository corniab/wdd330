const footer = `
<p>
	&copy;${new Date().getFullYear()} Ben Cornia | 
	<a href="https://github.com/corniab/wdd330" rel="noreferrer nooperner">Github</a> | 
	<a href="https://byui.edu/" rel="noreferrer noopener">BYU-I</a>
</p>
`;

document.querySelector("footer").innerHTML += footer;
