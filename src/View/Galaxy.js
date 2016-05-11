Ext.define('OUIsp.Galaxies.View.Galaxy', {
	extend: 'Ext.Widget',
	xtype: 'OUIsp_Galaxies_Galaxy',
	alternateClassName: 'OUIsp_Galaxy',
	requires: [
		'OUIsp.Galaxies.View.GalaxyController',
		'OUIsp.Galaxies.View.Action'
	],
	controller: 'galaxyController',

	config: {
		obRecord: null,
		sbDisplayField: null,
		sbLineType: Galaxies_Util.cobLINE.SOLID,
		obTheme: Galaxies_Util.cobTHEME.GRAY,
		blReadOnly: false,
		nuLevel: Galaxies_Util.cobLEVEL.HIDDEN,
		blDestroyIfEmpty: false,
		defaultChildConfig: {},
		arChildren: [],
		arActions: [],
		/**
		 * @private
		 */
		obParent: null
	},
	statics: {
		cnuRADIUS_EXPANDED: 372.5,
		cnuRADIUS_GALAXY: 149,
		cnuRADIUS_PLANET: 41,
		cnuRADIUS_SATELLITE: 8.5,
		cnuLIMIT_CHILDREN: 6,
		cnuLIMIT_ACTIONS: 2,

		cobLINE: {
			DOTTED: 'dotted',
			SOLID: 'solid'
		},

		cobLEVEL: {
			BIGGEST: 16,
			EXPANDED: 8,
			GALAXY: 4,
			PLANET: 2,
			SATELLITE: 1,
			HIDDEN: 0
		}
	},


	updateBlReadOnly: function() {
		//Apagar o prender los botones de las acciones
		//u todos mis hijos, traspasarle este valor
	},

	setNuLevel: function(inuLevel, iblInternal) {
		var me = this;

		//Se ejecuta solo si el componente no se ha inicializado
		//Se ejecuta solo si viene desde Evolve o Devolve
		if (!me.initialized || iblInternal === true) {
			return this.callParent(arguments);
		}
		console.warn("Este valor no puede modificarse dinámicamente");
	},
	updateNuLevel: function(inuNewLevel, inuOldLevel) {
		//Solo se ejecuta si se ha inicializado
		//Dispara el evento levelchanged, informado si evoluciono o involuciono
		//Usado para que sus papas y sus hijos se adapten tambien
	},

	fobEvolve: function() {
		//Cambia el nivel hacia arriba
		return this.fobChangeLevel(true);
	},
	fobDevolve: function() {
		//Cambia el nivel hacia abajo
		return this.fobChangeLevel(false);
	},

	//@private
	fobChangeLevel: function(iblEvolve) {
		//Dependiendo del nivel en el que esté la galaxia actualmente, se mueve hacia su siguiente nivel (si iblEvolve es true)
		//se mueve hacia su nivel anterior (si iblEvolve es false)

		if (true /*El nivel a donde se movió es el mismo actual. Ejm: BIGGEST to BIGGEST*/ ) {
			//Retorna el mismo componente cacheado
			return this.fobComponent(true);
		}
		//Si no, se solicita el nuevo componente
		return this.fobComponent(true);
	},

	onChangeLevelChild: function(iblEvolved) {
		//Segun el cambio de mi hijo, identificar el estado en que yo debo quedar.
		//Si es el mismo en que yo YA estoy, no hago nada.
		//Si es diferente, debo evolucionar o involucionar segun mi hijo
	},
	onChangeLevelParent: function(iblEvolved) {
		//Segun el cambio de mi padre, identificar el estado en que yo debo quedar.
		//Si es el mismo en que yo YA estoy, no hago nada.
		//Si es diferente, debo evolucionar o involucionar segun mi padre
	},

	//
	fobComponent: function(iblFromCache) {
		var me = this,
			obSelf = me.self,
			obUtil = Galaxies_Util,
			obTheme = me.getObTheme(),
			contenedorBola;
		if (obUtil.fblIsGalaxy()) {
			var radius = obSelf.cnuRADIUS_GALAXY,
				ball = new createjs.Shape();
			contenedorBola = me.cacheGalaxyContainer;
			if (contenedorBola) {
				return contenedorBola;
			}
			console.log("wait fobComponent");
			contenedorBola = me.cacheGalaxyContainer = new createjs.Container();
			contenedorBola.name = 'contenedorBola';
			ball.name = me.getId();
			var obGraphic = ball.graphics
				.setStrokeStyle(3, 'round', 'round')
				.beginStroke(obTheme.borderColor);
			if (obUtil.fblIsDotted()) {
				obGraphic.setStrokeDash([5, 10], 0);
			}
			obGraphic.beginFill(obTheme.fillColor).drawCircle(0, 0, radius)
				.endStroke()
				.endFill();
			textoRadius = radius - 41;
			/*
			espacioTexto = new createjs.Shape();
			espacioTexto.name = "galaxiaTexto";
			espacioTexto.graphics.setStrokeStyle(1, 'round', 'round')
				.beginStroke("rgba(255, 255, 255, 1)")
				//.setStrokeDash([5, 10], 0)
				.beginFill("rgba(255, 0, 255, 0.1)")
				.drawCircle(0, 0, textoRadius)
				.endStroke()
				.endFill();
			espacioTexto.cursor = "pointer";*/

			//text.x = 0;
			/*wi = textoRadius * 2 - 40;
			he = textoRadius * 2 - 100;
			textBig = new txt.Text({
				text: 'Colombia',
				font: 'Arial',
				//singleLine: true,
				align: txt.Align.MIDDLE_CENTER,
				minSize: 24,
				lineHeight: 24,
				width: wi,
				height: he,
				size: 24,
				x: -textoRadius + 20,
				y: -textoRadius + 50,
				debug: true,
				fillColor: "green"
			});
			textBig.fillColor = "blue";*/
			//textBig.text = "Colombia";
			//containerText = new createjs.Container();
			//containerText.addChild(espacioTexto, textBig);
			contenedorBola.addChild(ball);
		}
		return contenedorBola;
	},

	farChildComponents: function() {

	},

	farActionComponents: function() {

	},

	farOrganizeChildren: function(iarChildComponents, iarActionComponents) {
		//Dependiendo de:
		//- mi nivel
		//- la cantidad de hijos
		//- la cantidad de acciones
		//
		//Se hace:
		//- Si mi nivel es galaxia:
		//  - Creación de otro container que contendrá de manera vertical: al inicio las acciones, y seguido los planetas
		//- Si mi nivel es planeta:
		//  - Mostrar máximo 6 lunas sobre mi circulo, y ocultar los botones
		//- Cualquier otro nivel: no hacer nada y devolver array vacío
	},

	fobAddAction: function() {},
	fobAddChild: function() {},



	//UTILITARIOSSS
	fnuNextLevel: function(inuCurrentLevel) {
		var me = this,
			arOrderLevel = me.self.arOrderLevel,
			nuPosition;
		nuPosition = arOrderLevel.indexOf(inuCurrentLevel);
		if (nuPosition > 0) {
			return arOrderLevel[nuPosition - 1];
		}
		return inuCurrentLevel;
	},

	fnuPrevLevel: function(inuCurrentLevel) {
		var me = this,
			obLEVEL = me.cobLEVEL,
			arOrderLevel = me.self.arOrderLevel,
			nuPosition;
		nuPosition = arOrderLevel.indexOf(inuCurrentLevel);
		//Si la posición es la última
		if (nuPosition == arOrderLevel.length - 1) {
			//Se retorna esa misma posición
			return inuCurrentLevel;
		}
		//Si no, se retorna la siguiente posición
		return arOrderLevel[nuPosition + 1];
	},


	fblValidLineType: function(isbLineType) {
		var me = this,
			obLINE = me.self.cobLINE;
		return isbLineType === obLINE.DOTTED ||
			isbLineType === obLINE.SOLID;
	},

	fblIsGalaxy: function() {
		var me = this,
			nuLevel = me.getNuLevel();
		return nuLevel === me.self.cobLEVEL.GALAXY;
	},
	fblIsPlanet: function() {
		var me = this,
			nuLevel = me.getNuLevel();
		return nuLevel === me.self.cobLEVEL.PLANET;
	},
	fblIsSatellite: function() {
		var me = this,
			nuLevel = me.getNuLevel();
		return nuLevel === me.self.cobLEVEL.SATELLITE;
	},

	fblIsDotted: function() {
		var me = this,
			sbLineType = me.getSbLineType();
		return sbLineType === me.self.cobLINE.DOTTED;
	}
}, function() {
	var me = this,
		obLEVEL = me.self.cobLEVEL,
		arOrderLevel = [
			obLEVEL.BIGGEST,
			obLEVEL.EXPANDED,
			obLEVEL.GALAXY,
			obLEVEL.PLANET,
			obLEVEL.SATELLITE,
			obLEVEL.HIDDEN
		];
	me.addStatics({
		arOrderLevel: arOrderLevel
	});
});