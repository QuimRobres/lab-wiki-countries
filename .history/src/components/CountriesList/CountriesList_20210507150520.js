import React from "react";
import {Link} from "react-router-dom";

function CountriesList(props) {
    console.log(props)
    console.log("Countries", props.countries)
    return(
        <div>
            <div>
                {props.countries.map(country => 
                    <Link href
                )}
            </div>
        </div>
    )
}

export default CountriesList;