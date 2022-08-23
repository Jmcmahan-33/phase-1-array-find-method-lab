// code your solution here
// function superbowlWin(arrayRecord) {
//     for(const year of arrayRecord) {
//         if (year === "W") {
//             return year
//         }
//     }
// }



// function superbowlWin(arrayRecord) {
    
//     let match = arrayRecord.find(obj => {
//         return obj.result === "W"
//     })
//     if(match) {
//         return match.year
//     }
//     console.log(match)
// }


function superbowlWin(arrayRecord) {
        let match = arrayRecord.find(obj => {
        return obj.result === "W"
    })
    if(match) {
        return match.year
    }

}