<template>
  <div id="app"
    :style="{ backgroundColor: primaryColor }"
  >
    <div id="quote-box"
      :style="{ color: primaryColor }"
    >
      <div class="text-container">
        <span id="text">{{currQuote.text}}</span>
      </div>
      <span id="author">– {{currQuote.author}}</span>
      <button id="new-quote"
        @click="changeQuote"
        class="button text-button"
        :style="{ backgroundColor: primaryColor }"
      >New Quote</button>
      <div class="share-buttons">
        <a id="tweet-quote"
          target="_blank"
          :href="tweetButtonHref"
          data-size="large"
          :style="{ backgroundColor: primaryColor }"
          class="button image-button"
        >
          <img
            src="./assets/img/Twitter_Logo_WhiteOnImage.png"
            alt="Twitter Logo"
          >
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
    { text: 'That\'s one small step for a man, one giant leap for mankind', author: 'Neil Armstrong' },
    { text: 'Small loan of a millon dollars', author: 'Donald J. Trump' },
    { text: 'It drowned', author: 'Vladimir Putin' },
  ];
  private primaryColorHue: number = 0;
  private currQuoteInd: number = 0;
  private created() {
    this.changeQuote();
  }
  private changeQuote(): void {
    let nextQuoteInd: number = Math.floor(Math.random() * this.quotes.length);
    if (nextQuoteInd === this.currQuoteInd) {
      nextQuoteInd++;
      if (nextQuoteInd === this.quotes.length) {
        nextQuoteInd = 0;
      }
    }
    this.currQuoteInd = nextQuoteInd;

    this.primaryColorHue = Math.floor(Math.random() * 360);
  }
  get tweetButtonHref(): string {
    const queryText = encodeURI(`"${this.currQuote.text}" – ${this.currQuote.author}`);
    const queryHashtags = 'quotes,freeCodeCamp,VueJS';
    return `https://twitter.com/intent/tweet?text=${queryText}&hashtags=${queryHashtags}`;
  }
  get primaryColor() { return `hsl(${this.primaryColorHue}, 40%, 30%)`; }
  get currQuote() { return this.quotes[this.currQuoteInd]; }
}
</script>

<style lang="scss">
body {
  margin: 0;
}
@mixin color-changing {
  transition-duration: 1.5s;
  transition-timing-function: linear;
  transition-property: color, background-color;
}
#app {
  @include color-changing;
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
    @include color-changing;
    padding: 30px;
    width: 600px;
    background-color: white;
    display: grid;
    grid-template-areas:
      "text text text"
      "author author author"
      "share-buttons . new-quote-button";
    grid-template-columns: min-content auto min-content;
    border-radius: 5px;
    .text-container {
      min-height: 200px;
      grid-area: text;
      display: flex;
      justify-content: center;
      align-items: center;
      #text {
        font-size: xx-large;
      }
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
    .button {
      @include color-changing;
      display: block;
      $button-height: 40px;
      height: $button-height;
      min-width: $button-height;
      color: white;
      border: 0;
      border-radius: 5px;
      cursor: pointer;
      outline: none;
      &.image-button {
        display: flex;
        justify-content: center;
        align-items: center;
        img {
          width: 90%;
          height: auto;
        }
      }
      &.text-button {
        padding: 0px 20px;
        font-size: medium;
      }
    }
  }
}
</style>
