let pageTitle = window.location.href.match(/(\w*?)(?=\/index.html)/g)[0];

if (!isNaN(Number(pageTitle))) {
	pageTitle = `Week ${Number(pageTitle)}`;
} else {
	pageTitle = pageTitle[0].toUpperCase() + pageTitle.slice(1);
}

export { pageTitle };
