sap.ui.controller("zmrp_pcore.materialStockDetails", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zmrp_pcore.materialStockDetails
*/
	onInit: function() {


		var jsonModel = new sap.ui.model.json.JSONModel("zmrp_pcore/data/product.json");
			sap.ui.getCore().setModel(jsonModel,"detailProduct");	


						

	},

	onBack : function(){

		app.back();

	},
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zmrp_pcore.materialStockDetails
*/
	onBeforeRendering: function() {

					var oChartModel = new sap.ui.model.json.JSONModel("zmrp_pcore/data/chart.json");
					var oVizFrame = this.oVizFrame = this.byId("idVizFrame");

					oVizFrame.setVizProperties({
					    plotArea : {
					        dataLabel : {
					            visible : true
					        }
					    },
					    valueAxis : {

					        title : {
					            visible : true
					        }
					    },
					    categoryAxis : {
					        title : {
					            visible : true
					        }
					    },
					    legend: {
	                            title: {
	                                visible: false
	                            },
	                            label: {
	                                text: {
	                                      positiveValue: "Hours"
	                                }
	                            }
					    },
					    title : {
					        visible : true,
					        text : 'Stock Quantity'
					    }

					});

					oVizFrame.setModel(oChartModel,"chartStock");

	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zmrp_pcore.materialStockDetails
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zmrp_pcore.materialStockDetails
*/
//	onExit: function() {
//
//	}

});