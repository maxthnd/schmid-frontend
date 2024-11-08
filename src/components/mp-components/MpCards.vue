<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import SchmidcardMachinecard from "../utils/schmidcard-machinecard.vue";
import MachinePopup from "./MachinePopup.vue";

const machineData = ref<Record<string, any[]>>({});
const selectedMachineType = ref('Alle');
const selectedMachine = ref<{ title: string; image: string } | null>(null);
const isPopupVisible = ref(false);

const fetchMachineData = async () => {
  const response = await fetch('/assets/machines.json');
  machineData.value = await response.json();
};

onMounted(() => {
  fetchMachineData();
});

const filteredCards = computed(() => {
  if (selectedMachineType.value === 'Alle') {
    return Object.values(machineData.value).flat();
  } else {
    return machineData.value[selectedMachineType.value.toLowerCase()] || [];
  }
});

const selectMachineType = (type: string) => {
  selectedMachineType.value = type;
};

const openPopup = (machine: { title: string; image: string }) => {
  selectedMachine.value = machine;
  isPopupVisible.value = true;
};

const closePopup = () => {
  selectedMachine.value = null;
  isPopupVisible.value = false;
};
</script>

<template>
  <div class="mp-content">
    <p class="headline">Unser Fuhrpark</p>

    <div class="dropdown show mb-3">
      <a class="btn btn-primary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        {{ selectedMachineType }}
      </a>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
        <RouterLink
            class="dropdown-item"
            to="#"
            v-for="type in ['Alle', 'Fraesmaschinen', 'Messmaschinen', 'Drehmaschinen', 'Brennplasmaschneiden', 'Schleifmaschinen', 'Laser']"
            :key="type"
            @click.prevent="selectMachineType(type)">
          {{ type }}
        </RouterLink>
      </div>
    </div>

    <div class="content-cards">
      <schmidcard-machinecard
          v-for="(card, index) in filteredCards"
          :key="index"
          :title="card.title"
          :image="card.image"
          @click="openPopup(card)"
      />
    </div>

    <MachinePopup
        v-if="isPopupVisible"
        :machine="selectedMachine || { title: '', image: '' }"
        :isVisible="isPopupVisible"
        @close="closePopup"
    />
  </div>
</template>

<style scoped>
.content-cards {
  max-width: 1000px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 25px;
  margin-top: 25px;
}

.mp-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  margin-top: 25px;
}

.headline {
  color: white;
  font-size: 24px;
}

.mb-3 {
  margin-bottom: 20px;
}
</style>
