<template>
  <div id="orderModal" class="modal" :class="{ 'show': isVisible }">
    <div class="modal-content">
      <span class="close" @click="closeModal">&times;</span>
      <h2>Order Ice Cream</h2>
      <div id="orderDetails" v-if="selectedFlavor">
        <p>Selected Flavor: <span id="selectedFlavor">{{ selectedFlavor.name }}</span></p>
        <div class="quantity-selector">
          <label for="quantity">Quantity:</label>
          <input 
            type="number" 
            id="quantity" 
            v-model.number="quantity" 
            min="1" 
            @input="updateTotalPrice"
          >
        </div>
        <div class="total-price">
          <strong>Total: $<span id="totalPrice">{{ totalPrice.toFixed(2) }}</span></strong>
        </div>
        <button class="btn btn-primary" @click="confirmOrder">Confirm Order</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { useNuxtApp } from '#app';

// Get emitter from plugin
const { $emitter } = useNuxtApp();

// Reactive state
const isVisible = ref(false);
const selectedFlavor = ref(null);
const quantity = ref(1);
const totalPrice = ref(0);

// Computed property for total price
const calculateTotalPrice = computed(() => {
  if (!selectedFlavor.value) return 0;
  return selectedFlavor.value.price * quantity.value;
});

// Methods
const openModal = (flavor) => {
  selectedFlavor.value = flavor;
  quantity.value = 1;
  updateTotalPrice();
  isVisible.value = true;
};

const closeModal = () => {
  isVisible.value = false;
};

const updateTotalPrice = () => {
  totalPrice.value = calculateTotalPrice.value;
};

const confirmOrder = () => {
  // Create success message
  const message = `Thank you for your order! ${quantity.value} ${selectedFlavor.value.name} for $${totalPrice.value.toFixed(2)}. Your contribution helps Lions Club serve the community!`;
  
  // Emit event to show success message
  $emitter.emit('show-success-message', message);
  
  // Close modal
  closeModal();
  
  // Reset form
  quantity.value = 1;
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Event listeners
onMounted(() => {
  // Listen for open-order-modal event
  $emitter.on('open-order-modal', (flavor) => {
    openModal(flavor);
  });
  
  // Close modal with Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isVisible.value) {
      closeModal();
    }
  });
  
  // Close modal when clicking outside
  window.addEventListener('click', (e) => {
    const modal = document.getElementById('orderModal');
    if (e.target === modal) {
      closeModal();
    }
  });
});
</script>

<style scoped>
.modal {
  display: none;
  position: fixed;
  z-index: 2000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
}

.modal.show {
  display: block;
}

.modal-content {
  background-color: white;
  margin: 10% auto;
  padding: 2rem;
  border-radius: 15px;
  width: 90%;
  max-width: 500px;
  position: relative;
  animation: modalSlideIn 0.3s ease;
}

@keyframes modalSlideIn {
  from { transform: translateY(-50px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}

.close {
  position: absolute;
  right: 1rem;
  top: 1rem;
  font-size: 2rem;
  cursor: pointer;
  color: #aaa;
  transition: color 0.3s ease;
}

.close:hover {
  color: #e74c3c;
}

.quantity-selector {
  margin: 1rem 0;
}

.quantity-selector label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.quantity-selector input {
  width: 100px;
  padding: 10px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
  font-size: 1rem;
}

.total-price {
  margin: 1rem 0;
  font-size: 1.2rem;
  text-align: center;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 10px;
}
</style>