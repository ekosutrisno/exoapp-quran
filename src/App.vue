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

.hero-background {
  background-position: center;
  background-repeat: repeat;
  background-size: 400px;
  overflow: hidden;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 70%,
      rgba(229, 231, 235, 0)
    ),
    url(https://webassets.mongodb.com/_com_assets/cms/dots_hero-i42f3gz25y.png);
}

</style>

