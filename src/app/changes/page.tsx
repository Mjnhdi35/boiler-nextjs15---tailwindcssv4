import React from "react";

export default function page() {
  return (
    <div>
      <p className="line-clamp-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus,
        debitis odio molestiae facere voluptatibus quis velit. Minus et delectus
        vitae totam fuga odio? Harum quae explicabo beatae ab doloribus ullam?
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam et
        repellat rem necessitatibus illum quis optio, soluta impedit assumenda
        quisquam velit, corporis voluptatem porro eum voluptatibus eaque dicta
        rerum sapiente!
      </p>
      <div className="grid grid-cols-4 gap-4 p-8 ">
        <div
          className="w-16 h-16 rounded-full size-16 
          bg-radial from-pink-400 from-40%
           to-fuchsia-700 bg-purple-800/25"
        ></div>
        <div
          className="w-16 h-16 rounded-full
         bg-purple-500"
        ></div>
        <div
          className="w-16 h-16 rounded-full
         bg-purple-500"
        ></div>
        <div
          className="w-16 h-16 rounded-full
         bg-purple-500"
        ></div>
      </div>
    </div>
  );
}
