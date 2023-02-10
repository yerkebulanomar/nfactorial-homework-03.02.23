// import Tweet from "./Tweet";

// export default function TweetsList({ tweets, deleteTweet }) {
//   // console.log(tweets);
//   return tweets.map((tweet) => (
//     <Tweet key={tweet.id} tweet={tweet} deleteTweet={deleteTweet} />
//   ));
// }

import Tweet from "./Tweet";

export default function TweetsList({ tweets, deleteTweet, substring }) {
  if (substring !== "" || substring !== null) {
    return (
      (substring = substring.toLowerCase()),
      tweets
        .filter((ele) => {
          let str = ele.content.toLowerCase();
          return str.includes(substring);
        })
        .map((tweet) => (
          <Tweet tweet={tweet} key={tweet.id} deleteTweet={deleteTweet} />
        ))
    );
  } else if (substring === "" || substring === null) {
    return tweets.map((tweet) => (
      <Tweet tweet={tweet} key={tweet.id} deleteTweet={deleteTweet} />
    ));
  }
}
