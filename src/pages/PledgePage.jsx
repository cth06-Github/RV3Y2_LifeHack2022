import React, { useState } from "react";
import BackToHome from "../components/BackToHome";
import { useDispatch, useSelector } from "react-redux";
import { addBlog, deleteBlog } from "../actions";

const PledgePage = () => {
  const blogs = useSelector((state) => state.blog);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const addPost = () => {
    dispatch(addBlog(value));
    setValue("");
  };

  const deletePost = (i) => {
    dispatch(deleteBlog(i));
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Affirm</h1>
      <h2 style={{ textAlign: "center" }}>
        Let's do our part to reduce food waste!
      </h2>

      <div style={{ textAlign: "center" }}>
        <p>
          Write your commitment to reducing food wastage and leave your name
          below. Let's encourage one another to reduce food waste!
        </p>
        <p>
          e.g. I pledge to reduce food waste by buying just enough groceries
          that I require ~ Mary Tan
        </p>
      </div>
      <input type="text" value={value} onChange={handleChange} />
      <button onClick={addPost}>Add affirmation</button>
      {blogs.map((blog, i) => {
        return (
          <div key={i}>
            <h3>{blog.title}</h3>
            <button onClick={() => deletePost(i)}>delete</button>
          </div>
        );
      })}
      <div style={{ paddingInline: 600 }}>
        <BackToHome />
      </div>
    </>
  );
};

export default PledgePage;
