import React, { Component } from "react";

export default class Post extends Component {
  render() {
    return (
      <div className="flex bg-white flex-col mb-3 rounded-lg shadow">
        <div className="h-1/6 flex flex-row relative">
          <div className="p-3 flex flex-row items-center">
            <div className="mr-3 grid flex-none">Hi</div>
            <div>
              <h3 className="text-sm">
                {`${this.props.post.owner_data.fName} 
                  ${this.props.post.owner_data.lName}`}
              </h3>
              <p className="text-xs">
                {determineType(this.props.post.owner_data.points)}{" "}
                <b>| {this.props.post.city_id}</b>{" "}
              </p>
            </div>
          </div>
          {postPoints(this.props.post.upvotes - this.props.post.downvotes)}
        </div>
        <div className="h-4/6">
          <Content data={this.props.post} />
        </div>
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

function postPoints(points) {
  if (points >= 0)
    return (
      <div className="items-center justify-end float-right p-3 absolute right-0 mt-3 mr-5 flex font-bold font-number text-green-600">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mr-3"
        >
          <path
            d="M13.131 7.36922C13.189 7.42572 13.437 7.63906 13.641 7.8378C14.924 9.00292 17.024 12.0424 17.665 13.6332C17.768 13.8748 17.986 14.4856 18 14.812C18 15.1247 17.928 15.4228 17.782 15.7073C17.578 16.0619 17.257 16.3463 16.878 16.5022C16.615 16.6025 15.828 16.7584 15.814 16.7584C14.953 16.9143 13.554 17 12.008 17C10.535 17 9.193 16.9143 8.319 16.7867C8.305 16.772 7.327 16.6162 6.992 16.4457C6.38 16.133 6 15.5222 6 14.8685V14.812C6.015 14.3863 6.395 13.491 6.409 13.491C7.051 11.9859 9.048 9.01656 10.375 7.82319C10.375 7.82319 10.716 7.48709 10.929 7.34096C11.235 7.11301 11.614 7 11.993 7C12.416 7 12.81 7.12762 13.131 7.36922Z"
            fill="#73B15D"
          />
        </svg>
        <p>{points}</p>
      </div>
    );
  else
    return (
      <div className="items-center justify-end float-right p-3 absolute right-0 mt-3 mr-5 flex font-bold font-number text-red-400">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.869 16.6308C10.811 16.5743 10.563 16.3609 10.359 16.1622C9.076 14.9971 6.976 11.9576 6.335 10.3668C6.232 10.1252 6.014 9.51437 6 9.18802C6 8.8753 6.072 8.5772 6.218 8.29274C6.422 7.93814 6.743 7.65368 7.122 7.49781C7.385 7.39747 8.172 7.2416 8.186 7.2416C9.047 7.08573 10.446 7 11.992 7C13.465 7 14.807 7.08573 15.681 7.21335C15.695 7.22796 16.673 7.38383 17.008 7.55431C17.62 7.86702 18 8.47784 18 9.13151V9.18802C17.985 9.61374 17.605 10.509 17.591 10.509C16.949 12.0141 14.952 14.9834 13.625 16.1768C13.625 16.1768 13.284 16.5129 13.071 16.659C12.765 16.887 12.386 17 12.007 17C11.584 17 11.19 16.8724 10.869 16.6308Z"
            fill="#E33C3C"
          />
        </svg>
        <p>{points}</p>
      </div>
    );
}

function determineType(points) {
  if (points == 0 && points > -1 && points < 100) {
    return <small>USER</small>;
  } else if (points >= 100) {
    return <small>VERIFIED</small>;
  } else if (user_type < -1) {
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

const Content = (props) => {
  const post = props.data;
  return (
    <div className="p-5 flex flex-col space-y-2">
      <p>{post.caption}</p>

      <Auxiliary post={post} />
    </div>
  );
};

const Auxiliary = (props) => {
  const data = props.post.auxiliary;
  if (props.post.category == "crime") {
    return (
      <div className="p-3 rounded shadow flex flex-col space-y-none bg-red-600 text-white">
        <p>
          Name of suspect(s): <b>{data.name}</b>
        </p>
        <p>
          Last seen in: <b>{data.location}</b>
        </p>
      </div>
    );
  } else if (props.post.category == "accident") {
    return (
      <div className="p-3 rounded shadow flex flex-col space-y-none bg-yellow-600 text-white">
        <p>
          Location of accident: <b>{data.location}</b>
        </p>
      </div>
    );
  } else if (props.post.category == "missing") {
    return (
      <div className="p-3 rounded shadow flex flex-col space-y-none bg-yellow-300 text-white">
        <p>
          Name of missing person(s): <b>{data.name}</b>
        </p>
        <p>
          Last seen in: <b>{data.location}</b>
        </p>
      </div>
    );
  } else if (props.post.category == "hazard") {
    return (
      <div className="p-3 rounded shadow flex flex-col space-y-none bg-orange-600 text-white">
        <p>
          Location of hazard: <b>{data.location}</b>
        </p>
      </div>
    );
  }
  return <>{data.location}</>;
};
