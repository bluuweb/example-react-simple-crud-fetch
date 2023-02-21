import TrashIcon from "./icons/TrashIcon";
import HeartIcon from "./icons/heart-solid";

export default function CardPost() {
  return (
    <article className="card mb-4">
      <img
        src="https://phantom-marca.unidadeditorial.es/da1d75da4d5fae012555e2258f8365db/resize/1320/f/jpg/assets/multimedia/imagenes/2022/12/16/16712099635261.jpg"
        alt=""
        className="card-img-top"
      />
      <div className="card-body">
        <h5>Jack Sparrow</h5>
        <p>Sigue tu propia brújula</p>
        <div className="d-flex mt-3 justify-content-between align-items-center">
          <div>
            <HeartIcon
              fill="red"
              height="25"
            />
            <span className="ms-2">6</span>
          </div>
          <div>
            <TrashIcon
              fill="red"
              height="25"
            />
          </div>
        </div>
      </div>
    </article>
  );
}
