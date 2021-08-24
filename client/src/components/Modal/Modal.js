import React from "react";

export default function Modal({ selectedUser, modalToggle }) {
  return (
    <div>
      {modalToggle && (
        <>
          <img src={selectedUser.profile_pic} alt="profile" />
          <h3>{selectedUser.name}</h3>
          <h5>{selectedUser.comapny}</h5>
          <h5>{selectedUser.date_posted}</h5>
          <h5>{selectedUser.likes}</h5>
          <h5>{selectedUser.post_content}</h5>
        </>
      )}
    </div>
  );
}
