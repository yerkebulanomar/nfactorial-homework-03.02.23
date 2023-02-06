import { AYTEKIN, MARIA, SAMER } from "../Images";
import Tweet from "./Tweet";

export default function TweetList() {
  const tweets = [
    {
      authorName: "Aytekin Tank",
      authorUserName: "@aytekintank",
      image: AYTEKIN,
      content:
        "My heart goes out to the people of Türkiye and Syria in this hour of tragedy.",
      replies: 3444,
      retweets: 12,
      likes: 123,
      views: 56,
    },
    {
      authorName: "Samer Buna",
      authorUserName: "@samerbuna",
      image: SAMER,
      content: "TFF, depremzedeler için yardım kampanyası başlattı",
      replies: 200,
      retweets: 123,
      likes: 2135,
      views: 45,
    },
    {
      authorName: "Maria Gomes",
      authorUserName: "@mariagomes",
      image: MARIA,
      content:
        "İstanbul'da deprem bölgesinde hayatını kaybedenler için sela okundu",
      replies: 111,
      retweets: 45,
      likes: 2332,
      views: 12,
    },
    {
      authorName: "Samer Buna",
      authorUserName: "@samerbuna",
      image: SAMER,
      content: `Health care providers performing FGM are violating the fundamental medical ethics principle to “do no harm"`,
      replies: 12,
      retweets: 45,
      likes: 23,
      views: 5,
    },
    {
      authorName: "Samer Buna",
      authorUserName: "@samerbuna",
      image: SAMER,
      content:
        "That's why we've prepared an easy-to-understand resource for anyone wishing to learn more and take #ClimateAction.",
      replies: 122,
      retweets: 67,
      likes: 344,
      views: 233,
    },
    {
      authorName: "Maria Gomes",
      authorUserName: "@mariagomes",
      image: MARIA,
      content:
        "Fransa Cumhurbaşkanı Emmanuel Macron, Cumhurbaşkanı Erdoğan’ı telefonla arayarak deprem dolayısıyla geçmiş olsun dileklerini iletti ",
      replies: 1223,
      retweets: 22,
      likes: 122,
      views: 12,
    },
  ];

  return tweets.map((item, index) => <Tweet key={index} {...item} />);
}
