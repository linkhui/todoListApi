'use strict';

exports.test = function (req, res) {
    console.log('call test');

    res.json('{\
    "success": true,\
        "errorMsg": "成功",\
        "errorCode": "200",\
        "fields": {\
        "城市": "上海",\
            "最低温度": "6℃",\
            "最高温度": "16℃",\
            "天气": "多云"\
    }\
}');
    
}

exports.list_all_tasks = function(req, res) {
    Task.find({}, function(err, task) {
        if (err)
            res.send(err);
        res.json(task);
    });
};