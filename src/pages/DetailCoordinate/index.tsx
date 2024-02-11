import { useParams } from "react-router-dom";
import { PublicLayout } from "../../layouts";
import { GeoMap, CircleMarker, DetailComponent } from "../../components";
import circleStyles from "../../styles/markerStyles";

const DetailCoordinate = () => {
  const { coordinates } = useParams<{ coordinates: string }>();

  const selectedCoordinates = coordinates
    ? coordinates.split(",").map((coord) => parseFloat(decodeURIComponent(coord)))
    : [0, 0];

  const joinedCoordinates: string = selectedCoordinates.join(", ");

  return (
    <PublicLayout headerText='DETAIL COORDINATE'>
      <GeoMap
        loading={false}
        error={null}
        marker={<CircleMarker coordinates={selectedCoordinates} circleOptions={circleStyles.defaultColor} />}
      />
      <DetailComponent coordinates={joinedCoordinates} />
    </PublicLayout>
  );
};

export default DetailCoordinate;
