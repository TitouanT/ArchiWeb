

const backgroundButton = document.getElementById("backButton");
const swapBackground = (
	() => {
		color = "#fff"
		return () => {
			if (color === "#fff") color = "#eee";
			else color = "#fff";
			document.body.style.background = color;
		};
	}
)();
backgroundButton.addEventListener("click", swapBackground);
// console.log(backgroundButton);
// document.appendChild(backgroundButton);

const doge = document.getElementById("dogeImg")
doge.style.height = '400px';
doge.style.width = '400px';
doge.addEventListener("mouseover", () => doge.src = "./doge_sunglasses.png");
doge.addEventListener("mouseout", () => doge.src = "./doge.png");
