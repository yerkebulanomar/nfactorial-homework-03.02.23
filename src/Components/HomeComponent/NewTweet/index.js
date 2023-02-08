import { RYAN } from "../Images/";
import "./styles.css";

export default function NewTweet({ content, onChangeTextInput, onTweet }) {
  return (
    <div className="new-tweet p-3">
      <div>
        <img src={RYAN} className="profile-image" alt="img" />
        <input
          onChange={onChangeTextInput}
          value={content}
          placeholder="What's happening?"
          className="new-tweet-input mx-3"
        />
      </div>
      <div className="d-flex justify-content-end">
        <button onClick={onTweet} className="tweet-button">
          Tweet
        </button>
      </div>
    </div>
  );
}
