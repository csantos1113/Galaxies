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
			ievInitialize: 'InitComponent',
			ievupdateproperty: 'onUpdateGalaxyProp',
			scope: me
		});
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

	InitComponent: function() {
		var me = this,
			obView = me.getView(),
			obStage,
			obCanvas = obView.fobCanvas();

		obStage = me.obStage = new createjs.Stage(obCanvas.dom);
		obStage.autoClear = true;
		obStage.enableMouseOver();
		createjs.Ticker.addEventListener("tick", obStage);
		//Crea la galaxia base
		me.BuildInitialGalaxy();
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
			blDestroyIfEmpty: obView.getBlDestroyIfEmpty(),
			arActions: obView.getArActions(),
			defaultChildConfig: obView.getDefaultChildConfig(),
			//El nivel por defecto para esta galaxia es: Galaxies_Util.cobLEVEL.GALAXY
			nuLevel: Galaxies_Util.cobLEVEL.GALAXY
		});
		//Se obtiene el componente
		obComponent = me.obInitialGalaxy.fobComponent();
		//Se adiciona al obStage
		me.obStage.addChild(obComponent);
	},

	/**
	 * @method AdjustTitle
	 * busca el DOM del titulo y le actualiza el contenido según el nuevo valor
	 * Se hace toggle de la clase 'has-title' si llega o no llega el nuevo valor
	 *
	 * @param  {String}    isbNewTitle [description]
	 */
	AdjustTitle: function(isbNewTitle) {
		var me = this,
			obGalaxyComp = me.getView(),
			obTitle = me.fobTitle(),
			sbTitle = isbNewTitle || me.getSbTitle() || "",
			sbHasTitle = "has-title",
			sbMethod = Ext.isEmpty(sbTitle) ? "removeCls" : "addCls";
		//Se adiciona o remueve la clase del titulo
		obGalaxyComp[sbMethod](sbHasTitle);
		//Se ajusta el contenido del titulo
		obTitle.setHtml(sbTitle);
	},

	onUpdateGalaxyProp: function(isbProperty, iobNewValue) {
		var me = this,
			obInitialGalaxy = me.obInitialGalaxy,
			sbMethod = "set" + isbProperty;
		if (obInitialGalaxy[sbMethod]) {
			obInitialGalaxy[sbMethod](iobNewValue);
		}
	}
});