import React from "react";
import PostForm from "../components/PostForm";
import PostsList from "../components/PostsList";

export default function Home() {
  return (
    <div>
      <h1 className="main-heading">GenZ</h1>
      <PostForm />
      <PostsList />
    </div>
  );
}
