import React, { useRef, useState } from "react";

import UploadFile from '../pages/api/UploadFile';

const PostAuxillary = (props) => {
  const fileRef = useRef();
  const ctx = <></>;
  var exports = {
    setName: props.setName,
    setDescription: props.setDescription,
    setLocation: props.setLocation,
    setReward: props.setReward,
  };
  const handleChange = (e) => {
    const [file] = e.target.files;
    props.setSelectedFile(file);

    console.log(file.name);

    UploadFile(file);
    
  };
  if (props.type == "crime") {
    ctx = (
      <CrimePost
        refProp={fileRef}
        handleChange={handleChange}
        files={props.file}
        export={exports}
      />
    );
  } else if (props.type == "accident") {
    ctx = (
      <AccidentPost
        refProp={fileRef}
        handleChange={handleChange}
        files={props.file}
        export={exports}
      />
    );
  } else if (props.type == "missing") {
    ctx = (
      <MissingPost
        refProp={fileRef}
        handleChange={handleChange}
        files={props.file}
        export={exports}
      />
    );
  } else if (props.type == "hazard") {
    ctx = (
      <HazardPost
        refProp={fileRef}
        handleChange={handleChange}
        files={props.file}
        export={exports}
      />
    );
  } else {
    ctx = (
      <div className="bg-green-600 rounded text-white text-xs p-3">
        Tap on any categories below to add specific details to your report.
      </div>
    );
  }
  return (
    <div style={{ maxHeight: 400 }} className="overflow-y-auto mb-3">
      {ctx}
    </div>
  );
};

const CrimePost = (props) => {
  const ref = props.refProp;
  const handleChange = props.handleChange;
  return (
    <div className="w-full border-solid border-2 p-4 rounded-lg flex flex-col mb-3">
      <div className="p-3 bg-red-600 text-white mb-3 rounded flex flex-row space-x-3 items-center cursor-pointer">
        <svg
          width="30"
          height="30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-5 -5 30 30"
          className="h-full flex-none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.25694 3.09882C9.02154 1.73952 10.9786 1.73952 11.7432 3.09882L17.3235 13.0194C18.0735 14.3526 17.11 15.9999 15.5804 15.9999H4.41978C2.89013 15.9999 1.9267 14.3526 2.67663 13.0194L8.25694 3.09882ZM11 13C11 13.5523 10.5523 14 10 14C9.44772 14 9 13.5523 9 13C9 12.4477 9.44772 12 10 12C10.5523 12 11 12.4477 11 13ZM10 5C9.44772 5 9 5.44772 9 6V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V6C11 5.44772 10.5523 5 10 5Z"
            fill="#fff"
          />
        </svg>
        <div className="text-xs">
          <p className="hidden lg:block">
            This category involves identifying potentially dangerous
            individuals. Please make sure that your information is accurate.{" "}
          </p>{" "}
          <b>False information in this category may be a legal infraction. </b>
          Tap here to learn about AGAP's category listing rules.
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        {props.files != undefined ? (
          displaySelected(props.files)
        ) : (
          <button onClick={() => ref.current.click()}>
            <input
              ref={ref}
              onChange={handleChange}
              multiple={false}
              type="file"
              hidden
            />
            <div className="bg-white rounded pt-10 pb-10 cursor-pointer bg-gray-300 flex flex-col items-center content-center">
              <svg
                width="100"
                height="100"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41 16.001V9.72225C41 9.72089 41 9.71953 41 9.71808V6.37863C41 4.63111 39.5782 3.20935 37.8307 3.20935H3.16928C1.42176 3.20935 0 4.63111 0 6.37863V13.6046C0 13.6059 0 13.6073 0 13.6088V34.6213C0 36.3688 1.42176 37.7906 3.16928 37.7906H15.3628C15.3637 37.7906 15.3646 37.7907 15.3655 37.7907C15.3661 37.7907 15.3667 37.7906 15.3673 37.7906H37.8307C39.5782 37.7906 41 36.3688 41 34.6213V16.0051C41 16.0038 41 16.0023 41 16.001ZM39.7965 15.0039L35.7798 12.8616L39.7965 10.7193V15.0039ZM3.16928 4.41287H37.8307C38.9146 4.41287 39.7965 5.29473 39.7965 6.37863V9.35534L34.501 12.1796L32.9788 11.3678C32.8018 11.2734 32.5895 11.2734 32.4125 11.3678L28.3939 13.511C28.3337 13.4908 28.2695 13.4794 28.2025 13.4794H8.05357L4.0943 11.3678C3.91731 11.2734 3.70492 11.2734 3.52793 11.3678L1.20352 12.6075V6.37863C1.20352 5.29473 2.08538 4.41287 3.16928 4.41287ZM1.20352 34.6213V13.9715L3.81115 12.5808L7.61461 14.6093C7.61597 14.61 7.61733 14.6107 7.6187 14.6114L11.2305 16.5378C11.3207 16.5859 11.4177 16.6087 11.5132 16.6087C11.7283 16.6087 11.9364 16.4931 12.0447 16.29C12.2011 15.9968 12.0901 15.6323 11.7969 15.4759L10.3103 14.683H16.1546C16.0667 14.9133 16.0215 15.1576 16.0215 15.3982C16.0215 15.8816 16.1928 16.3329 16.5036 16.6687C16.7493 16.9342 17.1966 17.2505 17.9325 17.2505H20.5C21.0747 17.2505 21.3425 17.466 21.3425 17.6116C21.3425 17.7572 21.0747 17.9726 20.5 17.9726H15.365C13.3934 17.9726 12.3834 18.8836 12.2569 19.7864C12.1618 20.4651 12.5478 21.3296 13.9158 21.7205C15.3018 22.1165 17.8246 22.3005 20.4954 22.4953C22.9249 22.6725 25.4372 22.8558 27.3589 23.2062C30.0895 23.7041 30.1683 24.2865 30.1683 24.3512C30.1683 24.3706 30.1443 24.833 28.0556 25.5645C26.5553 26.0898 24.5101 26.5811 22.3446 27.1014C17.3475 28.3018 12.1803 29.5431 10.9837 31.7689C10.4163 32.8242 10.339 33.8291 10.754 34.7554C11.1002 35.5285 11.7546 36.1308 12.4581 36.5871H3.16928C2.08538 36.5871 1.20352 35.7052 1.20352 34.6213ZM37.8307 36.5871H15.4389C14.5783 36.367 12.4395 35.5745 11.8524 34.2635C11.5944 33.6877 11.657 33.0581 12.0437 32.3388C12.9853 30.5875 18.3306 29.3034 22.6257 28.2717C28.2115 26.9297 31.3718 26.0861 31.3718 24.3512C31.3718 22.9006 29.3426 22.3446 27.5749 22.0222C25.5894 21.6602 23.0443 21.4745 20.583 21.2949C17.9758 21.1048 15.5132 20.9251 14.2466 20.5632C13.7466 20.4204 13.4186 20.1696 13.4489 19.9532C13.483 19.7097 14.0129 19.176 15.3651 19.176H20.5001C21.8433 19.176 22.5461 18.3889 22.5461 17.6114C22.5461 16.834 21.8433 16.0468 20.5001 16.0468H17.9326C17.6907 16.0468 17.5072 15.981 17.3869 15.8511C17.2826 15.7383 17.2251 15.5775 17.2251 15.3981C17.2251 15.1324 17.3741 14.6829 17.9325 14.6829H26.1967L24.71 15.4757C24.4167 15.6321 24.3058 15.9966 24.4622 16.2899C24.6187 16.5832 24.9833 16.694 25.2764 16.5376L32.6958 12.5806L39.7966 16.3677V34.6211C39.7965 35.7052 38.9146 36.5871 37.8307 36.5871Z"
                  fill="black"
                />
                <path
                  d="M7.66243 10.8316C9.05603 10.8316 10.1898 9.69785 10.1898 8.30425C10.1898 6.91065 9.05603 5.77686 7.66243 5.77686C6.26883 5.77686 5.13503 6.91065 5.13503 8.30425C5.13503 9.69785 6.26883 10.8316 7.66243 10.8316ZM7.66243 6.98038C8.3924 6.98038 8.9863 7.57428 8.9863 8.30425C8.9863 9.03423 8.3924 9.62813 7.66243 9.62813C6.93245 9.62813 6.33855 9.03423 6.33855 8.30425C6.33855 7.57428 6.93245 6.98038 7.66243 6.98038Z"
                  fill="black"
                />
              </svg>
              <a className="text-black">Click here to add a photo</a>
            </div>
          </button>
        )}

        <div className="flex flex-col space-y-2">
          <label className="text-sm">Name of suspect(s)</label>
          <input
            placeholder="Suspect(s)"
            className="p-2 rounded"
            onChange={(e) => props.export.setName(e.target.value)}
          ></input>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm">
            Location last seen (Place, landmarks, etc.)
          </label>
          <input placeholder="input" className="p-2 rounded"></input>
        </div>
        <label className="text-xs font-light text-gray-400">
          All fields are optional.
        </label>
      </div>
    </div>
  );
};

const AccidentPost = (props) => {
  const ref = props.refProp;
  const handleChange = props.handleChange;
  return (
    <div className="w-full border-solid border-2 p-4 rounded-lg flex flex-col mb-3">
      <div className="flex flex-col space-y-3">
        {props.files != undefined ? (
          displaySelected(props.files)
        ) : (
          <button onClick={() => ref.current.click()}>
            <input
              ref={ref}
              onChange={handleChange}
              multiple={false}
              type="file"
              hidden
            />
            <div className="bg-white rounded pt-10 pb-10 cursor-pointer bg-gray-300 flex flex-col items-center content-center">
              <svg
                width="100"
                height="100"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41 16.001V9.72225C41 9.72089 41 9.71953 41 9.71808V6.37863C41 4.63111 39.5782 3.20935 37.8307 3.20935H3.16928C1.42176 3.20935 0 4.63111 0 6.37863V13.6046C0 13.6059 0 13.6073 0 13.6088V34.6213C0 36.3688 1.42176 37.7906 3.16928 37.7906H15.3628C15.3637 37.7906 15.3646 37.7907 15.3655 37.7907C15.3661 37.7907 15.3667 37.7906 15.3673 37.7906H37.8307C39.5782 37.7906 41 36.3688 41 34.6213V16.0051C41 16.0038 41 16.0023 41 16.001ZM39.7965 15.0039L35.7798 12.8616L39.7965 10.7193V15.0039ZM3.16928 4.41287H37.8307C38.9146 4.41287 39.7965 5.29473 39.7965 6.37863V9.35534L34.501 12.1796L32.9788 11.3678C32.8018 11.2734 32.5895 11.2734 32.4125 11.3678L28.3939 13.511C28.3337 13.4908 28.2695 13.4794 28.2025 13.4794H8.05357L4.0943 11.3678C3.91731 11.2734 3.70492 11.2734 3.52793 11.3678L1.20352 12.6075V6.37863C1.20352 5.29473 2.08538 4.41287 3.16928 4.41287ZM1.20352 34.6213V13.9715L3.81115 12.5808L7.61461 14.6093C7.61597 14.61 7.61733 14.6107 7.6187 14.6114L11.2305 16.5378C11.3207 16.5859 11.4177 16.6087 11.5132 16.6087C11.7283 16.6087 11.9364 16.4931 12.0447 16.29C12.2011 15.9968 12.0901 15.6323 11.7969 15.4759L10.3103 14.683H16.1546C16.0667 14.9133 16.0215 15.1576 16.0215 15.3982C16.0215 15.8816 16.1928 16.3329 16.5036 16.6687C16.7493 16.9342 17.1966 17.2505 17.9325 17.2505H20.5C21.0747 17.2505 21.3425 17.466 21.3425 17.6116C21.3425 17.7572 21.0747 17.9726 20.5 17.9726H15.365C13.3934 17.9726 12.3834 18.8836 12.2569 19.7864C12.1618 20.4651 12.5478 21.3296 13.9158 21.7205C15.3018 22.1165 17.8246 22.3005 20.4954 22.4953C22.9249 22.6725 25.4372 22.8558 27.3589 23.2062C30.0895 23.7041 30.1683 24.2865 30.1683 24.3512C30.1683 24.3706 30.1443 24.833 28.0556 25.5645C26.5553 26.0898 24.5101 26.5811 22.3446 27.1014C17.3475 28.3018 12.1803 29.5431 10.9837 31.7689C10.4163 32.8242 10.339 33.8291 10.754 34.7554C11.1002 35.5285 11.7546 36.1308 12.4581 36.5871H3.16928C2.08538 36.5871 1.20352 35.7052 1.20352 34.6213ZM37.8307 36.5871H15.4389C14.5783 36.367 12.4395 35.5745 11.8524 34.2635C11.5944 33.6877 11.657 33.0581 12.0437 32.3388C12.9853 30.5875 18.3306 29.3034 22.6257 28.2717C28.2115 26.9297 31.3718 26.0861 31.3718 24.3512C31.3718 22.9006 29.3426 22.3446 27.5749 22.0222C25.5894 21.6602 23.0443 21.4745 20.583 21.2949C17.9758 21.1048 15.5132 20.9251 14.2466 20.5632C13.7466 20.4204 13.4186 20.1696 13.4489 19.9532C13.483 19.7097 14.0129 19.176 15.3651 19.176H20.5001C21.8433 19.176 22.5461 18.3889 22.5461 17.6114C22.5461 16.834 21.8433 16.0468 20.5001 16.0468H17.9326C17.6907 16.0468 17.5072 15.981 17.3869 15.8511C17.2826 15.7383 17.2251 15.5775 17.2251 15.3981C17.2251 15.1324 17.3741 14.6829 17.9325 14.6829H26.1967L24.71 15.4757C24.4167 15.6321 24.3058 15.9966 24.4622 16.2899C24.6187 16.5832 24.9833 16.694 25.2764 16.5376L32.6958 12.5806L39.7966 16.3677V34.6211C39.7965 35.7052 38.9146 36.5871 37.8307 36.5871Z"
                  fill="black"
                />
                <path
                  d="M7.66243 10.8316C9.05603 10.8316 10.1898 9.69785 10.1898 8.30425C10.1898 6.91065 9.05603 5.77686 7.66243 5.77686C6.26883 5.77686 5.13503 6.91065 5.13503 8.30425C5.13503 9.69785 6.26883 10.8316 7.66243 10.8316ZM7.66243 6.98038C8.3924 6.98038 8.9863 7.57428 8.9863 8.30425C8.9863 9.03423 8.3924 9.62813 7.66243 9.62813C6.93245 9.62813 6.33855 9.03423 6.33855 8.30425C6.33855 7.57428 6.93245 6.98038 7.66243 6.98038Z"
                  fill="black"
                />
              </svg>
              <a className="text-black">Click here to add a photo</a>
            </div>
          </button>
        )}
        <div className="flex flex-col space-y-2">
          <label className="text-sm">
            Location of accident (Place, landmarks, etc.)
          </label>
          <input
            placeholder="If the address is unknown, provide a description."
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          ></input>
        </div>
        <label className="text-xs font-light text-gray-400">
          All fields are optional.
        </label>
      </div>
    </div>
  );
};

const MissingPost = (props) => {
  const ref = props.refProp;
  const handleChange = props.handleChange;
  return (
    <div className="w-full border-solid border-2 p-4 rounded-lg flex flex-col mb-3">
      <div className="p-3 bg-yellow-600 text-white mb-3 rounded flex flex-row space-x-3 items-center cursor-pointer">
        <svg
          width="30"
          height="30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-5 -5 30 30"
          className="h-full flex-none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.25694 3.09882C9.02154 1.73952 10.9786 1.73952 11.7432 3.09882L17.3235 13.0194C18.0735 14.3526 17.11 15.9999 15.5804 15.9999H4.41978C2.89013 15.9999 1.9267 14.3526 2.67663 13.0194L8.25694 3.09882ZM11 13C11 13.5523 10.5523 14 10 14C9.44772 14 9 13.5523 9 13C9 12.4477 9.44772 12 10 12C10.5523 12 11 12.4477 11 13ZM10 5C9.44772 5 9 5.44772 9 6V9C9 9.55228 9.44772 10 10 10C10.5523 10 11 9.55228 11 9V6C11 5.44772 10.5523 5 10 5Z"
            fill="#fff"
          />
        </svg>
        <div className="text-xs">
          This category is only for locating missing persons. You can provide
          rewards for this category type.{" "}
          <b>AGAP will not facilitate payments.</b>
        </div>
      </div>
      <div className="flex flex-col space-y-3">
        {props.files != undefined ? (
          displaySelected(props.files)
        ) : (
          <button onClick={() => ref.current.click()}>
            <input
              ref={ref}
              onChange={handleChange}
              multiple={false}
              type="file"
              hidden
            />
            <div className="bg-white rounded pt-10 pb-10 cursor-pointer bg-gray-300 flex flex-col items-center content-center">
              <svg
                width="100"
                height="100"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41 16.001V9.72225C41 9.72089 41 9.71953 41 9.71808V6.37863C41 4.63111 39.5782 3.20935 37.8307 3.20935H3.16928C1.42176 3.20935 0 4.63111 0 6.37863V13.6046C0 13.6059 0 13.6073 0 13.6088V34.6213C0 36.3688 1.42176 37.7906 3.16928 37.7906H15.3628C15.3637 37.7906 15.3646 37.7907 15.3655 37.7907C15.3661 37.7907 15.3667 37.7906 15.3673 37.7906H37.8307C39.5782 37.7906 41 36.3688 41 34.6213V16.0051C41 16.0038 41 16.0023 41 16.001ZM39.7965 15.0039L35.7798 12.8616L39.7965 10.7193V15.0039ZM3.16928 4.41287H37.8307C38.9146 4.41287 39.7965 5.29473 39.7965 6.37863V9.35534L34.501 12.1796L32.9788 11.3678C32.8018 11.2734 32.5895 11.2734 32.4125 11.3678L28.3939 13.511C28.3337 13.4908 28.2695 13.4794 28.2025 13.4794H8.05357L4.0943 11.3678C3.91731 11.2734 3.70492 11.2734 3.52793 11.3678L1.20352 12.6075V6.37863C1.20352 5.29473 2.08538 4.41287 3.16928 4.41287ZM1.20352 34.6213V13.9715L3.81115 12.5808L7.61461 14.6093C7.61597 14.61 7.61733 14.6107 7.6187 14.6114L11.2305 16.5378C11.3207 16.5859 11.4177 16.6087 11.5132 16.6087C11.7283 16.6087 11.9364 16.4931 12.0447 16.29C12.2011 15.9968 12.0901 15.6323 11.7969 15.4759L10.3103 14.683H16.1546C16.0667 14.9133 16.0215 15.1576 16.0215 15.3982C16.0215 15.8816 16.1928 16.3329 16.5036 16.6687C16.7493 16.9342 17.1966 17.2505 17.9325 17.2505H20.5C21.0747 17.2505 21.3425 17.466 21.3425 17.6116C21.3425 17.7572 21.0747 17.9726 20.5 17.9726H15.365C13.3934 17.9726 12.3834 18.8836 12.2569 19.7864C12.1618 20.4651 12.5478 21.3296 13.9158 21.7205C15.3018 22.1165 17.8246 22.3005 20.4954 22.4953C22.9249 22.6725 25.4372 22.8558 27.3589 23.2062C30.0895 23.7041 30.1683 24.2865 30.1683 24.3512C30.1683 24.3706 30.1443 24.833 28.0556 25.5645C26.5553 26.0898 24.5101 26.5811 22.3446 27.1014C17.3475 28.3018 12.1803 29.5431 10.9837 31.7689C10.4163 32.8242 10.339 33.8291 10.754 34.7554C11.1002 35.5285 11.7546 36.1308 12.4581 36.5871H3.16928C2.08538 36.5871 1.20352 35.7052 1.20352 34.6213ZM37.8307 36.5871H15.4389C14.5783 36.367 12.4395 35.5745 11.8524 34.2635C11.5944 33.6877 11.657 33.0581 12.0437 32.3388C12.9853 30.5875 18.3306 29.3034 22.6257 28.2717C28.2115 26.9297 31.3718 26.0861 31.3718 24.3512C31.3718 22.9006 29.3426 22.3446 27.5749 22.0222C25.5894 21.6602 23.0443 21.4745 20.583 21.2949C17.9758 21.1048 15.5132 20.9251 14.2466 20.5632C13.7466 20.4204 13.4186 20.1696 13.4489 19.9532C13.483 19.7097 14.0129 19.176 15.3651 19.176H20.5001C21.8433 19.176 22.5461 18.3889 22.5461 17.6114C22.5461 16.834 21.8433 16.0468 20.5001 16.0468H17.9326C17.6907 16.0468 17.5072 15.981 17.3869 15.8511C17.2826 15.7383 17.2251 15.5775 17.2251 15.3981C17.2251 15.1324 17.3741 14.6829 17.9325 14.6829H26.1967L24.71 15.4757C24.4167 15.6321 24.3058 15.9966 24.4622 16.2899C24.6187 16.5832 24.9833 16.694 25.2764 16.5376L32.6958 12.5806L39.7966 16.3677V34.6211C39.7965 35.7052 38.9146 36.5871 37.8307 36.5871Z"
                  fill="black"
                />
                <path
                  d="M7.66243 10.8316C9.05603 10.8316 10.1898 9.69785 10.1898 8.30425C10.1898 6.91065 9.05603 5.77686 7.66243 5.77686C6.26883 5.77686 5.13503 6.91065 5.13503 8.30425C5.13503 9.69785 6.26883 10.8316 7.66243 10.8316ZM7.66243 6.98038C8.3924 6.98038 8.9863 7.57428 8.9863 8.30425C8.9863 9.03423 8.3924 9.62813 7.66243 9.62813C6.93245 9.62813 6.33855 9.03423 6.33855 8.30425C6.33855 7.57428 6.93245 6.98038 7.66243 6.98038Z"
                  fill="black"
                />
              </svg>
              <a className="text-black">Click here to add a photo</a>
            </div>
          </button>
        )}
        <div className="flex flex-col space-y-2">
          <label className="text-sm">Name of missing person(s)</label>
          <input placeholder="Name(s)" className="p-2 rounded"></input>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm">
            Location last seen (Place, landmarks, etc.)
          </label>
          <input
            placeholder="If the location is unknown, provide a description."
            className="p-2 rounded"
          ></input>
        </div>
        <div className="flex flex-col space-y-2">
          <label className="text-sm">Description</label>
          <textarea
            placeholder="Provide a description of the missing individual(s) (ie. Clothes, appearance)"
            className="p-2 rounded text-sm"
          ></textarea>
        </div>
        <div className="flex flex-col space-y-2 text-sm">
          <label className="">Reward (in ₱)</label>
          <input
            type="number"
            className="p-2 rounded"
            placeholder="Leave empty if none"
          ></input>
        </div>
        <label className="text-xs font-light text-gray-400">
          All fields are optional.
        </label>
      </div>
    </div>
  );
};

const HazardPost = (props) => {
  const ref = props.refProp;
  const handleChange = props.handleChange;
  return (
    <div className="w-full border-solid border-2 p-4 rounded-lg flex flex-col mb-3">
      <div className="flex flex-col space-y-3">
        {props.files != undefined ? (
          displaySelected(props.files)
        ) : (
          <button onClick={() => ref.current.click()}>
            <input
              ref={ref}
              onChange={handleChange}
              multiple={false}
              type="file"
              hidden
            />
            <div className="bg-white rounded pt-10 pb-10 cursor-pointer bg-gray-300 flex flex-col items-center content-center">
              <svg
                width="100"
                height="100"
                viewBox="0 0 41 41"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M41 16.001V9.72225C41 9.72089 41 9.71953 41 9.71808V6.37863C41 4.63111 39.5782 3.20935 37.8307 3.20935H3.16928C1.42176 3.20935 0 4.63111 0 6.37863V13.6046C0 13.6059 0 13.6073 0 13.6088V34.6213C0 36.3688 1.42176 37.7906 3.16928 37.7906H15.3628C15.3637 37.7906 15.3646 37.7907 15.3655 37.7907C15.3661 37.7907 15.3667 37.7906 15.3673 37.7906H37.8307C39.5782 37.7906 41 36.3688 41 34.6213V16.0051C41 16.0038 41 16.0023 41 16.001ZM39.7965 15.0039L35.7798 12.8616L39.7965 10.7193V15.0039ZM3.16928 4.41287H37.8307C38.9146 4.41287 39.7965 5.29473 39.7965 6.37863V9.35534L34.501 12.1796L32.9788 11.3678C32.8018 11.2734 32.5895 11.2734 32.4125 11.3678L28.3939 13.511C28.3337 13.4908 28.2695 13.4794 28.2025 13.4794H8.05357L4.0943 11.3678C3.91731 11.2734 3.70492 11.2734 3.52793 11.3678L1.20352 12.6075V6.37863C1.20352 5.29473 2.08538 4.41287 3.16928 4.41287ZM1.20352 34.6213V13.9715L3.81115 12.5808L7.61461 14.6093C7.61597 14.61 7.61733 14.6107 7.6187 14.6114L11.2305 16.5378C11.3207 16.5859 11.4177 16.6087 11.5132 16.6087C11.7283 16.6087 11.9364 16.4931 12.0447 16.29C12.2011 15.9968 12.0901 15.6323 11.7969 15.4759L10.3103 14.683H16.1546C16.0667 14.9133 16.0215 15.1576 16.0215 15.3982C16.0215 15.8816 16.1928 16.3329 16.5036 16.6687C16.7493 16.9342 17.1966 17.2505 17.9325 17.2505H20.5C21.0747 17.2505 21.3425 17.466 21.3425 17.6116C21.3425 17.7572 21.0747 17.9726 20.5 17.9726H15.365C13.3934 17.9726 12.3834 18.8836 12.2569 19.7864C12.1618 20.4651 12.5478 21.3296 13.9158 21.7205C15.3018 22.1165 17.8246 22.3005 20.4954 22.4953C22.9249 22.6725 25.4372 22.8558 27.3589 23.2062C30.0895 23.7041 30.1683 24.2865 30.1683 24.3512C30.1683 24.3706 30.1443 24.833 28.0556 25.5645C26.5553 26.0898 24.5101 26.5811 22.3446 27.1014C17.3475 28.3018 12.1803 29.5431 10.9837 31.7689C10.4163 32.8242 10.339 33.8291 10.754 34.7554C11.1002 35.5285 11.7546 36.1308 12.4581 36.5871H3.16928C2.08538 36.5871 1.20352 35.7052 1.20352 34.6213ZM37.8307 36.5871H15.4389C14.5783 36.367 12.4395 35.5745 11.8524 34.2635C11.5944 33.6877 11.657 33.0581 12.0437 32.3388C12.9853 30.5875 18.3306 29.3034 22.6257 28.2717C28.2115 26.9297 31.3718 26.0861 31.3718 24.3512C31.3718 22.9006 29.3426 22.3446 27.5749 22.0222C25.5894 21.6602 23.0443 21.4745 20.583 21.2949C17.9758 21.1048 15.5132 20.9251 14.2466 20.5632C13.7466 20.4204 13.4186 20.1696 13.4489 19.9532C13.483 19.7097 14.0129 19.176 15.3651 19.176H20.5001C21.8433 19.176 22.5461 18.3889 22.5461 17.6114C22.5461 16.834 21.8433 16.0468 20.5001 16.0468H17.9326C17.6907 16.0468 17.5072 15.981 17.3869 15.8511C17.2826 15.7383 17.2251 15.5775 17.2251 15.3981C17.2251 15.1324 17.3741 14.6829 17.9325 14.6829H26.1967L24.71 15.4757C24.4167 15.6321 24.3058 15.9966 24.4622 16.2899C24.6187 16.5832 24.9833 16.694 25.2764 16.5376L32.6958 12.5806L39.7966 16.3677V34.6211C39.7965 35.7052 38.9146 36.5871 37.8307 36.5871Z"
                  fill="black"
                />
                <path
                  d="M7.66243 10.8316C9.05603 10.8316 10.1898 9.69785 10.1898 8.30425C10.1898 6.91065 9.05603 5.77686 7.66243 5.77686C6.26883 5.77686 5.13503 6.91065 5.13503 8.30425C5.13503 9.69785 6.26883 10.8316 7.66243 10.8316ZM7.66243 6.98038C8.3924 6.98038 8.9863 7.57428 8.9863 8.30425C8.9863 9.03423 8.3924 9.62813 7.66243 9.62813C6.93245 9.62813 6.33855 9.03423 6.33855 8.30425C6.33855 7.57428 6.93245 6.98038 7.66243 6.98038Z"
                  fill="black"
                />
              </svg>
              <a className="text-black">Click here to add a photo</a>
            </div>
          </button>
        )}
        <div className="flex flex-col space-y-2">
          <label className="text-sm">Location (Place, landmarks, etc.)</label>
          <input
            placeholder="If the location is unknown, provide a description."
            className="p-2 rounded"
          ></input>
        </div>
        <label className="text-xs font-light text-gray-400">
          All fields are optional.
        </label>
      </div>
    </div>
  );
};

const UploadPhotoButton = (props) => {
  const ref = props.ref;
  const handleChange = props.handleChange;
  return (
    <button onClick={() => ref.current.click()}>
      <input
        ref={ref}
        onChange={handleChange}
        multiple={false}
        type="file"
        hidden
      />
      <div className="bg-white rounded pt-10 pb-10 cursor-pointer bg-gray-300 flex flex-col items-center content-center">
        <svg
          width="100"
          height="100"
          viewBox="0 0 41 41"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41 16.001V9.72225C41 9.72089 41 9.71953 41 9.71808V6.37863C41 4.63111 39.5782 3.20935 37.8307 3.20935H3.16928C1.42176 3.20935 0 4.63111 0 6.37863V13.6046C0 13.6059 0 13.6073 0 13.6088V34.6213C0 36.3688 1.42176 37.7906 3.16928 37.7906H15.3628C15.3637 37.7906 15.3646 37.7907 15.3655 37.7907C15.3661 37.7907 15.3667 37.7906 15.3673 37.7906H37.8307C39.5782 37.7906 41 36.3688 41 34.6213V16.0051C41 16.0038 41 16.0023 41 16.001ZM39.7965 15.0039L35.7798 12.8616L39.7965 10.7193V15.0039ZM3.16928 4.41287H37.8307C38.9146 4.41287 39.7965 5.29473 39.7965 6.37863V9.35534L34.501 12.1796L32.9788 11.3678C32.8018 11.2734 32.5895 11.2734 32.4125 11.3678L28.3939 13.511C28.3337 13.4908 28.2695 13.4794 28.2025 13.4794H8.05357L4.0943 11.3678C3.91731 11.2734 3.70492 11.2734 3.52793 11.3678L1.20352 12.6075V6.37863C1.20352 5.29473 2.08538 4.41287 3.16928 4.41287ZM1.20352 34.6213V13.9715L3.81115 12.5808L7.61461 14.6093C7.61597 14.61 7.61733 14.6107 7.6187 14.6114L11.2305 16.5378C11.3207 16.5859 11.4177 16.6087 11.5132 16.6087C11.7283 16.6087 11.9364 16.4931 12.0447 16.29C12.2011 15.9968 12.0901 15.6323 11.7969 15.4759L10.3103 14.683H16.1546C16.0667 14.9133 16.0215 15.1576 16.0215 15.3982C16.0215 15.8816 16.1928 16.3329 16.5036 16.6687C16.7493 16.9342 17.1966 17.2505 17.9325 17.2505H20.5C21.0747 17.2505 21.3425 17.466 21.3425 17.6116C21.3425 17.7572 21.0747 17.9726 20.5 17.9726H15.365C13.3934 17.9726 12.3834 18.8836 12.2569 19.7864C12.1618 20.4651 12.5478 21.3296 13.9158 21.7205C15.3018 22.1165 17.8246 22.3005 20.4954 22.4953C22.9249 22.6725 25.4372 22.8558 27.3589 23.2062C30.0895 23.7041 30.1683 24.2865 30.1683 24.3512C30.1683 24.3706 30.1443 24.833 28.0556 25.5645C26.5553 26.0898 24.5101 26.5811 22.3446 27.1014C17.3475 28.3018 12.1803 29.5431 10.9837 31.7689C10.4163 32.8242 10.339 33.8291 10.754 34.7554C11.1002 35.5285 11.7546 36.1308 12.4581 36.5871H3.16928C2.08538 36.5871 1.20352 35.7052 1.20352 34.6213ZM37.8307 36.5871H15.4389C14.5783 36.367 12.4395 35.5745 11.8524 34.2635C11.5944 33.6877 11.657 33.0581 12.0437 32.3388C12.9853 30.5875 18.3306 29.3034 22.6257 28.2717C28.2115 26.9297 31.3718 26.0861 31.3718 24.3512C31.3718 22.9006 29.3426 22.3446 27.5749 22.0222C25.5894 21.6602 23.0443 21.4745 20.583 21.2949C17.9758 21.1048 15.5132 20.9251 14.2466 20.5632C13.7466 20.4204 13.4186 20.1696 13.4489 19.9532C13.483 19.7097 14.0129 19.176 15.3651 19.176H20.5001C21.8433 19.176 22.5461 18.3889 22.5461 17.6114C22.5461 16.834 21.8433 16.0468 20.5001 16.0468H17.9326C17.6907 16.0468 17.5072 15.981 17.3869 15.8511C17.2826 15.7383 17.2251 15.5775 17.2251 15.3981C17.2251 15.1324 17.3741 14.6829 17.9325 14.6829H26.1967L24.71 15.4757C24.4167 15.6321 24.3058 15.9966 24.4622 16.2899C24.6187 16.5832 24.9833 16.694 25.2764 16.5376L32.6958 12.5806L39.7966 16.3677V34.6211C39.7965 35.7052 38.9146 36.5871 37.8307 36.5871Z"
            fill="black"
          />
          <path
            d="M7.66243 10.8316C9.05603 10.8316 10.1898 9.69785 10.1898 8.30425C10.1898 6.91065 9.05603 5.77686 7.66243 5.77686C6.26883 5.77686 5.13503 6.91065 5.13503 8.30425C5.13503 9.69785 6.26883 10.8316 7.66243 10.8316ZM7.66243 6.98038C8.3924 6.98038 8.9863 7.57428 8.9863 8.30425C8.9863 9.03423 8.3924 9.62813 7.66243 9.62813C6.93245 9.62813 6.33855 9.03423 6.33855 8.30425C6.33855 7.57428 6.93245 6.98038 7.66243 6.98038Z"
            fill="black"
          />
        </svg>
        <a className="text-black">Click here to add a photo</a>
      </div>
    </button>
  );
};

function displaySelected(photo) {
  const image = URL.createObjectURL(photo);
  return (
    <button>
      <div className="bg-white rounded pt-10 pb-10 cursor-pointer bg-gray-300 flex flex-col items-center content-center">
        <img
          style={{
            maxWidth: 500,
            maxHeight: 500,
          }}
          id="photo"
          src={image}
        />
        <a className="text-black">Tap again to change photo</a>
      </div>
    </button>
  );
}

export default PostAuxillary;
