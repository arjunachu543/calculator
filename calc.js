function displayData(e){
    result.value+=e
}
function out(){
    result.value=eval(result.value)
}
function allClear(){
    result.value=""
}
function backSpace(){
    result.value=result.value.slice(0,-1)
}