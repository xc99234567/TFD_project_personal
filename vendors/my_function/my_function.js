// 陣列平均
function array_avg(my_arr, digits) {
    try {
        // 先確認是否為陣列
        if (!Array.isArray(my_arr)) {
            throw new Error("資料格式不符合");
        }

        // 確認陣列中是否都為數值
        for (let i = 0; i < my_arr.length; i++) {
            if (typeof my_arr[i] !== "number") {
                throw new Error("某項資料不符合");
            }
        }

        // 平均的函式
        let total = 0;
        for (let i = 0; i < my_arr.length; i++) {
            total += array[i];
        }
        let average = (total / array.length).toFixed(digits);
        return average;

    } catch (err) {
        // 若有錯誤則顯示
        console.error(err);
    }

}

// 陣列去除重複
function array_filter(array) {
    let clear_array = [];
    for (let i = 0; i < array.length; i++) {
        if (!clear_array.includes(array[i])) {
            clear_array.push(array[i]);
        }
    }
    return clear_array;
}

function array_filter2(array) {
    let clear_array = [];
    array.forEach(function (ele) {
        if (!clear_array.includes(ele)) {
            clear_array.push(ele);
        }
    });
    return clear_array;
}

// 將指定文字左邊補零
function str_pad(my_num, digits) {
    let my_num_str = my_num.toString();
    while (my_num_str.length < digits) {
        my_num_str = "0" + my_num_str;
    }
    return my_num_str;
}

// 代入兩個時間看差「幾」天
function DateDiff(date1, date2) {
    let date_obj, date2_obj;

    date1_obj = new Date(date1);
    date2_obj = new Date(date2);

    let days_diff = parseInt(Math.abs(date1_obj.getTime() - date2_obj.getTime()) / 86400000);
    return days_diff;
}