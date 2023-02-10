import { COMMENTS, LIKES, RETWEETS, SHARE, VIEW, DELETE } from "../Images";
import "./styles.css";

export default function Tweet({ tweet, deleteTweet, searchTweet }) {
  return (
    <div className="tweet mt-3 mx-3">
      <div className="d-flex justify-content-between">
        <p className="tweet-uppertext mx-5">
          You might like! · <span className="see-more">See more</span>
        </p>
        <button onClick={() => deleteTweet(tweet.id)} className="delete-button">
          {DELETE}
        </button>
      </div>

      <div className="d-flex">
        <img src={tweet.image} className="tweet-picture" alt="img" />
        <div className="mx-3  ">
          <p className="author">
            {tweet.authorName}{" "}
            <span className="username">{tweet.authorUserName}</span>
          </p>
          <p>{tweet.content}</p>
        </div>
      </div>
      <div className="d-flex justify-content-around">
        <div className="d-flex">
          <div className="bottom-icons ">{COMMENTS}</div>
          <p className="px-1">{tweet.replies}</p>
        </div>
        <div className="d-flex">
          <div className="bottom-icons">{RETWEETS}</div>
          <p className="px-1">{tweet.retweets}</p>
        </div>
        <div className="d-flex">
          <div className="bottom-icons">{LIKES}</div>
          <p className="px-1">{tweet.likes}</p>
        </div>
        <div className="d-flex">
          <div className="bottom-icons">{VIEW}</div>
          <p className="px-1">{tweet.views}</p>
        </div>
        <div className="d-flex">
          <div className="bottom-icons">{SHARE}</div>
        </div>
      </div>
    </div>
  );
}
