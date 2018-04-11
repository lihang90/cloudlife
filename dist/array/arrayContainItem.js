/*
* 比较二维数组是否包含子数组项
* */

function compareArray(arr1,arr2){
    /*
    * 比较两个数组是否相等
    * @params
    *     arr1 = [1], arr2=[2]
    * @return
        * Boolean;
    * */
    var equalLength = 0;
    for0 : for(var i = 0; i < arr1.length; i++){
        for1 : for(var j = 0; j < arr2.length; j++){
            if(arr1[i] == arr2[j]){
                equalLength += 1;  //每相等数量+1；
                continue for0;
            }
        }
    }
    if(equalLength == arr1.length){
        return true;
    }else{
        return false;
    }
};

function arrayContainItem(arr1, arr2){
    /*
     *二维数组是否包含子数组 arr1是否被arr2包含为子项
     *  @params
     *     arr1 = [1], arr2=[[1],[2]]
     * @return
     * Boolean;
     * */
    var isEqual = false;
    for0 : for(var i = 0; i < arr1.length; i++){
        for1 : for(var j = 0; j < arr2.length; j++){
            var arr2Item = arr2[j];
            for2 : for(var k = 0; k < arr2Item.length; k++){
                if(arr2Item[k] == arr1[i]){
                    if(compareArray(arr1,arr2Item)){
                        isEqual = true;
                        break for0;
                    }else{
                        continue for1;
                    }
                }
            }
        }
    }
    return isEqual;
}