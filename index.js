function saturdayFun (activity = 'roller-skate') {
    return (`This Saturday, I want to ${activity}!`)
}

const mondayWork = function(activity = 'go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective (a = '*') {
    return function (special = 'special') {
        return `You are ${a}${special}${a}!`

    }

}   const encourgingPromptFunction = wrapAdjective('!!!')