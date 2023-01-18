sap.ui.define([
	"sap/m/QuickViewCard"
], function (QuickViewCard) {
	"use strict";
	return QuickViewCard.extend("DragNDrop.controls.QuickViewCard", {
		metadata: {
			dnd: {
				draggable: true
			}
		},
		renderer: {}
	});
});