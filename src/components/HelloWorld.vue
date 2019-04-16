<template>
  <div class="hello">
    <div v-for="(item,i) in list" :key="i" style="margin-bottom: 30px">
      <video :id="'myVideo'+item.id" class="video-js">
        <source src="http://img.yopoo.cn/banner_video.mp4" type="video/mp4">
      </video>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
    data(){
      return {
          list:[
              {
                  src:'http://img.yopoo.cn/banner_video.mp4 ',
                  id:0
              },
              {
                  src:'http://img.yopoo.cn/banner_video.mp4 ',
                  id:1
              },
              {
                  src:'http://img.yopoo.cn/banner_video.mp4 ',
                  id:2
              }
          ]
      }
    },
    mounted() {
        this.initVideo();
    },
    methods: {
        initVideo() {
            //初始化视频方法
            this.list.map((item,i)=>{
                let myPlayer = this.$video('myVideo'+i, {
                    //确定播放器是否具有用户可以与之交互的控件。没有控件，启动视频播放的唯一方法是使用autoplay属性或通过Player API。
                    controls: true,
                    width:'375px',
                    height:'200px'
                });
            })

        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
