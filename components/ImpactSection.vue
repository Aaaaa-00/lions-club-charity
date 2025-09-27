<template>
  <section id="impact" class="impact">
    <div class="container">
      <h2 class="section-title">Your Impact</h2>
      <div class="impact-stats">
        <div v-for="(stat, index) in stats" :key="index" class="stat-card">
          <div class="stat-number" :data-target="stat.value" ref="statCounters">
            0
          </div>
          <div class="stat-label">{{ stat.label }}</div>
        </div>
      </div>
      <div class="impact-description">
        <p>Every ice cream purchase directly contributes to our community service projects. Your support helps us provide vision screenings, food assistance, and disaster relief to those who need it most.</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Stats data
const stats = ref([
  { value: 1250, label: 'Meals Provided' },
  { value: 85, label: 'Families Helped' },
  { value: 15000, label: 'Funds Raised ($)' },
  { value: 500, label: 'Volunteers' }
]);

const statCounters = ref([]);

// Animate counter function
const animateCounter = (element, target) => {
  let current = 0;
  const increment = target / 100;
  const duration = 2000; // 2 seconds
  const stepTime = duration / 100;
  
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    element.textContent = Math.floor(current).toLocaleString();
  }, stepTime);
};

// Initialize counter animation
onMounted(() => {
  const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px 0px -100px 0px'
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-target'));
        animateCounter(counter, target);
        observer.unobserve(counter);
      }
    });
  }, observerOptions);
  
  // Use nextTick to ensure DOM is updated
  setTimeout(() => {
    const counters = document.querySelectorAll('.stat-number');
    counters.forEach(counter => {
      observer.observe(counter);
    });
  }, 100);
});
</script>

<style scoped>
.impact {
  padding: 80px 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.impact .section-title {
  color: white;
}

.impact-stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
}

.stat-card {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 3rem;
  font-weight: 700;
  color: #f39c12;
  margin-bottom: 0.5rem;
  transition: all 0.5s ease;
}

.stat-label {
  font-size: 1.1rem;
  opacity: 0.9;
}

.impact-description {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.8;
  opacity: 0.9;
}

/* Responsive styles */
@media (max-width: 768px) {
  .impact-stats {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .impact-stats {
    grid-template-columns: 1fr;
  }
  
  .stat-number {
    font-size: 2.5rem;
  }
}
</style>