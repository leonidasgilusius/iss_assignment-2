function analyzeText() {
  const text = document.getElementById("Text").value;

  let letters = 0, spaces = 0, newlines = 0, specialSymbols = 0;

  for (let char of text) {
    if (/[a-zA-Z]/.test(char)) letters++;
    else if (char === ' ') spaces++;
    else if (char === '\n') newlines++;
    else if (/[^a-zA-Z0-9\s]/.test(char)) specialSymbols++;
  }

  const cleanText = text.replace(/[^\w'\n]+/g, ' ');
  const wordsArray = cleanText.trim().split(/\s+/).filter(Boolean);
  const words = wordsArray.length;

  const tokens = wordsArray.map(t => t.toLowerCase().replace(/[^a-z']/g, ''));

  const countTokens = (tokenList) => {
    const counts = {};
    let total = 0;
    tokenList.forEach(t => counts[t] = 0);
    for (let token of tokens) {
      if (counts.hasOwnProperty(token)) {
        counts[token]++;
        total++;
      }
    }
    return { counts, total };
  };

  const pronouns = ["i", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them"];
  const prepositions = [
    "about", "above", "across", "after", "against", "along", "among", "around",
    "at", "before", "behind", "below", "beneath", "beside", "between", "beyond",
    "by", "despite", "down", "during", "except", "for", "from", "in", "inside",
    "into", "like", "near", "of", "off", "on", "onto", "out", "outside", "over",
    "past", "since", "through", "throughout", "to", "toward", "under", "underneath",
    "until", "up", "upon", "with", "within", "without"
  ];
  const articles = ["a", "an"];

  const { counts: pronounCounts, total: pronounTotal } = countTokens(pronouns);
  const { counts: prepositionCounts, total: prepositionTotal } = countTokens(prepositions);
  const { counts: articleCounts, total: articleTotal } = countTokens(articles);

  const createStatsSection = (title, total, counts) => {
    let section = `<h2>${title}</h2><h3>Total: ${total}</h3>`;
    for (let key in counts) {
      if (counts[key] > 0) {
        section += `<p>${key}: ${counts[key]}</p>`;
      }
    }
    return section;
  };

  const output = `
    <h2>General Statistics</h2>
    <p>Letters: ${letters}</p>
    <p>Words: ${words}</p>
    <p>Spaces: ${spaces}</p>
    <p>Newlines: ${newlines}</p>
    <p>Special Symbols: ${specialSymbols}</p>
    ${createStatsSection("Pronoun Counts", pronounTotal, pronounCounts)}
    ${createStatsSection("Preposition Counts", prepositionTotal, prepositionCounts)}
    ${createStatsSection("Indefinite Articles Counts", articleTotal, articleCounts)}
  `;

  document.getElementById("analysisOutput").innerHTML = output;

  document.getElementById("analysisOutput").insertAdjacentHTML('beforebegin', '<div id="tempMessage">Done!</div>');

  setTimeout(() => {
    document.getElementById("tempMessage").remove();
  }, 2000);
  
  tempMessage.style.padding = "10px";
  tempMessage.style.backgroundColor = "#4CAF50";
  tempMessage.style.color = "white";
  tempMessage.style.marginTop = "10px";
  tempMessage.style.textAlign = "center";
  tempMessage.style.fontWeight = "bold";
}
