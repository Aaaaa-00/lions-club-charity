<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-logo">
          <i class="fas fa-paw"></i>
          <span>Lions Club</span>
        </div>
        <p>&copy; {{ currentYear }} Lions Club Ice Cream Charity Event. All rights reserved.</p>
        <p>We Serve - Making a difference one scoop at a time!</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue';

// Computed property for current year
const currentYear = computed(() => new Date().getFullYear());
</script>

<style scoped>
.footer {
  background: #2c3e50;
  color: white;
  padding: 2rem 0;
  text-align: center;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-logo {
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: 700;
}

.footer-logo i {
  margin-right: 0.5rem;
  color: #f39c12;
}

.footer p {
  opacity: 0.8;
}
</style>