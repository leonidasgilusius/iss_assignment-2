function analyzeText() {
    let text = document.getElementById("Text").value;
    
    let letters = (text.match(/[a-zA-Z]/g) || []).length;
    
    let words = text.trim().split(/\s+/).filter(Boolean).length;
    
    let spaces = (text.match(/ /g) || []).length;
    
    let newlines = (text.match(/\n/g) || []).length;
    
    let specialSymbols = (text.match(/[^a-zA-Z0-9\s]/g) || []).length;
    
    let output = "";
    output += "<h2>General Statistics</h2>";
    output += "<p>Letters: " + letters + "</p>";
    output += "<p>Words: " + words + "</p>";
    output += "<p>Spaces: " + spaces + "</p>";
    output += "<p>Newlines: " + newlines + "</p>";
    output += "<p>Special Symbols: " + specialSymbols + "</p>";

    let tokens = text.split(/\s+/).map(token => token.toLowerCase().replace(/[^a-z]/g, ''));
    
    let pronounsList = ["i", "you", "he", "she", "it", "we", "they", "me", "him", "her", "us", "them"];
    let pronounCounts = {};
    let totalpronounCount = 0;
    pronounsList.forEach(p => pronounCounts[p] = 0);
    tokens.forEach(token => {
      if(pronounCounts.hasOwnProperty(token)) {
        pronounCounts[token]++;
        totalpronounCount++;
      }
    });
    output += "<h2>Pronoun Counts</h2>";
    output += "<h3>" + "Total: " + totalpronounCount + "</h3>";
    for (let p in pronounCounts) {
      output += "<p>" + p + ": " + pronounCounts[p] + "</p>";
    }

    let prepositionsList = [
      "about", "above", "across", "after", "against", "along", "among", "around",
      "at", "before", "behind", "below", "beneath", "beside", "between", "beyond",
      "by", "despite", "down", "during", "except", "for", "from", "in", "inside",
      "into", "like", "near", "of", "off", "on", "onto", "out", "outside", "over",
      "past", "since", "through", "throughout", "to", "toward", "under", "underneath",
      "until", "up", "upon", "with", "within", "without"
    ];
    let prepositionCounts = {};
    let totalprepositionCount = 0;
    prepositionsList.forEach(p => prepositionCounts[p] = 0);
    tokens.forEach(token => {
      if(prepositionCounts.hasOwnProperty(token)) {
        prepositionCounts[token]++;
        totalprepositionCount++;
      }
    });
    output += "<h2>Preposition Counts</h2>";
    output += "<h3>" + "Total: " + totalprepositionCount + "</h3>";
    for (let p in prepositionCounts) {
      output += "<p>" + p + ": " + prepositionCounts[p] + "</p>";
    }
    
    let articleCounts = {"a": 0, "an": 0};
    let totalarticleCount = 0;
    tokens.forEach(token => {
      if(articleCounts.hasOwnProperty(token)) {
        articleCounts[token]++;
        totalarticleCount++;
      }
    });
    output += "<h2>Indefinite Articles Counts</h2>";
    output += "<h3>" + "Total: " + totalarticleCount + "</h3>";
    for (let art in articleCounts) {
      output += "<p>" + art + ": " + articleCounts[art] + "</p>";
    }
    
    document.getElementById("analysisOutput").innerHTML = output;
  }