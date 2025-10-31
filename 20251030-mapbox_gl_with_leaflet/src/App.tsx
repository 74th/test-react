import './App.css'
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
} from "react-leaflet";
import L from "leaflet";
import { } from "mapbox-gl-leaflet";
import { useLeafletContext } from "@react-leaflet/core";
import { useEffect } from "react";

export function MapBoxGLLayer(props: { access_token: string; style: string }) {
  const context = useLeafletContext()

  useEffect(() => {
    const gl = L.mapboxGL({
      accessToken: props.access_token,
      style: props.style
    })
    const container = context.layerContainer || context.map;
    container.addLayer(gl)


    return () => {
      container.removeLayer(gl)
    }
  })

  return null
}


function App() {
  const position = [35.688891, 139.69224];

  const access_token = import.meta.env.VITE_MAPBOX_TOKEN;
  const style = import.meta.env.VITE_MAPBOX_STYLE;


  return (
    <>
      <div style={{ width: "90vh" }}>
        <h1>My Mapbox Map on Leafet</h1>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{ height: "90vh", width: "100%" }}>
          <MapBoxGLLayer access_token={access_token} style={style} />
        </MapContainer>
      </div>
    </>
  )
}

export default App
