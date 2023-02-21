export default function AddPost() {
  return (
    <form>
      <div className="mb-2">
        <label
          htmlFor="titulo"
          className="form-label"
        >
          Titulo
        </label>
        <input
          type="text"
          className="form-control"
          id="titulo"
        />
      </div>
      <div className="mb-2">
        <label
          htmlFor="imagen"
          className="form-label"
        >
          Imagen
        </label>
        <input
          type="text"
          className="form-control"
          id="imagen"
        />
      </div>
      <div className="mb-3">
        <label
          htmlFor="descripcion"
          className="form-label"
        >
          Descripcion
        </label>
        <textarea
          id="descripcion"
          className="form-control"
        />
      </div>
      <button
        type="submit"
        className="btn btn-light mx-auto d-block"
      >
        Agregar
      </button>
    </form>
  );
}
