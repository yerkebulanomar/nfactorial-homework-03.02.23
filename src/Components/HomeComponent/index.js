import "./styles.css";
import NewTweet from "./NewTweet";
import TweetList from "./TweetsList";

export default function Home() {
  return (
    <div className="home-menu w-50 mt-3">
      <h5 className="mx-3">Home</h5>
      <NewTweet />
      <TweetList />
    </div>
  );
}
