window.helpers = {
	codeAddress: function(address) {
	//returns the long/lat of a given address string
		var def = $.Deferred();

		if (_.isEmpty(address)){
			def.resolve({"error":"error: address not provided"});
		}

      	geocoder = new google.maps.Geocoder();
      	geocoder.geocode( { 'address': address}, function(results, status) {
        	if (status == google.maps.GeocoderStatus.OK) {
        		def.resolve({latitude:results[0].geometry.location.lat(), longitude:results[0].geometry.location.lng()});
        	} else {
          		def.resolve({"error":"error: address not found"});
        	}
      	});

      	return(def.promise());
   	},

	time_from_string: function(str){
	    var hour = Number(str.slice(0, str.indexOf(":"))) 
	    if (hour !== 12 && str.slice(-2) === "PM") {
	    	hour += 12;
		}

	    var minute = Number(str.substr(str.indexOf(":")+1, 2));
		
	    return new Date(2014, 0, 1, hour, minute);
	},

	string_from_time: function(t) {
		var timeString = t.toLocaleTimeString(),
			time = timeString.slice(0, timeString.lastIndexOf(":")),
			meridian = timeString.slice(-2);

		timeString = time + " " + meridian;

		return(timeString);
	}
}

var app = {
	activeItem: null,
	init:function() {
		$(".sidebar a").click(function(e){
			e.preventDefault();
			var target = e.target.getAttribute("data-weekItem"),
				targetItem = $('#weekItem'+target)
		});
	},

	setActive:function(i) {
		
		//we have an activeItem
		if (activeItem) {
			//deactive it and it's link
		}
	}
}

app.init();