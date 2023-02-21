import { useEffect, useState } from "react";
import AddPost from "./components/AddPost";
import CardPost from "./components/CardPost";

const getPosts = async () => {
  const response = await fetch("http://localhost:3000/posts");
  const data = await response.json();
  return data;
};

const addPost = async (post) => {
  const response = await fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  });
  const data = await response.json();
  return data;
};

const deletePost = async (id) => {
  await fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
  });
};

const likePost = async (id) => {
  await fetch(`http://localhost:3000/posts/like/${id}`, {
    method: "PUT",
  });
};

export default function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then((data) => {
      setPosts(data);
    });
  }, []);

  const createPost = (post) => {
    addPost(post).then((data) => {
      setPosts([...posts, data]);
    });
  };

  const deletePostById = (id) => {
    deletePost(id).then(() => {
      const newPosts = posts.filter((post) => {
        return post.id !== id;
      });
      setPosts(newPosts);
    });
  };

  const likePostById = (id) => {
    likePost(id).then(() => {
      const newPosts = posts.map((post) => {
        if (post.id === id) {
          return {
            ...post,
            likes: post.likes + 1,
          };
        }
        return post;
      });
      setPosts(newPosts);
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">📷 Like Me 📷</h1>
      <main className="row">
        <section className="col-12 sm-4 mt-5">
          <div className="card bg-primary text-white">
            <div className="card-body">
              <h2>Add Post</h2>
              <AddPost createPost={createPost} />
            </div>
          </div>
        </section>
        <section className="col-12 sm-4 mt-5">
          {posts.map((post) => {
            return (
              <CardPost
                key={post.id}
                post={post}
                deletePostById={deletePostById}
                likePostById={likePostById}
              />
            );
          })}
        </section>
      </main>
    </div>
  );
}
