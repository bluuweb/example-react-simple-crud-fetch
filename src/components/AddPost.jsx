export default function AddPost({ createPost }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const post = {
      titulo: e.target.titulo.value,
      img: e.target.imagen.value,
      descripcion: e.target.descripcion.value,
    };
    createPost(post);
  };

  return (
    <form onSubmit={handleSubmit}>
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
