let pageTitle = window.location.href.match(/(\w*?)(?=\/index.html)/g)[0];

if (!isNaN(Number(pageTitle))) {
	pageTitle = `Week ${Number(pageTitle)}`;
} else {
	pageTitle = pageTitle[0].toUpperCase() + pageTitle.slice(1);
}

const layoutTemplate = `
<header>
<h1>${pageTitle} Notes</h1>
</header>
<nav>
<a id="home-link" href="../index.html">Home</a>
</nav>
<main>
<div class="section-wrapper">
<section class="notes"><h2>Notes</h2><ul class="notes-list"></ul></section>
<section class="links"><h2>Links</h2><ul class="links-list"></ul></section>
<section class="application"><h2>Application<h2></h2><pre><code class="example-code"></code></pre></section>
</div>
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
