var canvas,
	stage,
	ball,
	text,
	total = 360;

x = y = nuPlanetas = 0;
cantidadPlanetas = 6;
planetaposicion = total / cantidadPlanetas;

function hacerPlaneta(galaxia, isbName, radioGalaxia, nuLunas) {
	galaxia.planetas = galaxia.planetas || [];
	galaxia.basePlaneta = galaxia.basePlaneta || (planetaposicion / 2);
	galaxia.basePlaneta += planetaposicion;
	var angle = galaxia.basePlaneta,
		radiusPlaneta = 41,
		x1 = x + radioGalaxia * Math.cos(angle * (Math.PI / 180)),
		y1 = y + radioGalaxia * Math.sin(angle * (Math.PI / 180));
	/*if (nuPlanetas == 6) {
		console.error("ya están los 6 hijos");
		return;
	}*/
	nuPlanetas++;
	var containerHijo = new createjs.Container();
	containerHijo.name = 'planeta' + nuPlanetas;
	containerHijo.x = x1;
	containerHijo.y = y1;
	containerHijo.angle = angle;
	var ball = new createjs.Shape();
	ball.graphics.setStrokeStyle(2, 'round', 'round')
		.beginStroke('rgb(129, 180, 251)')
		//.setStrokeDash([5, 10], 0)
		.beginFill("#FFFFFF").drawCircle(0, 0, radiusPlaneta)
		.endStroke()
		.endFill();
	ball.radiusPlaneta = radiusPlaneta;
	text = new createjs.Text(isbName, "12px Arial", 'rgb(129, 180, 251)');
	text.lineWidth = radiusPlaneta * 2;
	text.textBaseline = "middle";
	text.textAlign = "center";
	containerHijo.set({
		scaleX: 0,
		scaleY: 0
	});
	containerHijo.addChild(ball);
	containerHijo.addChild(text);
	for (var i = 0; i < nuLunas; i++) {
		inserteLuna(containerHijo, radiusPlaneta);
	}
	createjs.Tween.get(containerHijo, {
			loop: false
		})
		.to({
			scaleX: 1,
			scaleY: 1
		}, 500);
	galaxia.addChild(containerHijo);
	galaxia.planetas.push(containerHijo);
	return containerHijo;
}


function inserteLuna(planeta, radioPlaneta) {
	planeta.baseLuna = planeta.baseLuna || 30;
	planeta.baseLuna += 60;
	planeta.nuLunas = planeta.nuLunas || 0;
	planeta.nuLunas++;
	var angle = planeta.baseLuna,
		radioLuna = (17 / 2),
		x1 = x + radioPlaneta * Math.cos(angle * (Math.PI / 180)),
		y1 = y + radioPlaneta * Math.sin(angle * (Math.PI / 180)),
		luna = new createjs.Shape();
	luna.graphics.setStrokeStyle(1, 'round', 'round')
		.beginStroke('rgb(129, 180, 251)')
		.beginFill("#81B4FB").drawCircle(0, 0, radioLuna)
		.endStroke()
		.endFill();
	luna.set({
		name: 'luna' + planeta.nuLunas,
		x: x1,
		y: y1,
		scaleX: 0,
		scaleY: 0
	});
	luna.on("pressmove", handleMove, this);
	createjs.Tween.get(luna, {
			loop: false
		})
		.to({
			scaleX: 1,
			scaleY: 1
		}, 500);
	planeta.addChild(luna);
}

function inserteAccion(galaxia, radioGalaxia) {
	galaxia.planetas = galaxia.planetas || [];
	galaxia.basePlaneta = galaxia.basePlaneta || (planetaposicion / 2);
	galaxia.basePlaneta += planetaposicion;
	var angle = galaxia.basePlaneta,
		radiusAccion = 10,
		x1 = x + radioGalaxia * Math.cos(angle * (Math.PI / 180)),
		y1 = y + radioGalaxia * Math.sin(angle * (Math.PI / 180));
	/*if (nuPlanetas == 6) {
		console.error("ya están los 6 hijos");
		return;
	}*/
	nuPlanetas++;
	var containerAccion = new createjs.Container();
	containerAccion.name = 'accion' + nuPlanetas;
	containerAccion.x = x1;
	containerAccion.y = y1;
	containerAccion.angle = angle;
	var ball = new createjs.Shape();
	ball.graphics.setStrokeStyle(2, 'round', 'round')
		.beginStroke('rgb(129, 180, 251)')
		.beginFill("#FFFFFF").drawCircle(0, 0, radiusAccion)
		.endStroke()
		.endFill();
	ball.cursor = "pointer";
	ball.radiusAccion = radiusAccion;
	var text = new createjs.Text();
	text.font = "16px OpenIcons";
	text.color = "rgb(129, 180, 251)";
	text.text = '¬';
	text.textBaseline = "middle";
	text.textAlign = "center";
	containerAccion.set({
		scaleX: 0,
		scaleY: 0
	});
	containerAccion.addChild(ball);
	ball.addEventListener("mouseover", function() {
		stage.canvas.title = 'put your tooltip text here';
		stage.update();
	});
	containerAccion.addChild(text);
	createjs.Tween.get(containerAccion, {
			loop: false
		})
		.to({
			scaleX: 1,
			scaleY: 1
		}, 500);
	galaxia.addChild(containerAccion);
	galaxia.planetas.push(containerAccion);
	return containerAccion;
}


function handleMove() {
	console.log("hayayai");
}

function init() {

	//	createjs.MotionGuidePlugin.install(createjs.Tween);

	canvas = document.getElementById("testCanvas");
	stage = new createjs.Stage(canvas);
	stage.autoClear = true;
	stage.enableMouseOver();

	var radius = (298 / 2),
		centerY = canvas.height / 2,
		centerX = canvas.width / 2;
	window.bigRadius = radius;
	contenedorBola = new createjs.Container();
	contenedorBola.name = 'contenedorBola';
	contenedorBola.x = centerX;
	contenedorBola.y = centerY;

	ball = new createjs.Shape();
	ball.name = "galaxia";
	ball.graphics.setStrokeStyle(3, 'round', 'round')
		.beginStroke('gray')
		//.setStrokeDash([5, 10], 0)
		.beginFill("#FFFFFF").drawCircle(0, 0, radius)
		.endStroke()
		.endFill();
	textoRadius = radius - 41;
	espacioTexto = new createjs.Shape();
	espacioTexto.name = "galaxiaTexto";
	espacioTexto.graphics.setStrokeStyle(1, 'round', 'round')
		.beginStroke("rgba(255, 255, 255, 1)")
		//.setStrokeDash([5, 10], 0)
		.beginFill("rgba(255, 255, 255, 1)")
		.drawCircle(0, 0, textoRadius)
		.endStroke()
		.endFill();
	espacioTexto.cursor = "pointer";

	//text.x = 0;
	wi = textoRadius * 2 - 40;
	he = textoRadius * 2 - 120;
	text = new txt.Text({
		text: 'Colombia hola mundodfdfdfg',
		font: 'Arial',
		//singleLine: true,
		align: txt.Align.MIDDLE_CENTER,
		minSize: 27,
		lineHeight: 27,
		width: wi,
		height: he,
		size: 27,
		x: -textoRadius + 20,
		y: -textoRadius + 60,
		debug: false
	});
	containerText = new createjs.Container();
	containerText.setBounds(0, 0, wi, he);
	//text.lineWidth = wi;
	//text.y = -textoRadius + 45;
	//text.textBaseline = "middle";
	//text.textAlign = "center";

	containerText.addChild(espacioTexto, text);

	contenedorBola.addChild(ball, containerText);

	hacerPlaneta(contenedorBola, "Antioquia", radius, 6);
	hacerPlaneta(contenedorBola, "Valle del Cauca", radius, 6);
	hacerPlaneta(contenedorBola, "Santander", radius, 6);
	hacerPlaneta(contenedorBola, "Santander", radius, 6);
	hacerPlaneta(contenedorBola, "Santander", radius, 6);
	hacerPlaneta(contenedorBola, "Santander", radius, 6);
	inserteAccion(contenedorBola, radius);


	stage.addChild(contenedorBola);
	createjs.Ticker.addEventListener("tick", stage);
}

function mover(grados) {
	var planeta,
		radioGalaxia = (298 / 2),
		x1,
		y1,
		galaxia = contenedorBola.getChildByName("galaxia");
	contenedorBola.planetas = contenedorBola.planetas || [];
	var totalGiro = grados,
		gradosPorIteracion = 10,
		veces = totalGiro / gradosPorIteracion;
	for (var i = 0; i < contenedorBola.planetas.length; i++) {
		planeta = contenedorBola.planetas[i];
		planeta.accion = createjs.Tween.get(planeta, {
			loop: false
		});
		console.log("veces", veces);
		for (var j = 0; j < veces; j++) {
			planeta.angle += gradosPorIteracion - (30 / veces);

			x1 = x + radioGalaxia * Math.cos(planeta.angle * (Math.PI / 180));
			y1 = y + radioGalaxia * Math.sin(planeta.angle * (Math.PI / 180));
			planeta.accion.to({
				x: x1,
				y: y1
			}, 100);

		}
	}
}

function moverBonito() {
	var monton = null;
	for (var i = 0; i < 180; i++) {
		promesa = new Promise(function(resolve, reject) {
			mover(resolve);
		});
		if (!monton) {
			monton = promesa;
		} else {
			monton.then(function() {
				return promesa;
			});
		}

	}
}

function handleComplete(tween) {
	var ball = tween._target;

}