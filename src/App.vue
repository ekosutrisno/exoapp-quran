<template>
    <div class="bg-gray-900 font-exo">
        <router-view />
    </div>
</template>
<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
setup(){
    const store = useStore();
    
    onMounted(async ()=>{ 
        await store.dispatch('surah/setSurah', 1);
    })
}
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");
</style>

