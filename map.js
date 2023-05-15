require([
    "esri/config",
    "esri/WebMap",
    "esri/views/MapView",
    "esri/widgets/ScaleBar",
    "esri/widgets/Legend",
    "esri/widgets/Home",
    "esri/widgets/LayerList",
    "esri/widgets/BasemapToggle",
    "esri/widgets/BasemapGallery",
], function (esriConfig, WebMap, MapView, ScaleBar, Legend, Home, LayerList, BasemapToggle, BasemapGallery) {
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

    view.ui.add("basemap-btn", "top-right");
    view.ui.add("layerList-btn", "top-right");

    const basemapToggle = new BasemapToggle({
        view: view,
        nextBasemap: "arcgis-imagery"
    })

    const basemapGallery = new BasemapGallery({
        view: view,
        source: {
            query: {

            }
        }
    })
    view.ui.add(basemapGallery, "top-right");

    view.ui.add(basemapToggle, "bottom-right");



    const layerList = new LayerList({
        view: view
    })

    view.ui.add(layerList, "top-right");

    document
        .getElementById("layerList-btn")
        .addEventListener("click", function () {
            toggleButton("layerList")
        })


    document
        .getElementById("basemap-btn")
        .addEventListener("click", function () {
            toggleButton("gallery");
        })


    function toggleButton(item) {
        const layerListEl = document.getElementsByClassName("esri-layer-list")[0];
        const galleryEl = document.getElementsByClassName("esri-basemap-gallery")[0];
        let currentProp;

            if (item == "layerList") {
                currentProp = layerListEl.style.getPropertyValue("display");
                layerListEl.style.setProperty("display", currentProp == "block" ? "none" : "block");
                galleryEl.style.setProperty ("display", "none");

            } else if (item == "gallery") {
                currentProp = galleryEl.style.getPropertyValue("display");
                galleryEl.style.setProperty("display", currentProp == "block" ? "none" : "block");
                layerListEl.style.setProperty("display", "none");
            }

    }
})