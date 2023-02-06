import { COMMENTS, LIKES, RETWEETS, SHARE, VIEW } from "../Images";

export default function Tweet(props) {
  console.log(props);
  return (
    <div className="tweet mt-3 mx-3">
      <p className="tweet-uppertext mx-5">
        You might like! · <span className="see-more">See more</span>
      </p>
      <div className="d-flex">
        <img src={props.image} className="tweet-picture" />
        <div className="mx-3  ">
          <p className="author">
            {props.authorName}{" "}
            <span className="username">{props.authorUserName}</span>
          </p>
          <p>{props.content}</p>
        </div>
      </div>
      <div className="d-flex justify-content-around">
        <div className="d-flex">
          <div className="bottom-icons ">{COMMENTS}</div>
          <p className="px-1">{props.replies}</p>
        </div>
        <div className="d-flex">
          <div className="bottom-icons">{RETWEETS}</div>
          <p className="px-1">{props.retweets}</p>
        </div>
        <div className="d-flex">
          <div className="bottom-icons">{LIKES}</div>
          <p className="px-1">{props.likes}</p>
        </div>
        <div className="d-flex">
          <div className="bottom-icons">{VIEW}</div>
          <p className="px-1">{props.views}</p>
        </div>
        <div className="d-flex">
          <div className="bottom-icons">{SHARE}</div>
        </div>
      </div>
    </div>
  );
}
