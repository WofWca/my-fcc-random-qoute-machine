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
      <a href="" id="tweet-quote"></a>
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
