let currentlocStoArr = JSON.parse(window.localStorage.getItem('userInput'));
// console.log(currentlocStoArr.length)
if (currentlocStoArr === null) {

    window.localStorage.setItem('userInput', JSON.stringify([]));
}
// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")
const replaceOnceButton = document.querySelector(".replace-once-button")
// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function belwo, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements(currentRowElement) {

    return currentRowElement.querySelectorAll(".cell")
}

// YOUR CODE GOES HERE
replaceAllButton.addEventListener("click", function () {
    let userInput = findInput.value
    let replacementInput = replaceInput.value
    let numberOfTimes = 0
    for (let index = 0; index < rowElements.length; index++) {
        let currentElement = rowElements[index]
        let currentRowElementCellarray = getCellElements(currentElement)
        // console.log(currentRowElementCellarray)

        for (let index2 = 0; index2 < currentRowElementCellarray.length; index2++) {
            let currentCell = currentRowElementCellarray[index2]
            let currentCellContent = currentCell.innerHTML
            if (currentCellContent.toLowerCase().includes(userInput.toLowerCase())) {
                //    console.log("Found", currentCellContent)
                currentCell.innerHTML = currentCellContent.replace(userInput, replacementInput)
                numberOfTimes = numberOfTimes + 1

            }

        }
    }
    window.alert(numberOfTimes)
    window.localStorage.userInput;
    let currentlocStoArr = JSON.parse(window.localStorage.getItem('userInput'));
    currentlocStoArr.push(userInput)
    window.localStorage.setItem('userInput', JSON.stringify(currentlocStoArr));
    console.log(JSON.parse(window.localStorage.getItem('userInput')))
})



 replaceOnceButton.addEventListener("click", function () {
            let userInput = findInput.value
            let replacementInput = replaceInput.value
            let numberOfTimes = 0
            for (let index = 0; index < rowElements.length; index++) {
                let currentElement = rowElements[index]
                let currentRowElementCellarray = getCellElements(currentElement)
                // console.log(currentRowElementCellarray)
                
                for (let index3 = 0; index3 < currentRowElementCellarray.length; index3++) {
                    let currentCell = currentRowElementCellarray[index3]
                    let currentCellContent = currentCell.innerHTML
                    if (currentCellContent.includes(userInput)) {
                        //    console.log("Found", currentCellContent)
                        currentCell.innerHTML = currentCellContent.replace(userInput, replacementInput)
                        numberOfTimes = numberOfTimes + 1
                        break
                    }
                }
                if (numberOfTimes){
                    break
                }
            }

            window.alert(numberOfTimes)
            window.localStorage.userInput;
            let currentlocStoArr = JSON.parse(window.localStorage.getItem('userInput'));
            currentlocStoArr.push(userInput)
            window.localStorage.setItem('userInput', JSON.stringify(currentlocStoArr));
            console.log(JSON.parse(window.localStorage.getItem('userInput')))
          

     })



// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
// 
