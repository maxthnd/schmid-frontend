<template>
  <div class="popup-overlay" v-if="isVisible">
    <div class="popup-content">
      <button class="close-button" @click="closePopup">x</button>
      <h2>{{ machine.title }}</h2>
      <img :src="machine.image" alt="Maschine Bild" class="popup-image" />

      <div class="machine-details">
        <p><strong>Maschinentyp:</strong> {{ machine.type || 'Keine Informationen' }}</p>
        <p v-if="machine.x_travel_mm"><strong>X-Verfahrweg:</strong> {{ machine.x_travel_mm }} mm</p>
        <p v-if="machine.y_travel_mm"><strong>Y-Verfahrweg:</strong> {{ machine.y_travel_mm }} mm</p>
        <p v-if="machine.z_travel_mm"><strong>Z-Verfahrweg:</strong> {{ machine.z_travel_mm }} mm</p>
        <p v-if="machine.laser_performance"><strong>Laser Leistung:</strong> {{ machine.laser_performance }}</p>
        <p v-if="machine.positionaccuracy_x_y"><strong>Positionsgenauigkeit X/Y:</strong> {{ machine.positionaccuracy_x_y }}</p>
        <p v-if="machine.accuracy_newposition"><strong>Genaugkeit Neuposition:</strong> {{ machine.accuracy_newposition }}</p>
        <p v-if="machine.axle"><strong>Achsen:</strong> {{ machine.axle || 'Keine Informationen' }}</p>
        <p v-if="machine.manufacturer"><strong>Hersteller:</strong> {{ machine.manufacturer || 'Keine Informationen' }}</p>
        <p v-if="machine.built"><strong>Baujahr:</strong> {{ machine.built || 'Keine Informationen' }}</p>
        <p v-if="machine.specifications">{{ formatSpecifications(machine) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  machine: {
    type: Object,
    required: true,
  },
  isVisible: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(['close']);

const closePopup = () => {
  emit('close');
};

// Funktion zur Formatierung der Spezifikationen
const formatSpecifications = (machine) => {
  const specs = [];
  if (machine.x_travel_mm) specs.push(`X-Verfahrweg: ${machine.x_travel_mm} mm`);
  if (machine.y_travel_mm) specs.push(`Y-Verfahrweg: ${machine.y_travel_mm} mm`);
  if (machine.z_travel_mm) specs.push(`Z-Verfahrweg: ${machine.z_travel_mm} mm`);
  if (machine.width_mm) specs.push(`Breite: ${machine.width_mm} mm`);
  if (machine.height_mm) specs.push(`Höhe: ${machine.height_mm} mm`);
  // Füge hier zusätzliche Spezifikationen hinzu, die du anzeigen möchtest
  return specs.join(', ');
};
</script>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  position: relative;
  max-width: 500px;
  text-align: center;
  min-height: 400px; /* Mindesthöhe von 400 Pixeln */
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 20px;
  cursor: pointer;
}

.popup-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

h2, p {
  color: black;
}

.machine-details {
  text-align: left;
}

.machine-details p {
  margin: 8px 0;
}
</style>
