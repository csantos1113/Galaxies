Ext.define('OUIsp.Galaxies.Util', {
	alternateClassName: 'Galaxies_Util',

	singleton: true,

	cobTHEME: {
		GRAY: {
			labelColor: "gray",
			borderColor: "gray",
			fillColor: "#FFFFFF",
			satelliteColor: ""
		},
		MAGENTA: {
			labelColor: "red",
			borderColor: "red",
			fillColor: "rgba(210,0,4,0.2)",
			satelliteColor: "red"
		},
		BLUE: {
			labelColor: "#157EFB",
			borderColor: "#157EFB",
			fillColor: "#FFFFFF",
			satelliteColor: "#71B0FB"
		},
		GREEN: {
			labelColor: "green",
			borderColor: "green",
			fillColor: "rgba(0,210,4,0.2)",
			satelliteColor: "green"
		}
	},


	fblValidStyle: function(iobStyle) {
		var me = this;
		return iobStyle === me.cobTHEME.GRAY ||
			iobStyle === me.cobTHEME.MAGENTA ||
			iobStyle === me.cobTHEME.BLUE ||
			iobStyle === me.cobTHEME.GREEN;
	}
});