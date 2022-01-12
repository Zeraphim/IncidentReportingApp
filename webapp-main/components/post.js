import React, { Component } from "react";

export default class Post extends Component {
  render() {
    return (
      <div className="flex bg-white flex-col mb-3 rounded shadow">
        <div className="h-1/6 grid grid-cols-2">
          <div className="col-span-1 p-3 flex flex-row items-center">
            <div className="mr-3 grid">Hi</div>
            <div>
              <h3 className="text-sm">{this.props.post.owner}</h3>
              <p className="text-xs">
                {determineType(this.props.post.user_type)}{" "}
                <b>| {this.props.post.location}</b>{" "}
              </p>
            </div>
          </div>
          <div className="col-span-1 flex flex-row items-center justify-end px-8 space-x-8">
            <p>Upvotes: 0</p>
            <p>Downvotes: 0</p>
          </div>
        </div>
        <div className="h-4/6">{displayContent(this.props.post.content)}</div>
        <div className="h-1/6 grid grid-cols-3 bg-gray-300 rounded-b-lg">
          <button className="col-span-1 py-4 font-bold hover:text-white">
            Upvote
          </button>
          <button className="col-span-1 py-4 font-bold hover:text-white">
            Downvote
          </button>
          <button className="col-span-1 py-4 font-bold hover:text-white">
            Comment
          </button>
        </div>
      </div>
    );
  }
}

function determineType(user_type) {
  if (user_type == 0) {
    return <small>USER</small>;
  } else if (user_type == 1) {
    return <small>VERIFIED</small>;
  } else if (user_type == -1) {
    return <small>UNRELIABLE</small>;
  }
}

function displayContent(content) {
  if (content.type == "video") {
    return <div>Video div</div>;
  } else if (content.type == "text") {
    return (
      <div className="p-3">
        <p>{content.caption}</p>
        <small className="text-xs">{content.date}</small>
      </div>
    );
  }
}
