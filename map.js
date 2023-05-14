require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home",
], function (esriConfig, WebMap, MapView, ScaleBar, Legend, Home,) {
    esriConfig.apiKey = "AAPK8b7518512c31408d88e076178141496a8-fQv6AYaNhnBKOj0P8NyCaeoBVYSqaYDcf0iPXiuLz_8qyQzhV_vsw5vR4FvAKP";

    const webMap = new WebMap({
        portalItem: {
            id: "81b3ad63496a4e658e14c1ab63b1f8bc"
        }
    })

    const view = new MapView({
        container: "viewDiv",
        map: webMap
    });

    const homeButton = new Home({
        view: view
    })
    view.ui.add(homeButton, "top-left");

    const legend = new Legend({
        view: view
    })
    view.ui.add(legend, "bottom-left");

    const scaleBar = new ScaleBar({
        view: view,
        unit: "metric",
        style: "ruler"
    })
    view.ui.add(scaleBar, "bottom-right");

})