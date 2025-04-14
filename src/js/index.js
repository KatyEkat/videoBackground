document.addEventListener("DOMContentLoaded", () => {
	const updateMaskRects = () => {
		const lines = document.querySelectorAll(".line");
		const container = document.querySelector(".container");
		const svgNS = "http://www.w3.org/2000/svg";
		const mask = document.querySelector("#mask");

		while (mask.childNodes.length > 1) {
			mask.removeChild(mask.lastChild);
		}

		lines.forEach((line) => {
			const svgLine = document.createElementNS(svgNS, "rect");
			const lineBox = line.getBoundingClientRect();
			const containerBox = container.getBoundingClientRect();

			const x = ((lineBox.left - containerBox.left) / containerBox.width) * 100;
			const y = ((lineBox.top - containerBox.top) / containerBox.height) * 100;
			const width = (lineBox.width / containerBox.width) * 100;
			const height = (lineBox.height / containerBox.height) * 100;

			svgLine.setAttribute("x", `${x}%`);
			svgLine.setAttribute("y", `${y}%`);
			svgLine.setAttribute("width", `${width}%`);
			svgLine.setAttribute("height", `${height}%`);
			svgLine.setAttribute("fill", "white");
			mask.appendChild(svgLine);
		});
	};

	window.addEventListener("load", updateMaskRects);
	window.addEventListener("resize", updateMaskRects);
});
