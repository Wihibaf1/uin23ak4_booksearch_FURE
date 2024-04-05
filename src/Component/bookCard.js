import React from "react";

const BookCard = (props) => {
  console.log(props.data.author_name, "checking prosp");
  const { author_name, language, time, publish_year } = props.data;
  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {/* <img
          class="w-full"
          src="/img/card-top.jpg"
          alt="Sunset in the mountains"
        /> */}
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{author_name}</div>
          <p className="text-gray-700 text-base">{language}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {time}
          </span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
            {publish_year}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
