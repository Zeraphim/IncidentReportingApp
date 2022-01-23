import React,{ useState} from "react";
import ReactMapGL, {Marker} from "react-map-gl";


export default function Map(){

    const [viewport, setViewport] = useState({
        latitude: 14.567525863647461,
        longitude: 121.03884887695312,
        zoom: 10,
        width: window.innerWidth,
        height: window.innerHeight,
        pitch: 50,

    });

    return(
        <div> 
            <ReactMapGL 
            mapStyle={'mapbox://styles/mapbox/dark-v9'}
            mapboxApiAccessToken={"pk.eyJ1Ijoia3JtaW5hbnRvbmlvIiwiYSI6ImNreWZueWJ6czBuYzEyb3RlMzR3NGMxd2oifQ.qwqMbOESi_4IlFi_hZhI0Q"}
            {...viewport} 
            onViewportChange={viewport => {setViewport(viewport)
            
            }}> 
            </ReactMapGL>
        </div>
    );
}