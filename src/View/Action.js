Ext.define('OUIsp.Galaxies.View.Action', {
	extend: 'Ext.Widget',
	xtype: 'OUIsp_Galaxies_Action',
	alternateClassName: 'OUIsp_GalaxyAction',
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
	statics: {
		cobICON: {
			PLUS: 'plus',
			MINUS: 'minus',
			EXCLUDE: 'exclude'
		}
	},
	setObTheme: function() {
		//Si ya está inicializado, warn diciendo que no se puede cambiar después de creado
	},

	fobComponent: function() {

	},


	///UTLITARIOS
	fblValidIcon: function(isbIcon) {
		var me = this,
			obICON = me.self.cobICON;
		return isbIcon === obICON.PLUS ||
			isbIcon === obICON.MINUS ||
			isbIcon === obICON.EXCLUDE;
	}
});