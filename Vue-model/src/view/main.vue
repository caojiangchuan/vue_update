<template>
  <div>
    <ul class="main">
      <li
        v-for="(item,index) in list"
        @click="active(item,index)"
        :class="index==num?'actives':''"
        :key="index"
      >{{item.item}}</li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
    name: 'main',
    data() {
        return {
            list: [
                {
                    item: '首页'
                },
                {
                    item: '组件'
                },
                {
                    item: '数据'
                },
                {
                    item: '我的'
                }
            ],
            num: 0
        };
    },
    created() {
        switch (this.$route.name) {
            case 'index':
                this.num = 0;
                break;
            case 'component':
                this.num = 1;
                break;
            case 'function':
                this.num = 2;
                break;
            case 'my':
                this.num = 3;
                break;
            case 'about':
                this.num = 3;
                break;
            case 'lang':
                this.num = 3;
                break;
        }
    },
    methods: {
        active(item, index) {
            this.num = index;
            switch (index) {
                case 0:
                    this.$router.push({
                        path: 'index'
                    });
                    break;
                case 1:
                    this.$router.push({
                        path: 'component'
                    });
                    break;
                case 2:
                    this.$router.push({
                        path: 'function'
                    });
                    break;
                case 3:
                    this.$router.push({
                        path: 'my'
                    });
                    break;
            }
        }
    }
};
</script>

<style scoped>
.main {
    position: fixed;
    z-index: 1000;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 80px;
    line-height: 50px;
    text-align: center;
}
.main li {
    padding: 4px 0;
    font-size: 30px;
    line-height: 80px;
    list-style-type: none;
    color: white;
    background: #42b983;

    flex: 1;
}
.actives {
    color: darkblue !important;
}
</style>
