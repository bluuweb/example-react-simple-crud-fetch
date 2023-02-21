import AddPost from "./components/AddPost";
import CardPost from "./components/CardPost";

export default function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">📷 Like Me 📷</h1>
      <main className="row">
        <section className="col-12 sm-4 mt-5">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h2>Add Post</h2>
              <AddPost />
            </div>
          </div>
        </section>
        <section className="col-12 sm-4 mt-5">
          <CardPost />
        </section>
      </main>
    </div>
  );
}
