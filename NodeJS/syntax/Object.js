var members = ['minseok', 'cmd', 'skku'];
console.log(members[1]);
var i = 0;
while(i < members.length){
    console.log('array loop: ', members[i]);
    i++;
}

var roles = {
    'programmer': 'minseok',
    'club': 'cmd',
    'school':'skku'
}

console.log(roles.school);
console.log(roles['club']);

for(var name in roles){
    console.log('object => ', name, 'value => ', roles[name]);
}