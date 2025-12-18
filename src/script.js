const titleSelector = "h1#francesco-saccone";
const title = document.querySelector(titleSelector);
const speaker = document.createElement("img");
const style = document.createElement("style");

speaker.src = "/public/speaker.svg";
speaker.alt = "Audio";

title.insertAdjacentText("afterbegin", " ");
title.insertAdjacentElement("afterbegin", speaker);

style.textContent = `
	${titleSelector}:hover {
		cursor: pointer;
	}

	${titleSelector} > img {
		filter: var(--fgdimfilter);
		transition: filter var(--transitiontime);
	}

	${titleSelector}:hover > img {
		filter: var(--fgfilter);
	}
`;
document.head.appendChild(style);

title.addEventListener("click", () => {
	const audio = new Audio("/public/francescosaccone.wav");

	audio.play();
});
