sap.ui.controller("testcamera.view.main", {

	onInit: function() {
		this.oView = this.getView();
		navigator.geolocation.getCurrentPosition(this.onGeoSuccess, this.onGeoError, {
			enableHighAccuracy: true
		});
	},
	onGeoSuccess: function(position) {
		// this.oView.byId("txtLatitude").setText(position.coords.latitude);
		// this.oView.byId("txtLongitude").setText(position.coords.longitude);
		// this.oView.byId("txtAltitude").setText(position.coords.altitude);
	},
	onGeoError: function() {
		console.log('code: ' + error.code + '\n' + 'message: ' + error.message + '\n');
	},
	onPhotoDataSuccess: function(imageData) {
		debugger;
		var oController = sap.ui.getCore().byId("idmain").getController();
		var myImage = oController.getView().byId("myImage");
		oController.getView()._image = imageData;
		myImage.setSrc("data:image/jpeg;base64," + imageData);
	},
	onPhotoURISuccess: function(imageURI) {
		var myImage = this.oView.byId("myImage");
		myImage.setSrc(imageURI);
	},
	onFail: function(message) {
		console.log("Failed because: " + message);
	},
	getPhoto: function() {
		var oNav = navigator.camera;
		oNav.getPicture(this.onPhotoURISuccess, this.onFail, {
			quality: 50,
			destinationType: oNav.DestinationType.FILE_URI,
			sourceType: oNav.PictureSourceType.PHOTOLIBRARY
		});
	},
	capturePhoto: function() {
		var oNav = navigator.camera;
		oNav.getPicture(this.onPhotoDataSuccess, this.onFail, {
			quality: 10,
			destinationType: oNav.DestinationType.DATA_URL
		});
	},

	EmailSend: function() {
debugger;
			this.toBlob(this.getView()._image);

		// var URL = "/sap/opu/odata/sap/ZCAMERAUI5_SRV/";
		// var OData = new sap.ui.model.odata.ODataModel(URL, true, "", "");
		// var query = "PICEMAILSet?$filter=Object" + "%20eq%20" + "%27" + 'rr' + "%27&$format=json";

		//   			OData.read(query, null, null, true, function(response) {

		// 	var newArray = response.results;
		// 	var model = new sap.ui.model.json.JSONModel({
		// 		"items": newArray
		// 	});

		// 	model.setSizeLimit(100);
		// 	oView.setModel(model, "itemModel");
		// }, function(error) {

		// });

	},

	toBlob: function(blob) {
	
		
		

	}
	


	// this.getView()._image.

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf testcamera.view.main
	 */
	//	onInit: function() {
	//
	//	},

	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf testcamera.view.main
	 */
	//	onBeforeRendering: function() {
	//
	//	},

	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf testcamera.view.main
	 */
	//	onAfterRendering: function() {
	//
	//	},

	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf testcamera.view.main
	 */
	//	onExit: function() {
	//
	//	}
	
	

});