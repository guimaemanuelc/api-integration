<template>
    <div class="homepage">
      <template v-if="!isLoading">
        <div class="homepage_info">
          <p>ADVICE #{{ id }}</p>
          <div class="generated-text">"{{advice}}"</div>
        </div>
        <img class="img" src="src/img/pattern-divider-desktop.svg" />
        <button @click="handleGetAdvice">
          <img src="src/img/icon-dice.svg" />
        </button>
      </template>
      <div v-else class="loading"></div>
    </div>
  </template>

  <script>
  import AdviceService from "@/services/AdviceService";
  export default {
    name: "HomePage",
    data() {
      return {
        advice: "",
        id: "",
        isLoading: true,
      };
    },
    created() {
      this.handleGetAdvice();
    },
    methods: {
      handleGetAdvice() {
        this.isLoading = true;
        setTimeout(() => {
          AdviceService.getAdvice()
            .then((resolve) => {
              const { id, advice } = resolve;
              this.advice = advice;
              this.id = id;
            })
            .catch((err) => {
              this.advice = err.error;
            })
            .finally(() => {
              this.isLoading = false;
            });
        }, 2000);
      },
    },
  };
  </script>
  
<style lang="scss">
  .homepage {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px;
    font-family: "Manrope", sans-serif;
    position: relative;
  
  &_info {
    text-align: center;

    p {
      padding-bottom: 28px;
      font-size: 12px;
      font-weight: 0;
      letter-spacing: 2.8px;
      color: var(--Neon-Green);
    }

    .generated-text {
      font-size: 24px;
      color: var(--Light-Cyan);
      line-height: 1.2;
      margin-bottom: 25px;
    }
  }
  
  button {
    width: 50px;
    height: 50px;

    border-radius: 50%;
    border: none;
    background-color: var(--Neon-Green);
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 293px;
    left: 214px;

    &:hover {
      box-shadow: var(--Neon-Green) 0px 5px 50px 4px;
    }
  }


    .loading {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 5px solid var(--Neon-Green);
        border-top-color: transparent;
        animation: spin 2s linear infinite;
    }


    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    @media only screen and (max-width:428px){
        .generated-text {
            font-size: 22px;
        }

        button {
            left: 145px;
            height: 60px;
            width: 60px;
        }
    
        .img{
            content: url(src/img/pattern-divider-mobile.svg);
        }
    }
}

</style>
  