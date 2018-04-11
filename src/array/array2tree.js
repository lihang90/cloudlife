/*
* 把一维数组菜单，生成树型菜单
* */

const arr = [
    {
        id : 1,
        pid : 0,
        name : '1级'
    },
    {
        id : 2,
        pid : 1,
        name : '2级'
    },
    {
        id : 3,
        pid : 1,
        name : '2级'
    },
    {
        id : 4,
        pid : 2,
        name : '3级'
    },
    {
        id : 5,
        pid : 3,
        name : '3级'
    },
];


function array2tree(arr = []){
    let map = {};
    arr.forEach(v=>{
        v.children = [];
        map[v.id] = v;
    });
    map[0] = {id:0,name:'root',children:[]};
    arr.forEach(v=>{
        map[v.pid].children.push(v);
    });
    return map[0].children;
    //console.log(JSON.stringify(map[0].children));
}

console.log(JSON.stringify(array2tree(arr)));