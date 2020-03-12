<template>
    <div class="fir">attrs儿子2: {{$attrs}}
     <secondSon v-bind="$attrs"></secondSon>

    </div>
</template>
<script>
import secondSon from '../components/secondSon'
export default {
    components:{secondSon},
    inheritAttrs:false
}
</script>