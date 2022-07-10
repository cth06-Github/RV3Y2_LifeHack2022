//action logic
export const addBlog = (content) => {
  return {
    type: "blog/add",
    payload: content
  };
};

export const deleteBlog = (index) => {
  return {
    type: "blog/delete",
    payload: index
  };
};
