/* Ubiquity command to search Pune Tech Archives */
CmdUtils.CreateCommand({
  name: "search-pt",
  icon: "http://punetech.com/wp-content/uploads/2009/02/pocc_final_cropped.jpg",
  homepage: "http://punetech.com/",
  author: { name: "Mandar Vaze", email: "mandarvaze@gmail.com"},
  license: "GPL",
  description: "Search Pune Tech Archive",
  help: "how to use your command",
  takes: {"search-term": noun_arb_text},
  preview: function( pblock, input ) {
/* var template = "Hello ${name}"; */
    pblock.innerHTML = "Search Pune Tech Archives for " + input.text;
  },
  execute: function(input) {
        var url = "http://www.google.co.in/cse?cx=partner-pub-2125071229450219%3Aqsa68hbyl3h&ie=ISO-8859-1&q=" + input.text;
        Utils.openUrlInBrowser(url);
  }
});