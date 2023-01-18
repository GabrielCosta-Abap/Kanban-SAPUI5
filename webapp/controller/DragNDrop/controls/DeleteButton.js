sap.ui.define([
	"sap/m/Button"
], function (Button) {
	"use strict";
	return Button.extend("DragNDrop.controls.DeleteButton", {
		metadata: {
			dnd: {
				// droppable: true
				draggable: true
			}
		},
		renderer: {}
	});
});