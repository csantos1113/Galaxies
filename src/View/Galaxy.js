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

		nuLevel: Galaxies_Util.cobLEVEL.HIDDEN

	},
	statics: {
		cnuRADIUS_EXPANDED: 372.5,
		cnuRADIUS_GALAXY: 149,
		cnuRADIUS_PLANET: 41,
		cnuRADIUS_MOON: 8.5
	},


	updateBlReadOnly: function() {
		//Apagar o prender los botones de las acciones
	},

	setNuLevel: function(inuLevel) {
		//Se ejecuta solo si el componente no se ha inicializado
		//Se ejecuta solo si viene desde Evolve o Devolve
		//
		//De lo contrario, console.warn indicando que no se puede cambiar dinamicamente
	},
	updateNuLevel: function(inuNewLevel, inuOldLevel) {
		//Solo se ejecuta si se ha inicializado
		//Dispara el evento zoomchanged, informado si evoluciono o involuciono
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

	}
});