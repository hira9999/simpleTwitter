import React, { useRef, useState } from "react";
import { firebaseDB } from "../firebase";

const Twit = ({ twit, isOwner }) => {
  const [edting, setEditing] = useState(false);
  const [newTwit, setNewTwit] = useState(twit.value);
  const newTwitRef = useRef();
  const onDelete = () => {
    firebaseDB.doc(`twit/${twit.id}`).delete();
  };
  const toggleEdting = () => {
    setEditing((prev) => !prev);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await firebaseDB.doc(`twit/${twit.id}`).update({
      value: newTwit,
    });
    toggleEdting();
  };
  const onChange = (e) => {
    const value = newTwitRef.current.value;
    setNewTwit(value);
  };

  return (
    <div>
      {edting ? (
        <form onSubmit={onSubmit}>
          <input
            type="text"
            onChange={onChange}
            value={newTwit}
            ref={newTwitRef}
            required
          />
          <input type="submit" value="confirm" />
        </form>
      ) : (
        <>
          <div>{twit.value}</div>
          {isOwner && (
            <>
              <button onClick={onDelete}>Delete</button>
              <button onClick={toggleEdting}>Update</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Twit;
