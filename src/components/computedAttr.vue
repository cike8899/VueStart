<template>
    <div>
        <p>Original message: "{{ message }}"</p>
        <p>Computed reversed message: "{{ reversedMessage }}"</p>
        <p>date:{{now}}</p>
        <p>method date:{{getNow()}}</p>
        <div>
            {{fullName}}
        </div>
        <p>---------------------</p>
        <p>
            Ask a yes/no question:
            <input v-model="question">
        </p>
        <p>{{ answer }}</p>
    </div>
</template>

<script>
//计算属性
    export default {
      //刷新后data和computed里面的方法断点都不会走
      data() {
        //   debugger 第一次刷新页面进不了断点，通过debugger可以进入断点
          return {
              message:"Hello",
              firstName: 'Foo',
              lastName: 'Bar',
              question:'',
              answer: 'I cannot give you an answer until you ask a question!'
            //   fullName: 'Foo Bar'
          }
      },
       created(){
        //    debugger
          console.info(this);
      },
      computed:{
        reversedMessage(){
          return this.message.split('').reverse().join('') 
        },
        now(){
            return Date.now()
        },
        fullName:{
            get(){
                 return this.firstName + ' ' + this.lastName
            },
            set(){
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[names.length - 1]
            }
        }
      },
    methods:{
        getNow(){
            return Date.now()
        },
        // _.debounce 是一个通过 lodash 限制操作频率的函数。
        // 在这个例子中，我们希望限制访问yesno.wtf/api的频率
        // ajax请求直到用户输入完毕才会发出
        // 学习更多关于 _.debounce function (and its cousin
        // _.throttle), 参考: https://lodash.com/docs#debounce
        getAnswer: _.debounce(
        function () {
            var vm = this
            if (this.question.indexOf('?') === -1) {
            vm.answer = 'Questions usually contain a question mark. ;-)'
            return
            }
            vm.answer = 'Thinking...'
            axios.get('https://yesno.wtf/api')
            .then(function (response) {
                vm.answer = _.capitalize(response.data.answer)
            })
            .catch(function (error) {
                vm.answer = 'Error! Could not reach the API. ' + error
            })
        },
        // 这是我们为用户停止输入等待的毫秒数
        500
        )
    },
    watch:{
        firstName(){
           this.fullName = val + ' ' + this.lastName
        },
        lastName(){
           this.fullName = this.firstName + ' ' + val
        },
         // 如果 question 发生改变，这个函数就会运行
        question (newQuestion) {
        this.answer = 'Waiting for you to stop typing...'
        this.getAnswer()
        // console.info(this.answer);
        }
    }
}
</script>

<style scoped>

</style>