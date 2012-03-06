function AppTabGroup() {
	//declare module dependencies
	//var AppWindow = require('ui/AppWindow');
	
	//create module instance
	var self = Ti.UI.createTabGroup();
	
	//create app tabs wins
	//var win1 = new AppWindow(L('home')),
	//	win2 = new AppWindow(L('settings'));
	var win1 =  Ti.UI.createWindow({
		title:L('home'),
		backgroundColor:'white'
	});

	var searchField = Ti.UI.createTextField({
		color:'#336699',
    	height:35,
    	top:10,
    	left:10,
    	width:250,
    	borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED
	});
	var button = Ti.UI.createButton({
		height:44,
		width:200,
		title:L('openWindow'),
		top:50
	});
	//height
	var height = Titanium.Platform.displayCaps.platformHeight;
	
	
	var text = Ti.UI.createTextArea({
		editable:false,
		color:"#cccccc",
		value:"aca va el string",		
		top:5,
		width : 300,
		height: 180,
		font : {fontSize:20,fontFamily:'Marker Felt', fontWeight:'bold'},
		borderWidth : 2,
    	borderColor : '#bbb',
    	borderRadius : 5		
	});

	button.addEventListener('click', function() {
		//alert('you have click');
		if(searchField.value != ''){
			var xhr3 = Titanium.Network.createHTTPClient();	
			xhr3.onload = function()
			{
				Ti.API.info('in utf-8 onload for GET with QS');
				text.value = JSON.parse(this.responseText).arts[0].art + "  --alto:"+height;
				var artWindow = Ti.UI.createWindow({title: "Art: "+searchField.value,backgroundColor: 'white'});
				artWindow.add(text);
				win1.containingTab.open(artWindow);
			};
			xhr3.open("GET","http://upmobile.com.ar/ccivil/?id="+searchField.value);
			xhr3.send();
		} 
		else {
			alert('please complete with ID');	
		}
		
	});

    win1.add(searchField);
    win1.add(button);
    //win1.add(text);
    
	var win2 =  Ti.UI.createWindow({
		title:L('settings'),
		backgroundColor:'white'
	});

	
	var tab1 = Ti.UI.createTab({
		title: L('home'),
		icon: '/images/KS_nav_ui.png',
		window: win1
	});
	win1.containingTab = tab1;
	
	var tab2 = Ti.UI.createTab({
		title: L('settings'),
		icon: '/images/KS_nav_views.png',
		window: win2
	});
	win2.containingTab = tab2;
	
	self.addTab(tab1);
	self.addTab(tab2);
	
	return self;
};

module.exports = AppTabGroup;
