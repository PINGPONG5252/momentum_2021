const quotes = [
  { quote: "1%의 가능성, 그것이 나의 길이다. ", author: "-나폴레옹" },
  {
    quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
    author: "-이소룡",
  },
  {
    quote: "인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라.",
    author: "-나딘 스테어",
  },
  {
    quote: "문제점을 찾지말고 해결책을 찾으라",
    author: "-헨리포드",
  },
  {
    quote: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다.",
    author: "-볼드윈",
  },
  {
    quote:
      "직접 눈으로 본 일도 오히려 참인지 아닌지 염려스러운데 더구나 등뒤에서 남이 말하는 것이야 어찌 이것을 깊이 믿을 수 있으랴.",
    author: "-명심보감",
  },
  {
    quote: "어느 정도 깊이 괴로워하는냐 하는 것이 인간의 위치를 결정한다",
    author: "-니체",
  },
  {
    quote:
      "학문하는 길에는 방법이 따로 없다. 모르는 것이 있으면 길을 가는 사람이라도 잡고 묻는 것이 옳다. 또 종이지만 나보다 글자 하나라도 많이 알면 그에게 배워야 한다.",
    author: "-박지원",
  },
  {
    quote:
      "우리는 단 한 번의 인생을 산다. 하지만 제대로 산다면, 한 번으로 충분하다",
    author: "-Mae West",
  },
  {
    quote: "물고기는 언제나 입으로 낚인다. 인간도 역시 입으로 걸린다.",
    author: "-탈무드",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
