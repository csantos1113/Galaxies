Ext.define('OUIsp.Galaxies.Util', {
	alternateClassName: 'Galaxies_Util',

	singleton: true,
	cobTHEME: {
		GRAY: {
			labelColor: "gray",
			borderColor: "gray",
			fillColor: "#FFFFFF",
			moonColor: ""
		},
		FUCHSIA: {
			labelColor: "red",
			borderColor: "red",
			fillColor: "red",
			moonColor: "red"
		},
		BLUE: {
			labelColor: "#157EFB",
			borderColor: "#157EFB",
			fillColor: "#FFFFFF",
			moonColor: "#71B0FB"
		},
		GREEN: {
			labelColor: "green",
			borderColor: "green",
			fillColor: "green",
			moonColor: "green"
		}
	},

	cobICON: {
		PLUS: 'plus',
		MINUS: 'minus',
		EXCLUDE: 'exclude'
	},

	cobLINE: {
		DOTTED: 'dotted',
		SOLID: 'solid'
	},

	cobLEVEL: {
		BIGGEST: 16,
		EXPANDED: 8,
		GALAXY: 4,
		PLANET: 2,
		SATELLITE: 1,
		HIDDEN: 0
	},

	constructor: function() {
		var me = this,
			obLEVEL = me.cobLEVEL;
		me.arOrderLevel = [
			obLEVEL.BIGGEST,
			obLEVEL.EXPANDED,
			obLEVEL.GALAXY,
			obLEVEL.PLANET,
			obLEVEL.SATELLITE,
			obLEVEL.HIDDEN
		];
	},

	fnuNextLevel: function(inuCurrentLevel) {
		var me = this,
			arOrderLevel = me.arOrderLevel,
			nuPosition;
		nuPosition = arOrderLevel.indexOf(inuCurrentLevel);
		if (nuPosition > 0) {
			return arOrderLevel[nuPosition - 1];
		}
		return inuCurrentLevel;
	},

	fnuPrevLevel: function(inuCurrentLevel) {
		var me = this,
			obLEVEL = me.cobLEVEL,
			arOrderLevel = me.arOrderLevel,
			nuPosition;
		nuPosition = arOrderLevel.indexOf(inuCurrentLevel);
		//Si la posición es la última
		if (nuPosition == arOrderLevel.length - 1) {
			//Se retorna esa misma posición
			return inuCurrentLevel;
		}
		//Si no, se retorna la siguiente posición
		return arOrderLevel[nuPosition + 1];
	},

	fblValidStyle: function(iobStyle) {
		var me = this;
		return iobStyle === me.cobTHEME.GRAY ||
			iobStyle === me.cobTHEME.FUCHSIA ||
			iobStyle === me.cobTHEME.BLUE ||
			iobStyle === me.cobTHEME.GREEN;
	},
	fblValidIcon: function(isbIconCfg) {
		var me = this;
		return isbIconCfg === me.cobICON.PLUS ||
			isbIconCfg === me.cobICON.MINUS ||
			isbIconCfg === me.cobICON.EXCLUDE;
	},
	fblValidLineType: function(isbLineType) {
		var me = this;
		return isbLineType === me.cobLINE.DOTTED ||
			isbLineType === me.cobLINE.SOLID;
	},

	fblIsGalaxy: function(inuLevel) {
		return inuLevel === this.cobLEVEL.GALAXY;
	}
});