import Tweet from "./Tweet";

export default function TweetsList({ tweets, deleteTweet }) {
  return tweets.map((tweet) => (
    <Tweet key={tweet.id} tweet={tweet} deleteTweet={deleteTweet} />
  ));
}
