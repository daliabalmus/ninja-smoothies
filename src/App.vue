<template>
  <div class="home">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'

export default {
    name: 'App',
    components: {
      Navbar
    }
}
</script>