import { MapContainer, TileLayer } from "react-leaflet";
import { ErrorFetchComponent, Loading } from "..";
import { GeoMapProps } from "../../interfaces/interfaces";

const GeoMap = ({ marker, loading, error }: GeoMapProps) => {
  const mapSizing = "w-full h-full";

  return (
    <div className='w-full min-w-[100px] max-w-[828px] h-[477px] z-[10]'>
      {loading ? (
        <Loading />
      ) : error ? (
        <ErrorFetchComponent />
      ) : (
        <MapContainer center={[-1.1057614895977395, 113.87535787965106]} zoom={5} className={mapSizing}>
          <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
          {marker}
        </MapContainer>
      )}
    </div>
  );
};

export default GeoMap;
