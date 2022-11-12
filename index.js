function introduction(name){
    return `Hi, my name is ${name}.`
}

console.log(introduction("Mercy"));

function introductionWithLanguage(name, language){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`
}

console.log(introductionWithLanguage("Mercy", "JavaScript"));

function introductionWithLanguageOptional(name, language = "JavaScript"){
    return `Hi, my name is ${name} and I am learning to program in ${language}.`

}

console.log(introductionWithLanguageOptional("Mercy"));