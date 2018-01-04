<template>
  <div>
        <h2>工作经历</h2>
        <el-form>
            <div v-for="(work,index) in workHistory">
                <div class="container">
                <el-form-item label="公司">
                <el-input v-model="work.company"></el-input>
                </el-form-item>
                <el-form-item label="工作内容">
                <el-input v-model="work.content"></el-input>
                </el-form-item>
                <i class="el-icon-circle-close" v-on:click="removeworkHistory(index)"></i>
                </div>
                <hr>
            </div>
            <el-button type="primary" v-on:click = "addworkHistory">添加工作经历</el-button>
        </el-form>
  </div>
</template>

<script>
    export default {
        props:['workHistory'],
        methods:{
            addworkHistory(){
            this.workHistory.push({
                company:'',content:''
                })
            },
            removeworkHistory(index){
            this.workHistory.splice(index,1)
            }
            }
        }
</script>
