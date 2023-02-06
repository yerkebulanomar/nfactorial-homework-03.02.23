import { RYAN } from "../Images/";

export default function NewTweet() {
  return (
    <div className="new-tweet p-3">
      <img src={RYAN} className="profile-image" />
      <input placeholder="What's happening?" className="new-tweet-input mx-3" />
    </div>
  );
}
