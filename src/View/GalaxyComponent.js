Ext.define('OUIsp.Galaxies.View.GalaxyComponent', {

	xtype: 'OUIsp_Galaxies_Example_GalaxyComponent',

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
		blRequired: false,
		sbSolidConvention: null,
		sbDottedConvention: null
	},

	obCurrentGalaxy: null,
	arGalaxyRelations: []
});