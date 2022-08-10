const paragraphs = document.getElementsByTagName("p");

const updateParagraphs = () => {
  let outputResult = "";
  for(let paragraph of paragraphs) {
    let result = paragraph.innerHTML;
    let wordsCount = 0;
    const words        = result.match(/[a-zA-Z]+'+[a-z]*|\w+\b/g);
    const sentences    = result.match(/[^.]\w*[!?.][^<]/gm);
    const questions    = result.match(/\?/g);
    const screamers    = result.match(/!/g);
    const newParagraphs = result.split(/[\r\n]+/g);
    const link = "<a href='https://forcemipsum.com/'>forcemipsum.com</a>";

    for(let paragraph of newParagraphs) {
      const x = paragraph + "<br />&nbsp;<br />";
      result = result.replace(paragraph, x);
    }

    for(let sentence of sentences) {
      const x = sentence.slice(0, -1) + "<br />";
      if(sentence !== "") result = result.replace(sentence, x);
    }

    for(let word of words) {
      const x = `<span class="highlight">${word}</span>`
      if (word.length === 8) {
        result = result.replace(word, x);
      }
      wordsCount++;
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