Ext.define('OUIsp.Galaxies.View.Galaxy', {

	xtype: 'OUIsp_Galaxies_Example_Galaxy',

	config: {
		obRecord: null,
		sbDisplayField: null,
		sbLineType: Galaxies_Util.csbSOLID_LINE,
		obTheme: Galaxies_Util.cobGRAY_THEME,
		blDestroyIfEmpty: false,
		arActions: [],
		defaultChildConfig: {},
		arChildren: [],
		blReadOnly: false,
		/**
		 * @private
		 */
		obParentGalaxy: null

	},


	updateBlReadOnly: function() {
		//Apagar o prender los botones de las acciones
	}
});