/**
 * This class is the main controller for the application. Here you can see
 * how to configure and use the controller. Normally, controllers are used 
 * for listen events and make request to database.
 *
 * TODO - Replace this content of this controller to suite the needs of your application.
 */
Ext.define('OUIsp.Galaxies.Controller.BasicDataController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.exampleViewController',
	id: 'exampleViewControllerId',

	config: {},

	/**
	 * @method    onExampleTapIcon
	 * Se ejecuta cuando se realiza el evento 'tap' sobre el icono del componente.
	 * Despliega el componente especializado del Ejemplo
	 *
	 * @param     {Object}        iobField  Campo del componente
	 * @param     {Object}        iobTarget Elemento DOM del campo
	 *
	 * @private
	 *
	 * @docauthor MODIFICACIONES:
	 * @docauthor   FECHA           USUARIO     SAO         DESCRIPCIÓN
	 * @docauthor   DD-MM-YYYY      XXXXXXX     XXXXXX      Creación
	 */
	onExampleTapIcon: function(iobField, iobTarget) {
		/**
		 * Aquí debe incluir el código fuente de despliegue de su componente especializado.
		 *
		 */
		Messages.showMsg({
			msgType: Messages.csbERROR,
			message: I18N.fsbWrite('Seleccionó el icono del campo')
		});
	},

	/**
	 * @method    onExampleChange
	 * Se ejecuta cuando se lanza el evento 'change' sobre el campo.
	 *
	 * @private
	 *
	 * @docauthor MODIFICACIONES:
	 * @docauthor   FECHA           USUARIO     SAO         DESCRIPCIÓN
	 * @docauthor   DD-MM-YYYY      XXXXXXX     XXXXXX      Creación
	 */
	onExampleChange: function(isbValue) {
		Messages.showMsg({
			msgType: Messages.csbSUCCESS,
			message: I18N.fsbWrite('El valor del campo ha cambiado %s', isbValue)
		});
	},

	/**
	 * @method    onExampleFocus
	 * Se ejecuta cuando se lanza el evento 'focus' sobre el campo.
	 * Lanza el método {@link OUI.Util.UIUtilities#method-hideTitleAndToolbar hideTitleAndToolbar}  y el método
	 * {@link OUI.Util.FieldExtras#method-focusBottomField focusBottomField}
	 * para ocultar la barra de títulos y de herramientas y acomodar el campo en la mitad de
	 * la pantalla si se está ejecutando en celular.
	 *
	 * @private
	 *
	 * @docauthor MODIFICACIONES:
	 * @docauthor   FECHA           USUARIO     SAO         DESCRIPCIÓN
	 * @docauthor   DD-MM-YYYY      XXXXXXX     XXXXXX      Creación
	 */
	onExampleFocus: function() {
		//Oculta cualquier mensaje de error al rededor del campo
		this.getView().hideErrorMessage();
	},

	/**
	 * @method    onExampleBlur
	 * Se ejecuta cuando se lanza el evento 'blur' sobre el campo.
	 * <br/>Lanza el método {@link OUI.Util.UIUtilities#method-hideTitleAndToolbar hideTitleAndToolbar}
	 * de {@link OB.Utilities.Utilities} para mostrar la barra de títulos y de herramientas si se está
	 * ejecutando en celular.
	 *
	 * @private
	 *
	 * @docauthor MODIFICACIONES:
	 * @docauthor   FECHA           USUARIO     SAO         DESCRIPCIÓN
	 * @docauthor   DD-MM-YYYY      XXXXXXX     XXXXXX      Creación
	 */
	onExampleBlur: function() {
		var obView = this.getView();
		//Muestra mensaje de error al rededor del campo
		obView.setErrorMessage(I18N.fsbWrite('El campo no puede quedar vacío'));
		obView.showErrorMessage();
	}
});