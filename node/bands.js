
const bands1 = {
    punk: 'Green Day',
    rap: 'Run DMC',
    classic: 'Led Zeppelin'
}

//for(var i = 1; i<bands1.length;i++){
for (var property in bands1){
    console.log((bands1[property]));

}
//}
module.exports = {
    bands1
};