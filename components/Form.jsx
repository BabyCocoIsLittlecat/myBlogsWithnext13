import ButtonAction from "@ui/Button";

const Form = ({ type, posts, setPost, isLoading, handleSubmit }) => {
  const updateCurrentInput = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <section className="section col max-w-[24rem]">
      <form
        onSubmit={handleSubmit}
        className={`btn form-post mt-8 ${
          type === "Create" ? "gradient-pc-bg" : "gradient-oc-bg"
        }`}
      >
        <h1 className="text-subTitle w-full text-center">
          {type} your post here!
        </h1>
        <hr className="underline gradient-pink-bg" />
        <label className="w-full text-left" htmlFor="title-form">Title</label>
        <input
          id="title-form"
          type="text"
          className="default-box"
          placeholder="Write a title (maxlength: 30 characters)"
          name="title"
          required
          onChange={updateCurrentInput}
          value={posts.title}
          maxLength={40}
        />
        <hr className="underline gradient-green-bg" />
        <label className="w-full text-left" htmlFor="content-form">content</label>
        <textarea
          id="content-form"
          className="default-box"
          name="content"
          rows="6"
          placeholder="Write a description (maxlength: 125 characters)"
          value={posts.content}
          required
          onChange={updateCurrentInput}
          maxLength={150}
        />
        <hr className="underline gradient-pink-bg" />
        <div className="my-5 flex">
          <ButtonAction goToPage={type=== "Create"? "/": "/profile"} theme="black btn-cancle">
            Cancle
          </ButtonAction>
          <button
            type="submit"
            className="btn btn-white btn-action"
            disabled={isLoading}
          >
            {isLoading
              ? "Loading..."
              : `${type} post
            `}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
