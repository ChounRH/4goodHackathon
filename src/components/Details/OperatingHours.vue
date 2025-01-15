<template>
    <div class="popup-overlay" v-if="showPopup">
      <div class="popup-content">
        <span class="close-icon" @click="closePopup">&times;</span>
        <h2>Operating Hours</h2>
        <div class="divider-line"></div>
        <ul class="operating-hours-list" v-if="businessHours.length">
          <li v-for="(hour, index) in groupedBusinessHours" :key="index">
            <div class="day">
              <i class="pi pi-clock"></i>
              <strong>{{ hour.day }}:</strong>
            </div>
            <div class="time">
              <p v-for="time in hour.times" :key="time">
                {{ time }}
              </p>
            </div>
          </li>
        </ul>
        <p v-else>No operating hours available.</p>
      </div>
    </div>
  </template>
  
  <script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { getPlaces } from '@/tihServices.js';

const route = useRoute();
const uuid = route.params.uuid;
const showPopup = ref(true);
const businessHours = ref([]);
const groupedBusinessHours = ref([]);

const closePopup = () => {
  showPopup.value = false;
};

// Group business hours by day
const groupBusinessHours = (hours) => {
  const grouped = {};
  hours.forEach((hour) => {
    const day = formatDay(hour.day);
    if (!grouped[day]) {
      grouped[day] = [];
    }
    grouped[day].push(`${hour.openTime} - ${hour.closeTime}`);
  });
  return Object.keys(grouped).map((day) => ({
    day,
    times: grouped[day],
  }));
};

const formatDay = (day) => {
  return day.charAt(0).toUpperCase() + day.slice(1).replace('_', ' ');
};

const fetchPlaceDetails = async () => {
  try {
    const response = await getPlaces(`search/uuids?searchValues=${uuid}&limit=1`);
    if (response.data && response.data.length) {
      const place = response.data[0];
      businessHours.value = place.businessHour || [];
      groupedBusinessHours.value = groupBusinessHours(businessHours.value);
    }
  } catch (error) {
    console.error('Error fetching place details:', error);
  }
};

onMounted(fetchPlaceDetails);
</script>
  
<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 450px;
  position: relative;
  text-align: left;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h2 {
  margin-top: 0;
  font-size: 1.8rem;
  text-align: center;
}

.divider-line {
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
}

.close-icon {
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 30px;
  cursor: pointer;
}

.operating-hours-list {
  list-style: none;
  padding: 5px 90px 0px 90px;
}

.operating-hours-list li {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

.day {
  font-weight: bold;
}

.time {
  color: #666;
}

.operating-hours-list i {
  margin-right: 8px;
  color: #333;
}
</style>