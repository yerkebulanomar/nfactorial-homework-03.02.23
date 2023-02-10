import React from "react";
import "./styles.css";
import NewTweet from "./NewTweet";
import TweetsList from "./TweetsList";
import { AYTEKIN, MARIA, SAMER, RYAN } from "./Images";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
      searchContent: "",
      tweets: [
        {
          id: 0,
          authorName: "Aytekin Tank",
          authorUserName: "@aytekintank",
          image: AYTEKIN,
          content:
            "My heart goes out to the people of Türkiye and Syria in this hour of tragedy.",
          replies: 3444,
          retweets: 12,
          likes: 123,
          views: 56,
          topic: "Turkey",
        },
        {
          id: 1,
          authorName: "Samer Buna",
          authorUserName: "@samerbuna",
          image: SAMER,
          content: "TFF, depremzedeler için yardım kampanyası başlattı",
          replies: 200,
          retweets: 123,
          likes: 2135,
          views: 45,
          topic: "Politics",
        },
        {
          id: 2,
          authorName: "Maria Gomes",
          authorUserName: "@mariagomes",
          image: MARIA,
          content:
            "İstanbul'da deprem bölgesinde hayatını kaybedenler için sela okundu",
          replies: 111,
          retweets: 45,
          likes: 2332,
          views: 12,
          topic: "Education",
        },
        {
          id: 3,
          authorName: "Samer Buna",
          authorUserName: "@samerbuna",
          image: SAMER,
          content: `Health care providers performing FGM are violating the fundamental medical ethics principle to “do no harm"`,
          replies: 12,
          retweets: 45,
          likes: 23,
          views: 5,
          topic: "Turkey",
        },
        {
          id: 4,
          authorName: "Samer Buna",
          authorUserName: "@samerbuna",
          image: SAMER,
          content:
            "That's why we've prepared an easy-to-understand resource for anyone wishing to learn more and take #ClimateAction.",
          replies: 122,
          retweets: 67,
          likes: 344,
          views: 233,
          topic: "Education",
        },
        {
          id: 5,
          authorName: "Maria Gomes",
          authorUserName: "@mariagomes",
          image: MARIA,
          content:
            "Fransa Cumhurbaşkanı Emmanuel Macron, Cumhurbaşkanı Erdoğan’ı telefonla arayarak deprem dolayısıyla geçmiş olsun dileklerini iletti ",
          replies: 1223,
          retweets: 22,
          likes: 122,
          views: 12,
          topic: "Politics",
        },
      ],
      // filteredTweets: [
      //   {
      //     id: 0,
      //     authorName: "Aytekin Tank",
      //     authorUserName: "@aytekintank",
      //     image: AYTEKIN,
      //     content:
      //       "My heart goes out to the people of Türkiye and Syria in this hour of tragedy.",
      //     replies: 3444,
      //     retweets: 12,
      //     likes: 123,
      //     views: 56,
      //     topic: "Turkey",
      //   },
      //   {
      //     id: 1,
      //     authorName: "Samer Buna",
      //     authorUserName: "@samerbuna",
      //     image: SAMER,
      //     content: "TFF, depremzedeler için yardım kampanyası başlattı",
      //     replies: 200,
      //     retweets: 123,
      //     likes: 2135,
      //     views: 45,
      //     topic: "Politics",
      //   },
      //   {
      //     id: 2,
      //     authorName: "Maria Gomes",
      //     authorUserName: "@mariagomes",
      //     image: MARIA,
      //     content:
      //       "İstanbul'da deprem bölgesinde hayatını kaybedenler için sela okundu",
      //     replies: 111,
      //     retweets: 45,
      //     likes: 2332,
      //     views: 12,
      //     topic: "Education",
      //   },
      //   {
      //     id: 3,
      //     authorName: "Samer Buna",
      //     authorUserName: "@samerbuna",
      //     image: SAMER,
      //     content: `Health care providers performing FGM are violating the fundamental medical ethics principle to “do no harm"`,
      //     replies: 12,
      //     retweets: 45,
      //     likes: 23,
      //     views: 5,
      //     topic: "Turkey",
      //   },
      //   {
      //     id: 4,
      //     authorName: "Samer Buna",
      //     authorUserName: "@samerbuna",
      //     image: SAMER,
      //     content:
      //       "That's why we've prepared an easy-to-understand resource for anyone wishing to learn more and take #ClimateAction.",
      //     replies: 122,
      //     retweets: 67,
      //     likes: 344,
      //     views: 233,
      //     topic: "Education",
      //   },
      //   {
      //     id: 5,
      //     authorName: "Maria Gomes",
      //     authorUserName: "@mariagomes",
      //     image: MARIA,
      //     content:
      //       "Fransa Cumhurbaşkanı Emmanuel Macron, Cumhurbaşkanı Erdoğan’ı telefonla arayarak deprem dolayısıyla geçmiş olsun dileklerini iletti ",
      //     replies: 1223,
      //     retweets: 22,
      //     likes: 122,
      //     views: 12,
      //     topic: "Politics",
      //   },
      // ],
      substring: this.props.substring,
    };
  }

  onChangeTextInput = (e) => {
    // console.log(e);
    this.setState({
      content: e.target.value,
    });
  };

  addToTweets = () => {
    const newTweet = {
      id: this.state.tweets.length,
      authorName: "Yerkebulan Omar",
      authorUserName: "@yerkebulanomar",
      image: RYAN,
      content: this.state.content,
      replies: 0,
      retweets: 0,
      likes: 0,
      views: 0,
      topic: "Politics",
    };
    if (newTweet.content !== "") {
      this.setState({
        tweets: [...this.state.tweets, newTweet],
        content: "",
      });
    }
  };

  deleteTweet = (id) => {
    this.setState({
      tweets: this.state.tweets.filter((item) => item.id !== id),
    });
  };

  onChangeSearchInput = (e) => {
    // console.log(e);
    this.setState({
      content: e.target.value,
    });
  };

  // searchTweet = (substring) => {
  //   console.log("searching");
  //   this.setState({
  //     substring: this.state.tweets.filter((item) =>
  //       item.content.includes(substring)
  //     ),
  //   });
  // };

  // filterTweetsByTopic = (topic) => {
  //   console.log("filter", topic);
  //   this.setState({
  //     filteredTweets: this.state.tweets.filter((item) => item.topic === topic),
  //   });
  // };

  render() {
    const { tweets, content, substring } = this.state;

    return (
      <div className="home-menu w-50 mt-3">
        <div className="d-flex justify-content-between">
          <h5 className="mx-3">Home</h5>
        </div>

        <NewTweet
          content={content}
          onChangeTextInput={this.onChangeTextInput}
          onTweet={this.addToTweets}
        />
        {/* <div>
          <button onClick={() => this.filterTweetsByTopic("Turkey")}>
            Turkey
          </button>
          <button onClick={() => this.filterTweetsByTopic("Education")}>
            Education
          </button>
          <button onClick={() => this.filterTweetsByTopic("Politics")}>
            Politics
          </button>
        </div> */}
        <TweetsList
          tweets={tweets}
          deleteTweet={this.deleteTweet}
          // searchTweet={this.searchTweet}
          substring={substring}
        />
      </div>
    );
  }
}

export default Home;
