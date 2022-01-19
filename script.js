require(["esri/Map", "esri/views/MapView"], (Map, MapView) => {
        const map = new Map({
          basemap: "topo-vector"
        });

        const view = new MapView({
          container: "viewDiv",
          map: map,
          zoom: 10,
          center: [-90, 38] // longitude, latitude
        });
      });
