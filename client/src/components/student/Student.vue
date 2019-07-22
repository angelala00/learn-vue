<template>
    <div class="hello">
        <h1>学生管理模块</h1>
        <el-table :data="items" style="width: 100%">
            <el-table-column prop="id" label="ID" width="180"></el-table-column>
            <el-table-column prop="title" label="title" width="180"></el-table-column>
            <el-table-column prop="code" label="code" width="180"></el-table-column>
            <el-table-column prop="op" label="操作">
                <template slot-scope="scope">
                    <el-button @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-dialog :visible.sync="dialogVisible" title="Hello world">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                <el-form-item label="ID" prop="id">
                    <el-input v-model="ruleForm.id" :disabled="true"></el-input>
                </el-form-item>
                <el-form-item label="标题" prop="title">
                    <el-input v-model="ruleForm.title" placeholder="请输入标题"></el-input>
                </el-form-item>
                <el-form-item label="代码" prop="code">
                    <el-input v-model="ruleForm.code" placeholder="请输入代码"
                              onkeyup="value=value.replace(/[^\d]/g,'')"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleConfirmEdit(ruleForm)">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: 'Student',
        props: {
            dialogVisible: {
                type: Boolean,
                default: false
            },
        },
        data() {
            return {
                items: [
                    {id: 1, message: 'Foo'}
                ],
                ruleForm: {
                    id: '',
                    title: '',
                    code: ''
                },
                rules: {
                    title: [
                        {required: true, message: '请输入标题', trigger: 'blur'},
                        {min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur'}
                    ]
                }
            }
        },
        created() {
            this.handleQuery()
        },
        methods: {
            handleQuery: function () {
                var api = "http://democlient.58corp.com/api/name" + "?format=json";
                window.console.log("1:" + this.items)
                this.$http.get(api).then((response) => {
                    window.console.log("2:" + response.data)
                    this.items = response.data
                })
            },
            handleEdit: function (index, row) {
                window.console.log("row:" + row)
                this.dialogVisible = true;
                let _row = row
                this.ruleForm = Object.assign({}, _row)
            },
            handleDelete: function (index, row) {
                window.console.log("delete:index=" + index + ",row=" + row + ",row.id=" + row.id);
                var api = "http://democlient.58corp.com/api/name/" + row.id + "/?format=json";
                this.$http.delete(api).then((response) => {
                    this.$message('删除成功' + response);
                    this.items.splice(index, 1);
                })
            },
            handleConfirmEdit: function (ruleForm) {
                window.console.log("ruleForm.id=" + ruleForm.id + ",title=" + ruleForm.title + ",code=" + ruleForm.code);
                var api = "http://democlient.58corp.com/api/name/" + ruleForm.id + "/?format=json";
                this.$http.put(api, {title: ruleForm.title, code: ruleForm.code}).then((response) => {
                    this.$message('修改成功' + response);
                    this.handleQuery()
                    this.dialogVisible = false;
                })
            }
        }
    }
</script>

<style scoped>
</style>
