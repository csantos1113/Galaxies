Ext.define('OUIsp.Galaxies.Model.BasicDataModel', {

	extend: 'OB.Model.BaseModel',
	fields: [{
		/**
		 * property {string} [name=DISPLAY]
		 * Valor de despliegue de la galaxia
		 */
		name: "DISPLAY",
		display: I18N.fsbWrite('Etiqueta'),
		type: "string"
	}]
});