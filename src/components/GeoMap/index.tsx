import { MapContainer, TileLayer, Circle, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import { useFetch } from "../../hooks";
import { url } from "../../utils/endpointsUrl";

const GeoMap = () => {
  const { data, loading, error } = useFetch<any>(url);
  const circleOptions = { color: "#478AF7", fillColor: "#D9D9D9", weight: 2 };
  const mapSizing = "w-[100vw] h-[100vh] lg:w-[828px] lg:h-[477px]";

  if (error) {
    return (
      <div className='flex justify-center items-center w-828 h-477 bg-red-200'>
        <p className='text-red-600'>Error retrieving data</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div className='flex flex-col justify-center items-center w-[828px] h-[477px] bg-gray-200'>
        <div className='animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gray-900 mb-3'></div>
        <p className='text-gray-900'>Loading the map...</p>
      </div>
    );
  }

  return (
    <div className={mapSizing}>
      <MapContainer center={[-1.1057614895977395, 113.87535787965106]} zoom={5} className={mapSizing}>
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        {!loading &&
          !error &&
          data &&
          data.data.map((item: any, index: number) => (
            <Circle
              key={index}
              center={[item.coordinates[1], item.coordinates[0]]}
              pathOptions={circleOptions}
              radius={100000}
            >
              <Popup>
                <Link to='/'>
                  <p className='font-bold text-red-500'>LIHAT DETAIL</p>
                </Link>
              </Popup>
            </Circle>
          ))}
      </MapContainer>
    </div>
  );
};

export default GeoMap;
