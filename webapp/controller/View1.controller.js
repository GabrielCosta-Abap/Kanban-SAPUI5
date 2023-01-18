sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
    "sap/ui/core/Fragment",
    'sap/ui/model/type/String',

],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller, JSONModel, Fragment, TypeString) {
		"use strict";

		return Controller.extend("kanban2.controller.View1", {
            me: {},

			onInit: function () {
				var oModel = new JSONModel("../model/data.json");
				this.getView().setModel(oModel);
			},

			onDrop: function (oInfo) {
				// oInfo.getSource().getParent().addItem(oInfo.getParameter('dragSession').getDragControl())
				oInfo.getSource().getParent().insertItem(oInfo.getParameter('dragSession').getDragControl(), 0)
			},

			onLightPress: (oEvent)=>{

				var sTheme = "sap_fiori_3"
				sTheme = sTheme == localStorage.getItem("theme") ? 'sap_fiori_3_dark' : sTheme
				
				sap.ui.getCore().applyTheme(sTheme);
                localStorage.setItem("theme", sTheme)
			},

			onCardPress: (oEvent)=>{

				var oView = oEvent.getSource().getParent().getParent().getParent().getParent().getParent().getParent().getParent()
                var that = oView.getController()
                var sName = "kanban2.view.DetailCard"
				var sPath = oEvent.getSource().getBindingContext().sPath

                // create dialog lazily
                if (!that.byId("openDialog")) {
                 // load asynchronous XML fragment
                 Fragment.load({
                  id: oView.getId(),
                  name: sName,
                  controller: that
                }).then(function (oDialog) {


					// oDialog.bindAggregation("content", {path: sPath})
					// oDialog.setTitle("oi")

                // connect dialog to the root view 
                //of this component (models, lifecycle)
                    oView.addDependent(oDialog);
                    oDialog.open();
                   });
                 }else{
                     that.byId("openDialog").open();
                }
            },
                 
            closeDialog: function () {
                this.byId("openDialog").close();
			},
			
			onPressFooterButton: ()=>{
				window.location.href = "https://www.linkedin.com/in/gabriel-da-costa-rosa-0b3a30174";

			}
						
		});
	});
