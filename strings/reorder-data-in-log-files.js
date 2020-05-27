
/*
given an array of logs
each log word broken by spaces
first word in each log is an alpha numeric identifier
each word after the identifier is either a letter log or digit log(only letters or only digits)
each identifier will have at least one word to follow

reorder the logs array so that....
letter logs are before digit logs
letter logs are ordered alphabetically, identifier is used in the event of a tie
digit logs ordered in order of appearance

could have an empty input
each log in logs has min length 3

duplicate logs?
identifiers always let? or dig?

logs = [
        "dig1 8 1 5 1",
        "let1 art can",
        "dig2 3 6",
        "let2 own kit dig",
        "let3 art zero"
        ]
output = [
        "let1 art can",
        "let3 art zero"
        "let2 own kit dig",
        "dig1 8 1 5 1",
        "dig2 3 6",
        ]

loop through logs array and pull out and letter logs
["let1 art can", "let2 own kit dig","let3 art zero"] ["dig1 8 1 5 1","dig2 3 6"]
sort the letter logs by slicing out the identifier if the logs are the same, compare including the identifier

*/
var reorderLogFiles = function(logs) {
  //if(!logs.length) return logs
  const body = log => log.slice(log.indexOf(" ") + 1)
  const isDigitLog = body => /\d/.test(body)

  const digitLogs = [], letterLogs = []
  for(let log of logs) {
      //let space = log.indexOf(" ") + 1
      if(isDigitLog(body(log))) digitLogs.push(log)
      else letterLogs.push(log)
  }
  letterLogs.sort((a,b) => {
      //let idxA = a.indexOf(" "), idxB = b.indexOf(" ")
      if(body(a) < body(b)) return -1
      if(body(a) > body(b)) return 1
      else {
          if(a < b) return -1
          return 1
      }
  })
  return [...letterLogs,...digitLogs]

};
