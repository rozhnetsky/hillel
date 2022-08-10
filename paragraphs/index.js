const paragraphs = document.getElementsByTagName("p");

const updateParagraphs = () => {
  let outputResult = "";
  for(let paragraph of paragraphs) {
    let result = paragraph.innerHTML;
    let wordsCount = 0;
    const words =     result.match(/[a-zA-Z]+'+[a-z]*|\w+\b/g);
    const sentences = result.split(/[^a-zA-Z-,<>"=][\W\s]/g);
    const questions = result.match(/\?/g);
    const screamers = result.match(/!/g);
    const link = "<a href='https://forcemipsum.com/'>forcemipsum.com</a>";

    for(let word of words) {
      const x = `<span class="highlight">${word}</span>`
      if (word.length === 8) {
        result = result.replace(word, x);
      }
      wordsCount++;
    }

    for(let sentence of sentences) {
      const x =  "<br>" + sentence;
      if(sentence !== "") result = result.replace(sentence, x);
    }

    for(let question of questions) {
      const x = "&nbsp;&#129300;";
      result = result.replace(question, x);
    }

    for(let screamer of screamers) {
      const x = "&nbsp;&#128558";
      result = result.replace(screamer, x);
    }
    const counter = `<span>There is ${wordsCount} words in this paragraph</span>`

    result =
      `<p>
        ${result}
      </p>
      ${link}
      ${counter}`;
    outputResult += result;

    paragraph.remove();
  }
  document.body.innerHTML += outputResult;
}

updateParagraphs();