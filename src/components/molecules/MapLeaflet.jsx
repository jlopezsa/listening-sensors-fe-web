/* eslint-disable max-len */
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { Icon } from 'leaflet';
import markerIconPng from '../../css/images/marker-icon-2x.png';
import '../../css/react-leaflet.css';
import '../../css/leaflet.css';
import '../../figures/react-leaflet-icon';

const position = [6.145582916225883, -75.62350920877712];

function MapLeaflet() {
  return (
    <div id="map">
      <MapContainer className="leaflet-container" center={position} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={new Icon({ iconUrl: markerIconPng, iconSize: [25, 41], iconAnchor: [12, 41] })}>
          <Popup>
            A pretty CSS3 popup.
            <br />
            Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapLeaflet;
