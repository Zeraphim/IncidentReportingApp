import React,{ useState} from "react";
import ReactMapGL from 'react-map-gl'
export default function Map(){

    let [viewport, setViewport] = useState({
        latitude: 14.556586,
        longitude: 121.023415,
        zoom: 10,
        width: window.innerWidth,
        height: window.innerHeight
    });

    return(
        <ReactMapGL 
        mapboxApiAccessToken={"pk.eyJ1Ijoia3JtaW5hbnRvbmlvIiwiYSI6ImNreWZueWJ6czBuYzEyb3RlMzR3NGMxd2oifQ.qwqMbOESi_4IlFi_hZhI0Q"}
        {...viewport} 
        onViewportChange={(newView) => setViewport(newView)}> 
        </ReactMapGL>
    );
}