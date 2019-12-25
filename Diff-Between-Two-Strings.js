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
}
