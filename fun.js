/*
 * 常用数组开发方法
 * es6
 * */

function getTemp(arr1, arr2) {
    let temp = [];
    arr1.forEach((v, i)=> {
        arr2.forEach((val, j)=> {
            if (Array.isArray(v)) {
                temp.push([
                    ...v,
                    val
                ]);
            } else {
                temp.push([
                    v,
                    val
                ]);
            }
        })
    });
    return temp;
}

function split2MultiArr(arr = []) {
    /*
     * @params
     * arr = [[1,2],[3,4],[5,6]...];
     * return
     *  [[1,3,5],[1,3,6],[2,3,5]...]
     * */
    let temp = [];
    if (arr.length == 1) {
        arr[0].forEach((v, i)=> {
            temp[i] = [v];
        });
    }
    for (let i = 1; i < arr.length; i++) {
        if (temp.length > 0) {
            temp = getTemp(temp, arr[i]);
        } else {
            temp = getTemp(arr[i - 1], arr[i]);
        }
    }
    return temp;
}