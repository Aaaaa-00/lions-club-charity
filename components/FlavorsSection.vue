<template>
  <section id="flavors" class="flavors">
    <div class="container">
      <h2 class="section-title">Our Delicious Flavors</h2>
      <p class="section-subtitle">Every scoop supports a great cause!</p>
      <div class="flavors-grid">
        <div 
          v-for="(flavor, index) in flavors" 
          :key="index" 
          class="flavor-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="flavor-icon">{{ flavor.icon }}</div>
          <h3>{{ flavor.name }}</h3>
          <p>{{ flavor.description }}</p>
          <div class="price">${{ flavor.price.toFixed(2) }}</div>
          <button class="btn btn-order" @click="orderFlavor(flavor)">Order Now</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useNuxtApp } from '#app';

// Get emitter from plugin
const { $emitter } = useNuxtApp();

// Flavors data
const flavors = ref([
  {
    icon: '🍓',
    name: 'Strawberry Delight',
    description: 'Fresh strawberries in creamy vanilla base',
    price: 5.00
  },
  {
    icon: '🍫',
    name: 'Chocolate Dream',
    description: 'Rich chocolate with chocolate chips',
    price: 5.00
  },
  {
    icon: '🍦',
    name: 'Vanilla Classic',
    description: 'Traditional vanilla made with real vanilla beans',
    price: 4.50
  },
  {
    icon: '🥭',
    name: 'Mango Tropical',
    description: 'Exotic mango flavor with tropical twist',
    price: 5.50
  },
  {
    icon: '🍪',
    name: 'Cookies & Cream',
    description: 'Vanilla ice cream with chocolate cookie pieces',
    price: 5.50
  },
  {
    icon: '🍒',
    name: 'Cherry Bliss',
    description: 'Sweet cherries in smooth vanilla cream',
    price: 5.00
  }
]);

// Methods
const orderFlavor = (flavor) => {
  // Emit event to open modal with selected flavor
  $emitter.emit('open-order-modal', flavor);
};

// Add animations
onMounted(() => {
  // Add stagger animation to flavor cards
  const flavorCards = document.querySelectorAll('.flavor-card');
  flavorCards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, index * 100);
  });

  // Add floating animation to flavor icons
  const flavorIcons = document.querySelectorAll('.flavor-icon');
  flavorIcons.forEach((icon, index) => {
    icon.style.animation = `float 3s ease-in-out infinite`;
    icon.style.animationDelay = `${index * 0.2}s`;
  });
});
</script>

<style scoped>
.flavors {
  padding: 80px 0;
  background: white;
}

.flavors-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.flavor-card {
  background: linear-gradient(135deg, #fff 0%, #f8f9fa 100%);
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
  opacity: 0;
  transform: translateY(30px);
}

.flavor-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
  border-color: #e74c3c;
}

.flavor-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.flavor-card h3 {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.flavor-card p {
  color: #7f8c8d;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.price {
  font-size: 1.5rem;
  font-weight: 700;
  color: #e74c3c;
  margin-bottom: 1rem;
}

/* Responsive styles */
@media (max-width: 768px) {
  .flavors-grid {
    grid-template-columns: 1fr;
  }
}
</style>