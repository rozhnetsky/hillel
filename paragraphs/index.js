const paragraphs = document.getElementsByTagName("p");

for(let paragraph of paragraphs) {
  let render = "";

  let plainText = paragraph.innerText;
  plainText = plainText.split(". ").join(". <br />");
  plainText = plainText.split("! ").join("! <br />");
  plainText = plainText.split("? ").join("? <br />");
  plainText = plainText.replaceAll("?", "&nbsp;&#129300;");
  plainText = plainText.replaceAll("!", "&nbsp;&#128558;");

  const words = plainText.match(/[a-zA-Z]+'+[a-z]*|\w+\b/g);
  const eightDigitsWords = words.filter(e => e.length === 8);
  const wordsLength = words.length;

  for(let word of eightDigitsWords) {
    const template = `<span class='highlight'>${word}</span>`;
    plainText = plainText.replace(word, template)
  }

  const counter = `<span>There is ${wordsLength} words in this paragraph</span>`;

  const link = "<a href='https://forcemipsum.com/'>forcemipsum.com</a>";

  render =
    `${plainText}<br />
    &nbsp;<br />
    ${counter}<br />
    ${link}`;

  paragraph.innerHTML = render;
}
