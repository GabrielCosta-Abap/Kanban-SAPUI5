sap.ui.define([
	"sap/m/Panel"
], function (Panel) {
	"use strict";
	return Panel.extend("DragNDrop.controls.Panel", {
		metadata: {
			dnd: {
				droppable: true
			}
		},
		renderer: {}
	});
});