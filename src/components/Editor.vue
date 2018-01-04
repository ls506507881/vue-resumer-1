<template>
    <div id="editor">
        <nav>
            <ol>
                <li v-for="i in [0,1,2,3,4,5]" 
                v-bind:class="{active:currentTab === i}" 
                v-on:click = "currentTab = i">
                    <svg class="icon">
                        <use v-bind:xlink:href="`#icon-${icons[i]}`"></use>
                    </svg>
                </li>
            </ol>
        </nav>
        <ol class="panes">
          <li v-bind:class="{active:currentTab === 0}">
              <ProfileEditor v-bind:profile="resume.profile" />
          </li>
          <li v-bind:class="{active:currentTab === 1}">
              <ArrayEditor v-bind:items="resume.workHistory" v-bind:labels="{company:'公司',content:'工作内容'}" v-bind:title="'工作经历'"/>
          </li>
          <li v-bind:class="{active:currentTab === 2}">
              <ArrayEditor v-bind:items="resume.studyHistory" v-bind:labels="{school:'学校',duration:'时间',degree:'学位'}" v-bind:title="'学习经历'"/>
          </li>
          <li v-bind:class="{active:currentTab === 3}">
              <ArrayEditor v-bind:items="resume.projects" v-bind:labels="{name:'项目名称',content:'项目内容'}" v-bind:title="'项目经历'"/>
          </li>
          <li v-bind:class="{active:currentTab === 4}">
              <ArrayEditor v-bind:items="resume.awards" v-bind:labels="{name:'奖励详情'}" v-bind:title="'获奖情况'"/>
          </li>
          <li v-bind:class="{active:currentTab === 5}">
            <el-form>
                <h2>联系方式</h2>
                <el-form-item label="QQ">
                    <el-input v-model="resume.contacts.qq"></el-input>
                </el-form-item>
                <el-form-item label="微信">
                    <el-input v-model="resume.contacts.wechat"></el-input>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-input v-model="resume.contacts.email"></el-input>
                </el-form-item>
                <el-form-item label="手机">
                    <el-input v-model="resume.contacts.phone"></el-input>
                </el-form-item>
            </el-form>
          </li>
        </ol>
    </div>
</template>
<script>
import ProfileEditor from './ProfileEditor'
import ArrayEditor from './ArrayEditor'
export default {
  components:{ ProfileEditor, ArrayEditor },
  props: ['resume'],
  data(){
      return {
        currentTab: 0,
        icons:['credentials_icon','bangong','jiaoyu','xiangmu','jiangbei','lianxi'],
      }
    },
    methods:{

    },
    created(){
        console.log(this.profile)
        setTimeout(()=>{
            console.log(this.profile)
        },10000)
    } 
  }
</script>
<style lang="scss">
#editor {
  min-height: 100px;
  display: flex;
    > nav{
        background: #000;
        width: 80px;
        text-align: center;
        > ol > li{
            padding: 16px 0;
        > .icon{
            width: 24px;
            height: 24px;
            fill: white;
        }
        &.active{
            background: white;
            > .icon{
                fill: #000;
                }
            }
        }
    }
    > .panes {
        flex: 1;
        .container{
            position: relative;
            .el-icon-circle-close{
                position: absolute;
                right: 0;
                top: 10px;
            }
        }
      > li{
        display: none;
        padding: 32px;
        height: 100%;
        overflow: auto;
        &.active{
            display: block;
            }
        }
    }
}
</style>
