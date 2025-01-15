<template>
  <div>
    <div class="search-container">
      <div class="search-input-wrapper">
        <i class="pi pi-search search-icon"></i> <!-- PrimeVue search icon -->
        <input
          type="text"
          v-model="query"
          @input="fetchAutocomplete"
          placeholder="Restaurants, shops or events"
          class="search-input"
        />
      </div>
      <button @click="emitSearch" class="search-button">Search</button>
      <button @click="openFilterModal" class="filter-button">
        <i class="pi pi-filter-fill"></i>
        Filter
      </button> 

      <ul v-if="suggestions.length" class="autocomplete-results">
        <li
          v-for="(suggestion, index) in suggestions"
          :key="index"
          @click="goToItem(suggestion.uuid)" 
          class="autocomplete-item"
        >
          {{ suggestion.name }}
        </li>
      </ul>
    </div>

    <!-- Filter Modal -->
    <div v-if="showFilter" class="filter-modal">
      <div class="modal-content">
        <div class="modal-header">
          <button class="close-button" @click="showFilter = false">&times;</button>
          <h3 class="modal-title">Filter</h3>
          <button class="clear-button" @click="clearFilters">Clear All</button>
          <button class="save-button" @click="saveFilter">Save</button>
        </div>
        <div class="divider-line"></div>
        
        <div class="modal-body">
          <!-- Search Type Section -->
          <div class="filter-category">
            <h3>Search Type</h3>
            <div class="button-group">
              <label
                :class="['filter-option', { 'selected': selectedSearchType === 'food_beverages' }]"
                @click="toggleSearchType('food_beverages')"
              >
                F&B
              </label>
              <label
                :class="['filter-option', { 'selected': selectedSearchType === 'shops' }]"
                @click="toggleSearchType('shops')"
              >
                Shops
              </label>
              <label
                :class="['filter-option', { 'selected': selectedSearchType === 'events' }]"
                @click="toggleSearchType('events')"
              >
                Events
              </label>
            </div>
          </div>
          <div class="divider-line-2"></div>

          <!-- Category Section (Dynamically Updates with Search Type) -->
          <div class="filter-category" v-if="categoriesList && Object.keys(categoriesList).length">
            <h3>Category</h3>
            <div class="button-group-2">
              <label
                v-for="(displayName, key) in categoriesList"
                :key="key"
                :class="['filter-option', { 'selected': selectedCategories.includes(key) }]"
                @click="toggleCategory(key)"
              >
                {{ displayName }}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getPlaces } from '@/tihServices.js'; // Adjust the path as needed
import { useRoute, useRouter } from 'vue-router';

export default {
  data() {
    return {
      query: '',
      suggestions: [],
      showFilter: false,
      selectedSearchType: null,
      selectedCategories: [], // Holds selected categories as an array of stored names
      searchType: '', // Saved search type
      categoriesList: {}, // Holds current categories based on the selected search type
      searchTypeCategories: {
        // Define the categories available for each search type
        food_beverages: {
          bar: 'Bars',
          cafe: 'Cafe',
          hawker_centre: 'Hawker Centres',
          restaurant: 'Restaurants',
          others: 'Others',
        },
        shops: {
          bazaar_flea_market: 'Bazaars & Flea Markets',
          boutique: 'Boutiques',
          department_store: 'Department Stores',
          mall: 'Malls',
          others: 'Others'
        },
        events: {
          arts: 'Arts',
          attraction: 'Attractions',
          entertainment: 'Entertainment',
          food_beverage: 'Food & Beverages',
          history_culture: 'History & Culture',
          nature_wildlife: 'Nature & Wildlife',
          shopping: 'Shopping',
          sport: 'Sports',
          others: 'Others'
        }
      }
    };
  },
  computed: {
    // Computed property that returns selected categories as a "?"-separated string
    selectedCategoriesString() {
      return this.selectedCategories.join("-");
    }
  },
  methods: {
    openFilterModal() {
      this.showFilter = true;
    },
    getTypeIdParam() {
      // Check if any categories are selected
      return this.selectedCategories.length > 0 ? `&typeId=${this.selectedCategoriesString}` : "";
    },
    async fetchAutocomplete() {
      if (this.query.length < 3) return;

      try {
        console.log(this.getTypeIdParam());
        const searchTypeParam = this.searchType === "" ? 'events,food_beverages,shops' : this.searchType;
        const response = await getPlaces(`search?dataset=${searchTypeParam}${this.getTypeIdParam()}&keyword=${this.query}&limit=3`);
        this.suggestions = response.data.map(item => ({ name: item.name, uuid: item.uuid }));
      } catch (error) {
        console.error('Error fetching autocomplete results:', error);
      }
    },
    goToItem(uuid) {
      this.$router.push(`/item/${uuid}`);
    },
    emitSearch() {
      // Check if there are any selected categories
      const categoryPath = this.selectedCategories.length > 0 ? `/${this.selectedCategoriesString}` : "";
      this.searchType = this.searchType === "" ? 'events,food_beverages,shops' : this.searchType;
      const searchTypePath = this.searchType === 'events,food_beverages,shops' ? "" : `/${this.searchType}`;
      
      // Construct the URL based on the presence of selected categories
      const url = `/search/${this.query}${searchTypePath}${categoryPath}`;
      
      // Navigate to the constructed URL
      this.$router.push(url).then(() => {
        window.location.href = url; // Reload the page after the route is pushed
      });
    },
    saveFilter() {
      this.searchType = this.selectedSearchType || 'events,food_beverages,shops';
      this.showFilter = false;
      console.log("Selected Search Type:", this.searchType);
      console.log("Selected Categories:", this.selectedCategories.join("-"));
    },
    clearFilters() {
      this.selectedSearchType = null;
      this.selectedCategories = [];
      this.categoriesList = {};
    },
    toggleSearchType(type) {
      this.selectedSearchType = this.selectedSearchType === type ? null : type;
      // Update the category list based on the selected search type
      this.categoriesList = this.selectedSearchType ? this.searchTypeCategories[this.selectedSearchType] : {};
      // Clear previously selected categories when switching search types
      this.selectedCategories = [];
    },
    toggleCategory(category) {
      // Toggle category selection
      if (this.selectedCategories.includes(category)) {
        this.selectedCategories = this.selectedCategories.filter(cat => cat !== category);
      } else {
        this.selectedCategories.push(category);
      }
    }
  },
  mounted() {
    // Initialize selectedSearchType and selectedCategories based on route parameters
    const route = useRoute();
    this.query = route.params.searchinput || '';
    this.selectedSearchType = route.params.searchtype || '';
    this.selectedCategories = route.params.category ? route.params.category.split('-') : [];

    // Set the categoriesList based on the selected search type at initialization
    if (this.selectedSearchType) {
      this.categoriesList = this.searchTypeCategories[this.selectedSearchType];
    }
  },
};
</script>

<style scoped>
.divider-line {
  height: 2px;
  background-color: #ccc; /* Optional: divider line between sections */
}

.divider-line-2 {
  margin-bottom: 10px;
}

.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 0; 
  position: relative;
}

.search-input-wrapper {
  position: relative;
  width: 40vw;
  min-width: 100px;
  display: flex;
  align-items: center;
}

.search-input {
  width: 100%;
  padding: 10px 40px; /* Leave padding on the left for the icon */
  border: none;
  outline: none;
  height: 40px;
  color: #2c3f50;
  background-color: #e6e6e6; /* Input background color */
  border-radius: 25px 0px 0px 25px;
  font-size: 16px;
}

.search-icon {
  position: absolute;
  left: 15px; /* Position the icon inside the input */
  color: #888; /* Icon color, matching the placeholder color */
  font-size: 1.2rem;
}

.search-button {
  padding: 10px 20px;
  border: none;
  font-size: 15px;
  height: 40px;
  background-color: #f8683b;
  color: white;
  cursor: pointer;
  border-radius: 0 25px 25px 0;
  transition: background-color 0.3s ease;
}

.search-button:hover {
  background-color: #f24f1d; /* Darken the button on hover */
}

.filter-button {
  margin-left: 10px;
  padding: 10px 0; 
  background-color: #bbbbbb;
  color: white;
  width: 95px; 
  height: 40px; 
  font-size: 15px;
  border: none;
  cursor: pointer;
  border-radius: 25px;
  transition: background-color 0.3s ease;
  box-sizing: border-box; 
  display: flex;
  justify-content: center; 
  align-items: center; 
  overflow: hidden; 
}

.filter-button i {
  font-size: 13px; 
  margin-right: 5px;
}

.filter-button:hover {
  background-color: #6e6e6e; /* Darken the filter button on hover */
}

.autocomplete-results {
  list-style: none;
  margin: 0;
  padding: 0;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  position: absolute;
  top: 55px;
  left: calc(30vw - 95px);
  width: 40vw;
  z-index: 10; 
}

.autocomplete-item {
  padding: 10px;
  cursor: pointer;
}

.autocomplete-item:hover {
  background-color: #f0f0f0;
}

/* Modal styling */
.filter-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}

.modal-content {
  background-color: white;
  padding: 20px;
  padding-bottom: 5px;
  border-radius: 8px;
  width: 600px;
  height: auto;
  min-height: 490px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.close-button {
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #888;
  transition: color 0.2s;
}

.close-button:hover {
  color: #444;
}

.modal-title {
  color: #2c3f50;
  flex-grow: 1;
  font-weight: bold;
  text-align: center;
  font-size: 1.5rem;
  margin: 0 0 0 110px;
}

.save-button {
  background-color: #f8683b;
  color: white;
  padding: 5px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
}

.clear-button {
  background-color: #b9b9b9;
  color: white;
  padding: 5px 10px;
  margin: 0 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 15px;
}

.save-button:hover {
  background-color: darkorange;
}

.modal-body {
  padding: 10px 0;
  font-size: 16px;
}

.filter-category {
  background-color: #f9f9f9;
  padding: 15px 20px 20px 20px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.filter-category h3 {
  margin: 0 0 10px;
  font-size: 18px;
}

/* Styling for the selectable button group */
.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center; 
}

.button-group-2 {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center; 
}

.filter-option {
  padding: 10px 20px;
  border-radius: 8px;
  background-color: #e6e6e6;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.filter-option.selected {
  background-color: #f8683b;
  color: white;
}

.filter-option:hover {
  background-color: #fb9c7f;
  color: white;
}
</style>