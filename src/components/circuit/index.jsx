import { useRef, useEffect } from "react";

const Circuit = () => {
	const canvasRef = useRef(null);
	let center = { x: null, y: null };
	let lines = [];
	let drawNo = 0;
	const linesNo = 50;
	const linesSize = 20;
	const framesPerUpdate = 6; // Ajusta este valor para controlar la velocidad (cuanto más alto, más lento)
	const fadeFactor = 0.02; // Ajusta este valor para controlar la rapidez del desvanecimiento

	useEffect(() => {
		const canvas = canvasRef.current;
		const ctx = canvas.getContext("2d");

		const setup = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;

			center.x = Math.round(canvas.width / 2);
			center.y = Math.round(canvas.height / 2);

			window.addEventListener("resize", onScreenResize);
		};

		const onScreenResize = () => {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;

			center.x = Math.round(canvas.width / 2);
			center.y = Math.round(canvas.height / 2);

			lines.forEach((line) => {
				line.location.x = center.x;
				line.location.y = center.y;
			});
		};

		const animate = () => {
			requestAnimationFrame(animate);
			drawNo++;
			if (drawNo % framesPerUpdate !== 0) return; // Actualizar cada X fotogramas

			draw();
		};

		const draw = () => {
			ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
			ctx.fillRect(0, 0, canvas.width, canvas.height);

			for (let idx = 0; idx < lines.length; idx++) {
				const line = lines[idx];
				const lineSize = linesSize;

				let alpha = Math.random() * 0.5 + 0.5; // Opacidad inicial aleatoria

				let dir = ~~(Math.random() * 3) * 90;
				if (idx % 4 === dir / 90) dir = 270;

				ctx.lineWidth = line.width;
				ctx.strokeStyle = `rgba(255, 255, 255, ${line.alpha})`;
				ctx.beginPath();
				ctx.moveTo(line.location.x, line.location.y);

				switch (dir) {
					case 0:
						line.location.y -= lineSize;
						break;
					case 90:
						line.location.x += lineSize;
						break;
					case 180:
						line.location.y += lineSize;
						break;
					case 270:
						line.location.x -= lineSize;
						break;
					default:
						break;
				}

				ctx.lineTo(line.location.x, line.location.y);

				if (line.location.x < 0 || line.location.x > canvas.width || line.location.y < 0 || line.location.y > canvas.height) {
					line.location.x = center.x;
					line.location.y = center.y;
					alpha = 1; // Reiniciar la opacidad si la línea está fuera de la pantalla
				} else {
					alpha -= fadeFactor; // Disminuir la opacidad de la línea para el efecto de desvanecimiento
				}
				line.alpha = alpha;

				ctx.stroke();
			}
		};

		const init = () => {
			setup();

			for (let i = 0; i < linesNo; i++) {
				lines.push({ location: { x: center.x, y: center.y }, width: Math.random() * 1 + 0.25, alpha: 1 }); // #0442BF -- #0f5fff
			}

			animate();
		};

		init();

		return () => window.removeEventListener("resize", onScreenResize);
		// eslint-disable-next-line
	}, []);

	return (
		<canvas
			ref={canvasRef} className="bg-white overflow-hidden absolute top-0 left-0 w-full h-full -z-0 opacity-35"
		/>
	);
};
export default Circuit;