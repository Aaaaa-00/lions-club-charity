<template>
  <div>
    <AppHeader />
    <main>
      <HeroSection ref="heroSection" />
      <AboutSection />
      <FlavorsSection />
      <ImpactSection />
      <ContactSection />
    </main>
    <AppFooter />
    <OrderModal />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Import components manually since auto-import is disabled
import AppHeader from '~/components/AppHeader.vue';
import HeroSection from '~/components/HeroSection.vue';
import AboutSection from '~/components/AboutSection.vue';
import FlavorsSection from '~/components/FlavorsSection.vue';
import ImpactSection from '~/components/ImpactSection.vue';
import ContactSection from '~/components/ContactSection.vue';
import AppFooter from '~/components/AppFooter.vue';
import OrderModal from '~/components/OrderModal.vue';

// Since useNuxtApp auto-import is disabled, import from #app
import { useNuxtApp } from '#app';

// Get emitter from plugin
const { $emitter } = useNuxtApp();
const heroSection = ref(null);

// Set up event listeners
onMounted(() => {
  // Listen for show-success-message event
  $emitter.on('show-success-message', (message) => {
    if (heroSection.value) {
      heroSection.value.showSuccessMessage(message);
    }
  });
});
</script>

<style>
/* Page specific styles if needed */
</style>