import { pageTitle } from "../modules/pageTitle.js";

const header = `
<h1>${pageTitle} Notes</h1>
`;
document.querySelector("header").innerHTML += header;
