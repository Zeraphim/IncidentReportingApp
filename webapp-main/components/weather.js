import React, { Component } from "react";

export default class Weather extends Component{
    render() {
        return(
            <>
                <div className= "p-5 bg-gray-100 h-auto rounded-md shadow invisible lg:visible">
                    <div className="grid grid-cols-2 mb-3">
                        <div class="weather-description">
                            <p className="text-xs font-bold">Enjoy the sun. </p>
                        </div>
                        <div class="temperature-value">
                            <p>- °<span>C</span></p>
                        </div>
                
                        <div class="location">
                            <p className="text-sm font-bold">Makati, Philippines</p>
                        </div>
                    </div>
                </div>
            </>

        )
    }
}
