//let map;

async function initMap1() {
  	const { Map } = await google.maps.importLibrary("maps");
	var myCenter1 = new google.maps.LatLng(map1lat, map1lng);

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

  	var myCenter2 = new google.maps.LatLng(map2lat, map2lng);

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

  	var myCenter3 = new google.maps.LatLng(map3lat, map3lng);

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

  	var myCenter4 = new google.maps.LatLng(map4lat, map4lng);

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

  	var myCenter5 = new google.maps.LatLng(map5lat, map5lng);

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

  	var myCenter6 = new google.maps.LatLng(map6lat, map6lng);

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