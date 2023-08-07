//let map;

async function initMap1() {
  	const { Map } = await google.maps.importLibrary("maps");

	var myCenter1 = new google.maps.LatLng(25.200310178091204, 55.26902449838007);

  	map = new Map(document.getElementById("map1"), {
		center: myCenter1,
		zoom: 8,
  	});

	var marker = new google.maps.Marker({
		position: myCenter1,
	});

	marker.setMap(map);
	
}

async function initMap2() {
	const { Map } = await google.maps.importLibrary("maps");

  	var myCenter2 = new google.maps.LatLng(34.148704348596304, -118.13280553206033);

	map2 = new Map(document.getElementById("map2"), {
	  center: myCenter2,
	  zoom: 8,
	});

	var marker = new google.maps.Marker({
		position: myCenter2,
	});

  	marker.setMap(map2);
  
}

async function initMap3() {
	const { Map } = await google.maps.importLibrary("maps");

  	var myCenter3 = new google.maps.LatLng(25.200310178091204, 55.26902449838007);

	map3 = new Map(document.getElementById("map3"), {
	  center: myCenter3,
	  zoom: 8,
	});

	var marker = new google.maps.Marker({
		position: myCenter3,
	});

  	marker.setMap(map3);
}

async function initMap4() {
	const { Map } = await google.maps.importLibrary("maps");

  	var myCenter4 = new google.maps.LatLng(34.148704348596304, -118.13280553206033);

	map4 = new Map(document.getElementById("map4"), {
	  center: myCenter4,
	  zoom: 8,
	});

	var marker = new google.maps.Marker({
		position: myCenter4,
	});

  	marker.setMap(map4);
}

async function initMap5() {
	const { Map } = await google.maps.importLibrary("maps");

  	var myCenter5 = new google.maps.LatLng(34.148704348596304, -118.13280553206033);

	map5 = new Map(document.getElementById("map5"), {
	  center: myCenter5,
	  zoom: 8,
	});

	var marker = new google.maps.Marker({
		position: myCenter5,
	});

  	marker.setMap(map5);
}

async function initMap6() {
	const { Map } = await google.maps.importLibrary("maps");

  	var myCenter6 = new google.maps.LatLng(25.200310178091204, 55.26902449838007);

	map6 = new Map(document.getElementById("map6"), {
	  center: myCenter6,
	  zoom: 8,
	});

	var marker = new google.maps.Marker({
		position: myCenter6,
	});

  	marker.setMap(map6);
}



initMap1();
initMap2();
initMap3();
initMap4();
initMap5();
initMap6();