import GoogleMapReact from "google-map-react";
import { googleMapsApiKey } from "../../../functions";
import { FaMapMarkerAlt } from "react-icons/fa";
const googleMapsApiKey = functions.config().googlemaps.apikey;
function Mapa() {
  const location = { lat: -24.78515, lng: -65.41862012055392 };
  const AnyReactComponent = () => <FaMapMarkerAlt color="orange" size={32} />;
  return (
    <div className="mapaContainer">     
        <h4>Encuentranos en Gral. Güemes 1182</h4>  
        <div style={{ height: "30em", width: "50em", padding: "2em 4em" }}>
        
        <GoogleMapReact
            bootstrapURLKeys={{ key: googleMapsApiKey}}
            defaultCenter={location}
            defaultZoom={17}    
        >
            <AnyReactComponent lat={location.lat} lng={location.lng} />
        </GoogleMapReact>
        </div>
    </div>
  );
}

export default Mapa;
