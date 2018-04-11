/*
 * 常用数组开发方法
 * es6
 * */

/*
 * 拆分组合数组乘积
 * */
function splitMultiArr(arr1 = [], arr2 = []) {
    /*
     * @params
     *   @Array arr1 = [1,2];
     *   @Array arr2 = [3,4];
     * @return
     *   @Array [[1,3],[2,3]]
     * */
    let temp = [];
    arr1.forEach((v)=> {
        arr2.forEach((val)=> {
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

/*
 * 拆分组合二维数组
 * */
function splitMulti2dArr(arr = []) {
    /*
     * @params
     *   @Array arr = [[1,2],[3,4],[5,6]...];
     * return
     *   @Array [[1,3,5],[1,3,6],[2,3,5]...];
     * */
    let temp = [];
    if (arr.length == 1) {
        arr[0].forEach((v, i)=> {
            temp[i] = [v];
        });
    }
    for (let i = 1; i < arr.length; i++) {
        if (temp.length > 0) {
            temp = splitMultiArr(temp, arr[i]);
        } else {
            temp = splitMultiArr(arr[i - 1], arr[i]);
        }
    }
    return temp;
}


console.log(splitMulti2dArr([[1,2],[3,4],[5,6]]));