import React from "react";

const Blogs = () => {
  return (
    <div className="p-5 text-left">
      <div className="p-5">
        <h1 className="text-2xl mb-10">What is Context API?</h1>
        <p>
          The React Context API is a way for a React app to effectively produce
          global variables that can be passed around. This is the alternative to
          "prop drilling" or moving props from grandparent to child to parent,
          and so on. Context is also touted as an easier, lighter approach to
          state management using Redux. React.createContext() is all you need.
          It returns a consumer and a provider. Provider is a component that as
          it's names suggests provides the state to its children. It will hold
          the "store" and be the parent of all the components that might need
          that store. Consumer as it so happens is a component that consumes and
          uses the state.
        </p>
      </div>
      <div className="p-5">
        <h1 className="text-2xl mb-10">What is semantic tags?</h1>
        <p>
          By adding semantic tags to your document, you provide additional
          information about that document, which aids in communication.
          Specifically, semantic tags make it clear to the browser what the
          meaning of a page and its content is. That clarity is also
          communicated with search engines, ensuring that the right pages are
          delivered for the right queries. Semantic HTML tags provide
          information about the contents of those tags that goes beyond just how
          they look on a page. Text that is enclosed in the code tag is
          immediately recognized by the browser as some type of coding language.
        </p>
      </div>
      <div className="p-5">
        <h1 className="text-2xl mb-10">
          What is Inline Elements? What is Inline-Block? What is the Difference
          between Inline-Block and Inline Elements?
        </h1>
        <p>
          Inline elements don’t start on a new line, they appear on the same
          line as the content and tags beside them. Some examples of inline
          elements are span , strong, and img tags. When it comes to margins and
          padding, browsers treat inline elements differently. You can add space
          to the left and right on an inline element, but you cannot add height
          to the top or bottom padding or margin of an inline element.
        </p>
        <p>
          display: inline-block brought a new way to create side by side boxes
          that collapse and wrap properly depending on the available space in
          the containing element. It makes layouts that were previously
          accomplished with floats easier to create. No need to clear floats
          anymore. Inline-block elements are similar to inline elements, except
          they can have padding and margins added on all four sides. You’ll have
          to declare display: inline-block in your CSS code.
        </p>
        <p>
          Inline elements - The element doesn’t start on a new line and only
          occupy just the width it requires. You can’t set the width or height.
        </p>
        <p>
          Inline-block - It’s formatted just like the inline element, where it
          doesn’t start on a new line. BUT, you can set width and height values.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
