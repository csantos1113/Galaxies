Ext.define('OUIsp.Galaxies.Util', {
	alternateClassName: 'Galaxies_Util',

	singleton: true,
	cobGRAY_THEME: {
		labelColor: "gray",
		borderColor: "gray",
		fillColor: "#FFFFFF",
		moonColor: ""
	},
	cobFUCHSIA_THEME: {
		labelColor: "",
		borderColor: "",
		fillColor: "",
		moonColor: ""
	},
	cobBLUE_THEME: {
		labelColor: "#157EFB",
		borderColor: "#157EFB",
		fillColor: "#FFFFFF",
		moonColor: "#71B0FB"
	},
	cobGREEN_THEME: {
		labelColor: "",
		borderColor: "",
		fillColor: "",
		moonColor: ""
	},

	csbPLUS_ICON: "plus",
	csbMINUS_ICON: "minus",
	csbEXCLUDE_ICON: "exclude",

	csbDOTTED_LINE: "dotted",
	csbSOLID_LINE: "solid",

	fobDefaultStyle: function() {
		return this.cobGRAY_THEME;
	},
	fobDefaultLine: function() {
		return this.csbSOLID_LINE;
	},
	fblValidStyle: function(iobStyle) {
		var me = this;
		return iobStyle === me.cobGRAY_COLOR ||
			iobStyle === me.cobFUCHSIA_THEME ||
			iobStyle === me.cobBLUE_THEME ||
			iobStyle === me.cobGREEN_THEME;
	},
	fblValidIcon: function(isbIconCfg) {
		var me = this;
		return isbIconCfg === me.csbPLUS_ICON ||
			isbIconCfg === me.csbMINUS_ICON ||
			isbIconCfg === me.csbEXCLUDE_ICON;
	},
	fblValidLineType: function(isbLineType) {
		var me = this;
		return isbLineType === me.csbDOTTED_LINE ||
			isbLineType === me.csbSOLID_LINE;
	}
});