

function introduction(name) {
    const Aki = "Hi, my name is Aki.";
    const Samip = "Hi, my name is Samip.";

    if ("Aki" === name) {
        console.log(Aki);
        return Aki;
      } else if ("Samip" === name) {
        console.log(Samip);
        return Samip;
      }

    console.log(`Hello, ${name}!`);
  }



  function introductionWithLanguage(name, language) {
    const Aki = "Hi, my name is Aki and I am learning to program in Ember.js.";
    const Samip = "Hi, my name is Samip and I am learning to program in React.";

    if ("Aki" === name) {
        console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
        return Aki;
    
      } else if ("Samip" === name) {
        console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
        return Samip;
      }

}


function introductionWithLanguageOptional(name, language = "Javascript") {
  const Javascript = "Hi, my name is Gracie and I am learning to program in JavaScript.";
  const Python = "Hi, my name is Gracie and I am learning to program in Python.";
 
  if ("Javascript" === language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
    return Javascript;

  } else if ("Phython" === language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
    return Python;
  }

}


function introductionWithLanguageOptional2(name, language = "JavaScript")  {
  const Python = "Hi, my name is Gracie and I am learning to program in Python.";

  console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
  return Python;
}





