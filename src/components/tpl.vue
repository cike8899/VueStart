<template>
    <div class="wrap">
        <div v-once>Message: {{ msg.split('').reverse().join('') }}</div>
        <div v-html="rawHtml"></div>
        <div v-bind:id="'list-' + dynamicId">llll</div>
        <button v-bind:disbaled="someDynamicCondition" v-on:click.prevent="handleClick">submit</button>
        <div>
            {{message|capitalize|lastCapitalize}}
        </div>
        <a :href="attrObj.href">博客園</a>
        <img v-bind:src="attrObj.src" />
        <p v-if="seen">now you see me</p>
        <p>-------------</p>
    </div>
</template>

<script>
 //模板语法
 export default {
     data () {
         return {
             msg:"qwert",
             rawHtml:"<div>koko</div>",
             dynamicId:"666",
             someDynamicCondition:false,
             message:"nothing",
             attrObj:{
                 src:"//www.baidu.com/img/bd_logo1.png",
                 href:"www.cnblogs.com"
             },
             seen:true
         }
     },
     methods:{
      handleClick(e){
         console.info(e.target.disabled)
      }
     },
     filters:{
         capitalize(value){
             if (!value) return ''
             value=value.toString()
             return value.charAt(0).toUpperCase() + value.slice(1)
         },
         lastCapitalize(value){
            if (!value) return ''
            value=value.toString()
            console.info(value)
            return value.slice(0,value.length-1) + value[value.length-1].toUpperCase()
         }
     }
 }
</script>

<style scoped>
    .wrap {
        border: 1px solid blue;
    }
    
    img {
        max-height: 80px;
        width: auto;
    }
</style>