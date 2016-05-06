Ext.define('OUIsp.Galaxies.View.Action', {
	extend: 'Ext.Widget',
	xtype: 'OUIsp_Galaxies_Action',
	requires: [
		'OUIsp.Galaxies.View.ActionController'
	],
	controller: 'actionController',

	/**
	 * EVENTOS:
	 * - evtap: Se dispara cuando se toca el botón
	 */

	config: {
		openId: null,
		obTheme: null,
		sbIcon: null,
		sbTooltip: null
	},
	setObTheme: function() {
		//Si ya está inicializado, warn diciendo que no se puede cambiar después de creado
	},
	
	fobComponent: function() {

	}
});