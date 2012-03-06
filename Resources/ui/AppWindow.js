function AppWindow(title) {
	var self = Ti.UI.createWindow({
		title:title,
		backgroundColor:'white'
	});
	
	var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('openWindow'),
		top:20
	});
	self.add(button);
	
	button.addEventListener('click', function() {
		//containingTab attribute must be set by parent tab group on
		//the window for this work
		var newWindows = Ti.UI.createWindow({title: L('newWindow'),backgroundColor: 'white'});
		var text = Ti.UI.createTextArea({
				color:"#cccccc",
				value:"aca va el string",
				height : 70,
    			width : 300,
    			font : {fontSize:20,fontFamily:'Marker Felt', fontWeight:'bold'}
				});
		newWindows.add(text);
		self.containingTab.open(newWindows);
	});
	
	return self;
};

module.exports = AppWindow;
