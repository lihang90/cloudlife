/*
* 把一维数组菜单，生成树型菜单
* 通过id 与 pid 作层级对应,子项放入children内
* */
function array2tree(arr = []){
    /*
    * @param
    *   arr = Array
    * @return
    *   Array
    * */
    //构造出结果Object值
    let map = {};
    arr.forEach(v=>{
        v.children = [];
        map[v.id] = v;
    });
    map[0] = {id:0,name:'root',children:[]};  //添加key为0的根节点

    arr.forEach(v=>{
        map[v.pid].children.push(v);
    });

    return map[0].children;
}

export default array2tree;