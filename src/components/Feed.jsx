import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from "../utils/constants";
import { addFeed } from "../utils/feedSlice";
import { useEffect } from "react";
import axios from "axios";
import UserCard from "./UserCard";

const Feed = () => {
  const feed = useSelector((store) => store.feed);
  console.log(feed);
  const dispatch = useDispatch();
  const getFeed = async () => {
    //if (feed) return;
    try {
      console.log("testing in feed");
      const res = await axios.get(BASE_URL + "/feed", {
        withCredentials: true,
      });
      console.log(feed);
      dispatch(addFeed(res?.data?.data));
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    getFeed();
  }, []);
  return (
    feed && (
      <div className="flex justify-center my-10">
        <UserCard user={feed[0]} />
      </div>
    )
  );
};

export default Feed;
