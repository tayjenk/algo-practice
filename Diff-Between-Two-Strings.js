//RESTATE...
// given two strings of capitalized letters, source and target, return an array of the source string editied to match the target string w/ the least edits as possible
// -"letter" and +"letter" are subtraction and additon edits
//when comparing edited source string to target string, skip letters with "-" signs and ignore "+" signs
// input1 = source --> "string"; 2 <= source.length <= 12
// input2 = target --> "string"; 2 <= target.length <= 12
// output = array of strings
// 5s time limit

//EXAMPLES...
// source = "AB -C D -E F +F G +H"
// target = "AB    D    F  F G H"
// output = ["A", "B", "-C", "D", "-E", "F", "+F", "G", "+H"]
// reading output --> A, B, D, F, +F, G, +H
// need to check if input strings are strings and check length?
// if source is longer than target?

//APPROACH...
// use spread operator and convert source string into new array of string letters
// source = "ABCDEFG" = ["A", "B", "C", "D", "E", "F", "G"]
// set up two pointers on the heads source and target
// source pointer = i = 0; target pointer = j = 0
// (source pointer) source[i] (target pointer) target[j]
// going up until the length of the target (after check to see if source has additional letter and add "-" to anything left)
// while targetPointer("j") < target.length
// compare values at each pointer and if values are equal then increase pointer
// ex: source[i] === target[j] --> "A" === "A" --> i++ j++ --> i=1 j=1 --> compare again
// if source's value does not equal target value, check if remainging substring of target .includes source value
// if true, add target's current value into source with a "+"; increase source pointer and target pointer
// if false, add "-" to source value and increase source pointer
// ex: i=3 j=3
// source[i] !=== target[j] --> "C" !== "D"
// target.substring(j).includes(source[i]) ?
// source.splice(i, 0, `+${target[j]}`) & i++ (i=4) j++(j=4) :
// source[i] = `-${source[i]}` & i++
// after we go through the length of target, check if there are additonal letters in source
// source.length > target.length ?
// if true --> for loop starting at the current index of source and reassign remaing values adding "-"
// ex: for (i; i<source.legnth; i++) source.splice(i, 1, `-${string[i]}`)
// if false --> return edited source array

function diffBetweenTwoStrings(source, target) {
	/**
	@param source: string
	@param target: string
	@return: string[]
	*/

  // your code goes here
  source = [...source]
  console.log('SOURCEARR', source, source.length)
  console.log('TARGET', target, "LENGTH", target.length)
  let loop = 0
  let i = 0
  let j = 0
  while (j < target.length && i <= source.length) {
    console.log("loop:", loop++ )
    console.log('sourcePointer', source[i], i)
    console.log('targetPointer', target[j], j)
    //console.log('source length', source.length)
    if (source[i] === target[j]) {
      i++
      j++
    }
    else {
      // if current target value !== current source value, target's pointer does not move in order to continue comparisons with source, while source pointer moves in every loop
      // if target is longer than source or has not caught up to source pointer, current target value will compare with "undefined" inside sourceArray and will hit else statement, increasing the size of sourceArray with "-undefined" and will go into infinite loop
      // if target has values source does not have, thus comparing those values with "undefined", if statement will add target's value into sourceArr and increase pointer until it reaches the end of it's length
      if (target.substring(j).includes(source[i]) ||
        source[i] === undefined) {
        source.splice(i, 0, `+${target[j]}`)
        i++
        j++
      } else {
        source[i] = `-${source[i]}`
        i++
      }
    }
  }

  return source
}

//1
diffBetweenTwoStrings("ABCDEFG", "ABDFFGH")
//["A","B","-C","D","-E","F","+F","G","+H"]

//2
diffBetweenTwoStrings("CCBC", "CCBC")
//["C","C","B","C"]

//3
diffBetweenTwoStrings("CBBC", "CABAABBC")
//["C","+A","B","+A","+A","B","+B","C"]

//4
diffBetweenTwoStrings("CABAAABBC", "CBBC")
//["C","-A","B","-A","-A","-A","B","-B","C"]

//5
diffBetweenTwoStrings("AABACC", "BABCAC")
//["-A","-A","B","A","+B","C","+A","C"]

//6
diffBetweenTwoStrings("HMXPHHUM", "HLZPLUPH")
//["H","-M","-X","+L","+Z","P","-H","-H","+L","U","-M","+P","+H"]

//7
diffBetweenTwoStrings("GHMXGHUGXL", "PPGGXHHULL")
//["+P","+P","G","-H","-M","-X","G","+X","H","+H","U","-G","-X","L","+L"]

//8
diffBetweenTwoStrings("GMMGZGGLUGUH", "HPGPPMGLLUUU")
//["+H","+P","G","-M","+P","+P","M","G","-Z","-G","-G","L","+L","U","-G","U","-H","+U"]
