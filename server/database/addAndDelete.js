// 引入express 模块
const express = require('express');

const router = express.Router();

// 新增一条数据 接口为add
router.get('/add', (req, res) => {
    console.log({
        name: req.body.name,
        age: req.body.age,
        sex: req.body.sex
    })
    res.send({"code": 0, 'message': '新增成功'});
});

// 查询数据
router.get('/name', (req, res) => {
    const name = req.body.name,
        age = req.body.age,
        sex = req.body.sex;
    const obj = {};
    if (name !== '') {
        obj['name'] = name;
    }
    if (age !== '') {
        obj['age'] = age;
    }
    if (sex !== '') {
        obj['sex'] = sex;
    }
    res.send(
        [{'id': 1, 'title': 'jc', 'code': '35'}, {'id': 2, 'title': 'fy', 'code': '28'}, {
            'id': 3,
            'title': 'jzr',
            'code': '4'
        }]
    );
});

// 根据 _id 删除数据
router.get('/del', (req, res) => {
    const id = req.body.id;
    // 根据自动分配的 _id 进行删除
    const whereid = {'_id': id};
    console.log("del id=" + id)
});

// 更新数据
router.get('/update', (req, res) => {
    console.log(req.body)
    // 需要更新的数据
    const id = req.body.id,
        name = req.body.name,
        age = req.body.age,
        sex = req.body.sex;
    const updateStr = {
        name: name,
        age: age,
        sex: sex
    };
    const ids = {
        _id: id
    };
    console.log(ids);
});
module.exports = router;
