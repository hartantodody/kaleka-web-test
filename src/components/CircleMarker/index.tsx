import { Circle, Popup } from "react-leaflet";
import { CircleMarkerProps } from "../../interfaces/interfaces";

const CircleMarker: React.FC<CircleMarkerProps> = ({ coordinates, circleOptions, handleDetailClick }) => (
  <Circle center={[coordinates[1], coordinates[0]]} pathOptions={circleOptions} radius={100000}>
    <Popup>
      <p
        onClick={handleDetailClick ? () => handleDetailClick(coordinates) : undefined}
        className='font-bold text-red-500 cursor-pointer'
      >
        LIHAT DETAIL
      </p>
    </Popup>
  </Circle>
);

export default CircleMarker;
