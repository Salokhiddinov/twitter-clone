<template>
  <section>
    <div class="loader-container">
      <div class="loader">
        <i
          class="fa-brands fa-twitter"
          unselectable="on"
          onselectstart="return false;"
          onmousedown="return false;"
        ></i>
      </div>
    </div>
  </section>
</template>

<style scoped>
i {
  font-size: 6em;
  color: var(--blue);
  position: absolute;
  top: 40vh;
  width: 100%;
  text-align: center;
  animation: heartbeat 1.5s infinite ease-in-out;
}
@keyframes heartbeat
{
  0%
  {
    transform: scale( .75 );
  }
  20%
  {
    transform: scale( 1 );
  }
  40%
  {
    transform: scale( .75 );
  }
  60%
  {
    transform: scale( 1 );
  }
  80%
  {
    transform: scale( .75 );
  }
  100%
  {
    transform: scale( .75 );
  }
}
</style>
