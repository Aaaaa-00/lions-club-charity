<template>
  <section id="about" class="about">
    <div class="container">
      <h2 class="section-title">About Our Mission</h2>
      <div class="about-grid">
        <div 
          v-for="(card, index) in aboutCards" 
          :key="index" 
          class="about-card"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <i :class="card.icon"></i>
          <h3>{{ card.title }}</h3>
          <p>{{ card.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// About cards data
const aboutCards = ref([
  {
    icon: 'fas fa-hands-helping',
    title: 'Community Service',
    description: 'Lions Club has been serving our community for decades, focusing on vision care, hunger relief, and disaster response.'
  },
  {
    icon: 'fas fa-ice-cream',
    title: 'Sweet Fundraising',
    description: 'Our delicious ice cream sales directly fund local charity projects and help us reach more people in need.'
  },
  {
    icon: 'fas fa-globe',
    title: 'Global Impact',
    description: 'Part of the world\'s largest service club organization, making a difference locally and internationally.'
  }
]);

// Add scroll animations
onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.about-card').forEach(card => {
    observer.observe(card);
  });
});
</script>

<style scoped>
.about {
  padding: 80px 0;
  background: #f8f9fa;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.about-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, opacity 0.6s ease;
  opacity: 0;
  transform: translateY(30px);
}

.about-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.about-card:hover {
  transform: translateY(-5px);
}

.about-card i {
  font-size: 3rem;
  color: #e74c3c;
  margin-bottom: 1rem;
}

.about-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.about-card p {
  color: #7f8c8d;
  line-height: 1.8;
}

/* Responsive styles */
@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>