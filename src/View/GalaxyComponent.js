// incluye la libreria 'ol/ol.js
// NO BORRAR
ServerFileRequest.ReplaceMeLibrary("OUIspecialized/Galaxies/resources/libs/ol/ol.js");

Ext.define('OUIsp.Galaxies.View.GalaxyComponent', {
	extend: 'OUI.Container.Container',
	xtype: 'OUIsp_Galaxies_GalaxyComponent',

	config: {
		//Titulo del contenedor de galaxias
		sbTitle: null,
		//Indica si el componete debe estar en modo solo lectura
		blReadOnly: false,
		//Indica si la galaxia es requerida
		blRequired: false,
		//Convención para indicar que significa la línea continua
		sbSolidConvention: null,
		//Convención para indicar que significa la línea punteada
		sbDottedConvention: null,
		//Record de la galaxia inicial
		obRecord: null,
		//Campo de despliegue de la galaxia inicial
		sbDisplayField: null,
		//Tipo de linea de la galaxia inicial
		sbLineType: Galaxies_Util.csbLINE.SOLID,
		//Tema de la galaxia inicial
		obTheme: Galaxies_Util.cobTHEME.GRAY,
		//Indica si la galaxia inicial se destruye una vez quede vacío
		blDestroyIfEmpty: false,
		//Botones de acción de la galaxia inicial
		arActions: [],
		//Configuración por defecto de las galaxias hijas de la galaxia inicial
		defaultChildConfig: {},
		//Galaxias hijas de la galaxia inicial
		arChildren: []
	},

	obCurrentGalaxy: null,
	arGalaxyRelations: [],


	initialize: function() {
		//Adiciona una clase css para el componente
		//Adiciona el html base del componete: titulo y canvas
		var me = this;
		me.addCls("o-galaxy-comp");
		//Se llama al callParent para inicializar la clase genérica
		me.callParent();
		me.setHtml(me.fsbTemplate());

		me.buildInitialGalaxy();
	},

	fsbTemplate: function() {
		//Retorna el html base del componete: titulo y canvas
		//Si tiene sbTitle, adiciona la clase: 'has-title' al componente
		return "<div>Titulo</div><canvas class='galaxy-stage'></canvas><div>fobConvention</div>";
	},

	updateSbTitle: function(isbNew, isbOld) {
		//busca el DOM del titulo y le actualiza el contenido según el nuevo valor
		//Se hace toggle de la clase 'has-title' si llega o no llega el nuevo valor
	},

	updateSbSolidConvention: function(isbNewValue, isbOldValue) {
		this.buildConventions();
	},
	updateSbDottedConvention: function(isbNewValue, isbOldValue) {
		this.buildConventions();
	},
	buildConventions: function() {
		//Se obtiene las convenciones de Solido y de Punteado
		//Si almenos hay una, se adiciona la clase 'has-conventions' al componente
		//Sino, se remueve la clase 'has-conventions'
		//
		//Se construye el html que detalla las convenciones
		//Se escucha el evento tap sobre el botón que muestra las convenciones (toggleConventions)
	},


	updateBlReadOnly: function(iblNewValue, iblOldValue) {
		//Si no está inicializado, return
		//Si está inicializado: traspasar esta propiedad a la galaxia inicial
	},
	updateBlRequired: function(iblNewValue, iblOldValue) {
		//Si no está inicializado, return
		//Si está inicializado: traspasar esta propiedad a la galaxia inicial
	},
	updateObRecord: function(iobNewValue, iobOldValue) {
		//Si no está inicializado, return
		//Si está inicializado: traspasar esta propiedad a la galaxia inicial
	},
	updateSbDisplayField: function(isbNewValue, isbOldValue) {
		//Si no está inicializado, return
		//Si está inicializado: traspasar esta propiedad a la galaxia inicial
	},
	updateSbLineType: function(isbNewValue, isbOldValue) {
		//Si no está inicializado, return
		//Si está inicializado: traspasar esta propiedad a la galaxia inicial
	},
	updateObTheme: function(iobNewValue, iobOldValue) {
		//Si no está inicializado, return
		//Si está inicializado: traspasar esta propiedad a la galaxia inicial
	},
	updateBlDestroyIfEmpty: function(iblNewValue, iblOldValue) {
		//Si no está inicializado, return
		//Si está inicializado: traspasar esta propiedad a la galaxia inicial
	},
	updateArActions: function(iarNewValue, iarOldValue) {
		//Si no está inicializado, return
		//Si está inicializado: traspasar esta propiedad a la galaxia inicial
	},
	updateDefaultChildConfig: function(iobNewValue, iobOldValue) {
		//Si no está inicializado, return
		//Si está inicializado: traspasar esta propiedad a la galaxia inicial
	},
	toggleConventions: function() {
		//Adiciona u remueve la clase 'conventions-showed' al componente
	},
	fobTitle: function() {
		//Retorna el DOM del elemento titulo, lo cachea
	},
	fobArea: function() {
		//Retorna el DOM del elemento canvas, lo cachea
	},
	fobConvention: function() {
		//Retorna el DOM del elemento donde ver las convenciones, lo cachea
	},

	buildInitialGalaxy: function() {

	},

	fobGetInitialGalaxy: function() {

	}
});