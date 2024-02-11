import { useNavigate } from "react-router-dom";
import { GeoMap, CircleMarker } from "../../components";
import { PublicLayout } from "../../layouts";
import { useData } from "../../hooks";
import circleStyles from "../../styles/markerStyles";

const Beranda = () => {
  const navigate = useNavigate();
  const { data, loading, error } = useData();

  const handleDetailClick = (coordinates: number[]) => {
    const encodedCoordinates = coordinates.map((coord) => encodeURIComponent(coord)).join(",");
    navigate(`/detail/${encodedCoordinates}`);
  };

  console.log(data);
  return (
    <PublicLayout>
      <GeoMap
        loading={loading}
        error={error}
        marker={
          !loading &&
          !error &&
          data &&
          data.data.map((item: any, index: number) => (
            <CircleMarker
              key={index}
              coordinates={item.coordinates}
              circleOptions={circleStyles.defaultColor}
              handleDetailClick={handleDetailClick}
            />
          ))
        }
      />
    </PublicLayout>
  );
};

export default Beranda;
