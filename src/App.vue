<template>
  <main class="content">
    <div class="content_card">
      <Home />
    </div>
  </main>
</template>

<script>
import Home from './views/Home.vue';
  export default {
    name: 'App',
    components: {
      Home
    }
  }
</script>

<style lang="scss">
  .content{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: var(--Dark-Blue);

  &_card{
      width: 480px;
      height: 320px;
      border-radius: 13px;
      background-color: var(--Dark-Grayish-Blue);
    }
  }

  @media only screen and (max-width: 428px){
    .content_card{
      width: 350px;
    }
  }
</style>