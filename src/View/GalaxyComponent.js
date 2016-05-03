Ext.define('OUIsp.Galaxies.View.GalaxyComponent', {

	xtype: 'OUIsp_Galaxies_Example_GalaxyComponent',

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
		blRequired: false,
		sbSolidConvention: null,
		sbDottedConvention: null
	},

	obCurrentGalaxy: null,
	arGalaxyRelations: []
});