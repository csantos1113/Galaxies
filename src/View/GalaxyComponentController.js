/**
 * This class is the main controller for the application. Here you can see
 * how to configure and use the controller. Normally, controllers are used 
 * for listen events and make request to database.
 *
 * TODO - Replace this content of this controller to suite the needs of your application.
 */
Ext.define('OUIsp.Galaxies.View.GalaxyComponentController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.galaxyComponentController',
	config: {},

	init: function(iobGalaxyComp) {
		var me = this;
		//eventos privados entre la vista y su ViewController
		iobGalaxyComp.on({
			ievAdjustTitle: 'AdjustTitle',
			ievupdateproperty: 'onUpdateGalaxyProp',
			scope: me
		});
		me.InitComponent(iobGalaxyComp);
	},

	/**
	 * @property {Object} [obStage=null]
	 * Marco de trabajo de createJS
	 * @private
	 */
	obStage: null,

	/**
	 * @property {Object} [obInitialGalaxy=null]
	 * Instancia de la galaxia inicial. Es decir, la galaxia padre.
	 * @private
	 */
	obInitialGalaxy: null,
	/**
	 * @property {Object} [obCurrentGalaxy=null]
	 * Instancia de la galaxia actual.
	 * Es decir, la galaxia que se está viendo actualmente en su totalidad.
	 * @private
	 */
	obCurrentGalaxy: null,

	/**
	 * @property {Array} [arGalaxyRelations=[]]
	 * Relaciones padre-hijo entre todas las galaxias
	 * @private
	 */
	arGalaxyRelations: [],

	InitComponent: function(iobGalaxyComp) {
		var me = this,
			obStage,
			obCanvas = iobGalaxyComp.fobCanvas();
		//Ajustamos el título
		me.AdjustTitle();

		obStage = me.obStage = new createjs.Stage(obCanvas.dom);
		obStage.autoClear = true;
		obStage.enableMouseOver();
		createjs.Touch.enable(obStage);
		//Crea la galaxia base
		me.BuildInitialGalaxy();
	},

	onTick: function(event) {
		var me = this;
		//console.log("tick tick tick!");
		me.obStage.update(event);
	},

	/**
	 * @method BuildInitialGalaxy
	 * Crea la galaxia inicial de todo el componente.
	 * Usa las propiedades configuradas en el componente para crear la galaxia.
	 */
	BuildInitialGalaxy: function() {
		var me = this,
			obView = me.getView();

		//Se guarda la galaxia en el caché
		me.obInitialGalaxy = me.obCurrentGalaxy = Ext.create('OUIsp.Galaxies.View.Galaxy', {
			blReadOnly: obView.getBlReadOnly(),
			obRecord: obView.getObRecord(),
			sbDisplayField: obView.getSbDisplayField(),
			sbLineType: obView.getSbLineType(),
			obTheme: obView.getObTheme(),
			arActions: obView.getArActions(),
			defaultChildConfig: obView.getDefaultChildConfig(),
			//El nivel por defecto para esta galaxia es: Galaxies_Util.cobLEVEL.GALAXY
			nuLevel: Galaxies_Util.cobLEVEL.GALAXY
		});
		if (obView.isPainted()) {
			me.onPainted();
		} else {
			obView.on({
				"painted": {
					fn: me.onPainted,
					single: true
				},
				scope: me
			});
			//Re-pintar cuando se modifique el tamaño del navegador
			Ext.Viewport.on("resize", me.Redraw, me);
		}
	},

	Redraw: function() {
		var me = this,
			obView = me.getView(),
			obEl = obView.element,
			obTitle = obView.fobTitle(),
			nuWidth = obEl.getWidth(),
			nuHeight = obEl.getHeight() - obTitle.getHeight(),
			obStage = me.obStage,
			obFirstChild = me.obInitialGalaxy,
			//Se obtiene el componente
			obComponent = obFirstChild.fobComponent(),
			obCanvas = obView.fobCanvas(),
			obMiddlePoint = {
				x: nuWidth / 2,
				y: nuHeight / 2
			};
		//Se ajusta el tamaño del canvas
		obCanvas.dom.setAttribute("width", nuWidth);
		obCanvas.dom.setAttribute("height", nuHeight);
		//Se ajusta el componente principal al centro del canvas
		obComponent.x = obMiddlePoint.x;
		obComponent.y = obMiddlePoint.y;
	},

	onPainted: function() {
		var me = this,
			//Se obtiene el componente
			obComponent = me.obInitialGalaxy.fobComponent();
		me.Redraw();
		//Se adiciona el hijo principal
		me.obStage.addChild(obComponent);
		createjs.Ticker.addEventListener("tick", me.onTick.bind(me));
	},

	/**
	 * @method AdjustTitle
	 * busca el DOM del título y le actualiza el contenido según el nuevo valor
	 * Se hace toggle de la clase 'has-title' si llega o no llega el nuevo valor
	 *
	 * @param  {String}    isbNewTitle [description]
	 */
	AdjustTitle: function(isbNewTitle) {
		var me = this,
			obGalaxyComp = me.getView(),
			obTitle = obGalaxyComp.fobTitle(),
			sbTitle = isbNewTitle || obGalaxyComp.getSbTitle() || "",
			sbOldTitle = obTitle.getHtml();
		//Si es el mismo título, termina
		if (sbTitle == sbOldTitle) {
			return;
		}
		var sbHasTitle = "has-title",
			sbMethod = Ext.isEmpty(sbTitle) ? "removeCls" : "addCls";
		//Se adiciona o remueve la clase del título
		obGalaxyComp[sbMethod](sbHasTitle);
		//Se ajusta el contenido del título
		obTitle.setHtml(sbTitle);
		//Reestructure
		me.Redraw();
	},

	onUpdateGalaxyProp: function(isbProperty, iobNewValue) {
		var me = this,
			obInitialGalaxy = me.obInitialGalaxy,
			sbMethod = "set" + isbProperty;
		if (obInitialGalaxy[sbMethod]) {
			obInitialGalaxy[sbMethod](iobNewValue);
		}
	},
	fobGetInitialGalaxy: function() {
		//Retorna la galaxia inicial
		return this.obInitialGalaxy;
	}
});