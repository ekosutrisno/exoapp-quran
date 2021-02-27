<template>
    <div class="bg-gray-900 font-exo">
        <router-view/>
    </div>
</template>
<script>
import { onMounted } from 'vue';
import { useStore } from 'vuex';
export default {
setup(){
    const store = useStore();
    
    onMounted(async ()=>{ 
        await store.dispatch('surah/setSurahs');
        await store.dispatch('sajda/setSajda');
        await store.dispatch('juz/setJuz');
        await store.dispatch('manzil/setManzil');
        await store.dispatch('rukuk/setRukuk');
        await store.dispatch('page/setPage');
    })
}
}
</script>
<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

.nv-transition {
  animation: 0.5s appear;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>

