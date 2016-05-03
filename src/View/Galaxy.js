Ext.define('OUIsp.Galaxies.View.Galaxy', {

	xtype: 'OUIsp_Galaxies_Example_Galaxy',

	config: {
		obRecord: null,
		sbDisplayField: null,
		sbLineType: Galaxies_Util.csbLINE.SOLID,
		obTheme: Galaxies_Util.cobTHEME.GRAY,
		blDestroyIfEmpty: false,
		arActions: [],
		defaultChildConfig: {},
		arChildren: [],
		blReadOnly: false,
		/**
		 * @private
		 */
		obParentGalaxy: null,

		nuZoom: Galaxies_Util.cobZOOM.HIDDEN

	},


	updateBlReadOnly: function() {
		//Apagar o prender los botones de las acciones
	},

	setNuZoom: function(inuZoom) {
		//Se ejecuta solo si el componente no se ha inicializado
		//Se ejecuta solo si viene desde Evolve o Devolve
		//
		//De lo contrario, console.warn indicando que no se puede cambiar dinamicamente
	},
	updateNuZoom: function(inuNewZoom, inuOldZoom) {
		//Solo se ejecuta si se ha inicializado
		//Dispara el evento zoomchanged, informado si evoluciono o involuciono
		//Usado para que sus papas y sus hijos se adapten tambien
	},

	Evolve: function() {},
	Devolve: function() {},

	onChangeZoomChild: function(iblEvolved) {
		//Segun el cambio de mi hijo, identificar el estado en que yo debo quedar.
		//Si es el mismo en que yo YA estoy, no hago nada.
		//Si es diferente, debo evolucionar o involucionar segun mi hijo
	},
	onChangeZoomParent: function(iblEvolved) {
		//Segun el cambio de mi padre, identificar el estado en que yo debo quedar.
		//Si es el mismo en que yo YA estoy, no hago nada.
		//Si es diferente, debo evolucionar o involucionar segun mi padre
	},
});