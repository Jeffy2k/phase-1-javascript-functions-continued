// code your solution here
function saturdayFun(activity){
if(activity == null){return `This Saturday, I want to roller-skate!`}
    else{return `This Saturday, I want to `+ activity +`!` }
}
saturdayFun();

const mondayWork = function(activity){
    if(activity == null){return `This Monday, I will go to the office.`}
    else{return `This Monday, I will `+ activity +`.` }
}
mondayWork();


function wrapAdjective(name){
    return function wrap(emphatic){
        return `You are ${name}`+ emphatic + `${name}!`;
    }
return wrap();
    }
    
wrapAdjective('*')('a hard worker');

