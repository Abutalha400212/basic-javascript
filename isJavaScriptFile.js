// Js file Checker //
function isJavaScriptFile(fileName) {
    if(typeof(fileName) == 'string'){
        return fileName.includes('js') ;
    }
    else{
        return ('Error: Please Provide String Type of Javascript!')
    } 
}
console.log(isJavaScriptFile('photo.js'));