// This array contains the coordinates for all bus stops between MIT and Harvard
const vehicles = [
  {
    "vid": "4353",
    "tmstmp": "20220810 21:59",
    "lat": "41.8729211807251",
    "lon": "-87.63066864013672",
    "hdg": "178",
    "pid": 3932,
    "rt": "22",
    "des": "Howard",
    "pdist": 497,
    "dly": false,
    "tatripid": "204080",
    "tablockid": "22 -555",
    "zone": ""
  },
  {
    "vid": "4338",
    "tmstmp": "20220810 21:59",
    "lat": "41.91368064880371",
    "lon": "-87.63315658569336",
    "hdg": "334",
    "pid": 3932,
    "rt": "22",
    "des": "Howard",
    "pdist": 17112,
    "dly": false,
    "tatripid": "204079",
    "tablockid": "22 -510",
    "zone": ""
  },
  {
    "vid": "4147",
    "tmstmp": "20220810 21:59",
    "lat": "41.94123493023773",
    "lon": "-87.65171358478604",
    "hdg": "330",
    "pid": 3932,
    "rt": "22",
    "des": "Howard",
    "pdist": 28519,
    "dly": false,
    "tatripid": "204078",
    "tablockid": "22 -552",
    "zone": ""
  },
  {
    "vid": "4149",
    "tmstmp": "20220810 21:59",
    "lat": "41.969234108924866",
    "lon": "-87.66753816604614",
    "hdg": "349",
    "pid": 3932,
    "rt": "22",
    "des": "Howard",
    "pdist": 39774,
    "dly": false,
    "tatripid": "204077",
    "tablockid": "22 -509",
    "zone": ""
  },
  {
    "vid": "4388",
    "tmstmp": "20220810 21:59",
    "lat": "41.985389709472656",
    "lon": "-87.66909790039062",
    "hdg": "348",
    "pid": 3932,
    "rt": "22",
    "des": "Howard",
    "pdist": 45694,
    "dly": false,
    "tatripid": "1002897",
    "tablockid": "22 -520",
    "zone": ""
  },
  {
    "vid": "1718",
    "tmstmp": "20220810 21:59",
    "lat": "41.97513646092908",
    "lon": "-87.66825051143252",
    "hdg": "174",
    "pid": 3936,
    "rt": "22",
    "des": "Harrison",
    "pdist": 17431,
    "dly": false,
    "tatripid": "204067",
    "tablockid": "22 -502",
    "zone": ""
  },
  {
    "vid": "4166",
    "tmstmp": "20220810 21:59",
    "lat": "41.93275451660156",
    "lon": "-87.64495086669922",
    "hdg": "151",
    "pid": 3936,
    "rt": "22",
    "des": "Harrison",
    "pdist": 34480,
    "dly": false,
    "tatripid": "204066",
    "tablockid": "151 -508",
    "zone": ""
  },
  {
    "vid": "1931",
    "tmstmp": "20220810 21:59",
    "lat": "41.89842121021168",
    "lon": "-87.63128662109375",
    "hdg": "178",
    "pid": 3936,
    "rt": "22",
    "des": "Harrison",
    "pdist": 48520,
    "dly": false,
    "tatripid": "204065",
    "tablockid": "N22 -593",
    "zone": ""
  }
];

// TODO: add your own access token
mapboxgl.accessToken = '';

// This is the map instance
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v11',
  center: [-87.63066864013672, 41.8729211807251],
  zoom: 11,
});


function move() {
  for(let i = 0; i < vehicles.length; i++){
    const el = document.createElement('div');
    el.innerHTML ='<i class="fa fa-bus" aria-hidden="true"></i>';
    el.className = 'marker';
    const marker = new mapboxgl.Marker(el)
          .setLngLat([vehicles[i].lon,vehicles[i].lat])
          .setPopup(
            new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(
            `<h3>id del vehiculo</h3><p>${vehicles[i].vid}</p>`
            )
            )
          .addTo(map);
  }
  
}


// Do not edit code past this point
if (typeof module !== 'undefined') {
  module.exports = { move };
}
