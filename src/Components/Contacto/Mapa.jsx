import GoogleMapReact from "google-map-react";
import { FaMapMarkerAlt } from "react-icons/fa";
function Mapa() {
  const location = { lat: -24.78515, lng: -65.41862012055392 };
  const AnyReactComponent = () => <FaMapMarkerAlt color="orange" size={32} />;
  return (
    <div className="mapaContainer">     
        <h4>Encuentranos en la calle Güemes 1050</h4>  
        <div style={{ height: "30em", width: "50em", padding: "2em 4em" }}>
        
        <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyBHKoVKobC1-4tCE9EeuwnFylw1Ch9Fxv0" }}
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