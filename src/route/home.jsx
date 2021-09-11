import React, { useEffect, useRef, useState } from "react";
import Navigation from "../components/navigation";
import Twit from "../components/twit";
import { firebaseDB } from "../firebase";

const Home = ({ userObj }) => {
  const [twits, setTwits] = useState([]);
  const twitRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    firebaseDB.collection("twit").onSnapshot((snapshot) => {
      const twitArray = snapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(twitArray);
      setTwits(twitArray);
    });
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    const value = twitRef.current.value;
    await firebaseDB.collection("twit").add({
      value,
      createAt: Date.now(),
      createId: userObj.uid,
    });
    formRef.current.reset();
  };

  return (
    <>
      <Navigation />
      <div>Home</div>
      <form ref={formRef}>
        <input
          type="text"
          placeholder="message"
          ref={twitRef}
          maxLength={40}
        ></input>
        <button onClick={onSubmit}></button>
      </form>
      <div>
        {twits.map((twit) => (
          <Twit
            key={twit.id}
            twit={twit}
            isOwner={twit.createId === userObj.uid}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
