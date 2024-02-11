import { DetailComponentProps } from "../../interfaces/interfaces";

const DetailComponent: React.FC<DetailComponentProps> = ({ coordinates }) => {
  return (
    <section>
      <p className='font-bold text-[20.52px] p-[21px] text-center'>Coordinates Details: {coordinates}</p>
    </section>
  );
};

export default DetailComponent;
