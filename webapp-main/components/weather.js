import React, { Component } from "react";

export default class Weather extends Component{
    render() {
        return(
            <>
                <div className= "p-5 bg-gradient-to-r from-cyan-300 to-cyan-700 h-auto rounded-md shadow invisible lg:visible">
                    <div className="grid grid-cols-1 mb-3">
                        {/* <div className="col-span-1">
                       
                        </div> */}

                        {/* <div className="col-span-1"> */}
                            <div class="weather-description">
                                <p className="text-xs font-bold text-white">Enjoy the sun. </p>
                            </div>
                            <div class="temp-value">
                                <p className="text-2xl font-extrabold text-amber-600">29°C</p>
                            </div>
                            <div class="location">
                                <p className="text-lg font-bold text-white">Makati, Philippines</p>
                            </div>
                        {/* </div> */}
                    </div>
                </div>
            </>

        )
    }
}
