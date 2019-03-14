<template>
  <div id="app"
    :style="{ backgroundColor: backgroundColor}"
  >
    <div id="quote-box">
      <span id="text">{{currQuote.text}}</span>
      <span id="author">{{currQuote.author}}</span>
      <button id="new-quote"
        @click="changeQuote"
      >New Quote</button>
      <div class="share-buttons">
        <a id="tweet-quote"
          target="_blank"
          :href="tweetButtonHref"
          data-size="large"
        >
          Tweet
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

interface Quote {
  text: string;
  author: string;
}

@Component
export default class App extends Vue {
  private quotes: Quote[] = [
    { text: 'With great power comes great responsibility', author: 'Uncle Ben? idk' },
    { text: 'text 2', author: 'author 2' },
    { text: 'text 3', author: 'author 3' },
    { text: 'text 4', author: 'author 4' },
  ];
  private backgroundColor = '#555'; // TODO.
  private currQuote = this.quotes[0];
  private changeQuote(): void {
    let nextQuoteInd: number = Math.floor(Math.random() * this.quotes.length);
    if (nextQuoteInd === this.quotes.indexOf(this.currQuote)) {
      const lastQuoteInd = this.quotes.length - 1;
      if (nextQuoteInd === lastQuoteInd) {
        nextQuoteInd = 0;
      } else {
        nextQuoteInd++;
      }
    }
    this.currQuote = this.quotes[nextQuoteInd];
  }
  get tweetButtonHref(): string {
    const queryText = encodeURI(`"${this.currQuote.text}" – ${this.currQuote.author}`);
    const queryHashtags = 'quotes,freeCodeCamp,VueJS';
    return `https://twitter.com/intent/tweet?text=${queryText}&hashtags=${queryHashtags}`;
  }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  #quote-box {
    padding: 30px;
    width: 600px;
    background-color: white;
    display: grid;
    grid-template-areas:
      "text text text"
      "author author author"
      "share-buttons . new-quote-button";
    grid-template-columns: min-content auto min-content;
    #text {
      min-height: 200px;
      grid-area: text;
    }
    #author {
      grid-area: author;
      justify-self: end;
      padding: 10px 20px;
    }
    .share-buttons {
      grid-area: share-buttons;
    }
    #new-quote {
      grid-area: new-quote-button;
      white-space: nowrap;
    }
  }
}
</style>
