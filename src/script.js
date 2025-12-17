const titleSelector = "h1#francesco-saccone";
const title = document.querySelector(titleSelector);
const style = document.createElement("style");

style.textContent = `
	${titleSelector}:hover {
		cursor: pointer;
	}
`;
document.head.appendChild(style);

title.addEventListener("click", () => {
	const audio = new Audio("/public/francescosaccone.wav");

	audio.play();
});
