<template>
  <div class="ratings-and-reviews">
    <div class="rating-section">
      <div class="rating-number-container">
        <div class="rating-number-1">
          <p class="rating-number">
            {{ rating !== null && rating !== undefined ? rating.toFixed(1) : 'N/A' }}
          </p>
        </div>
        <div class="rating-number-2">
          <StarRating :modelValue="rating" @update:modelValue="updateRating" />
        </div>
      </div>
      <div class="leave-review-container">
        <button class="leave-review-button" @click="handleLeaveReview">Leave a Review</button>
      </div>
    </div>

    <div class="review-list">
      
      <div v-for="(review, index) in reviews" :key="index" class="review-item">
        <div class="review-header">
          <div>
            <a :href="review.authorURL" target="_blank" class="author-name">{{ review.authorName }}</a>
            <p class="review-time">{{ formatTime(review.time) }}</p>
          </div>
        </div>
        <p class="review-text">
          {{ isExpanded[index] ? review.text : truncatedText(review.text) }}
          <span v-if="!isExpanded[index] && review.text.length > maxTextLength">...</span>
          <span v-if="review.text.length > maxTextLength" @click="toggleText(index)" class="see-more">
            {{ isExpanded[index] ? 'Show less' : 'See more' }}
          </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineEmits, onMounted, watch } from 'vue';
import { googleLink, googleReviews } from '@/tihServices.js';
import StarRating from './StarRating.vue';

// Props to accept rating and reviews from parent
const props = defineProps({
  rating: {
    type: Number,
    default: 0,
  },
  reviews: {
    type: Array,
    default: () => [],
  },
  uniqueid: {
    type: String,
    default: "",
  },
});

const emit = defineEmits(['update:rating']);
const reviews = ref([]);
const isExpanded = ref([]); // Control expanded state for each review
const maxTextLength = 100; // Maximum characters to display before truncation

// Fetch reviews based on the availability of props.reviews
const fetchReviews = async () => {
  if (props.reviews.length > 0) {
    // Use reviews from props if available
    reviews.value = props.reviews;
  } else {
    try {
      // Fetch reviews using googleReviews if props.reviews is empty
      const fetchedReviews = await googleReviews(props.uniqueid);
      if (fetchedReviews) {
        reviews.value = fetchedReviews;
        isExpanded.value = fetchedReviews.map(() => false); // Initialize expansion states
      } else {
        console.error('No reviews found in googleReviews response');
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  }
};

// Brings the user to the Google Business Profile
const handleLeaveReview = async () => {
  try {
    const url = await googleLink(props.uniqueid);
    if (url) {
      window.open(url, '_blank');
    } else {
      alert('Sorry! We had some troubles accessing their Google Business Profile.');
    }
  } catch (error) {
    console.error('Error fetching link:', error);
  }
};

const updateRating = (newRating) => {
  emit('update:rating', newRating);
};

// Truncate text if it's too long
const truncatedText = (text) => {
  return text.length > maxTextLength ? text.slice(0, maxTextLength) : text;
};

// Toggle text expansion
const toggleText = (index) => {
  isExpanded.value[index] = !isExpanded.value[index];
};

// Format time to a readable format
const formatTime = (time) => {
  const date = new Date(time);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

// Run fetchReviews on component mount
onMounted(fetchReviews);
</script>

<style scoped>

.author-name {
  display: flex;
  font-weight: bold;
  color: #007bff;
  align-items: flex-start;
  text-decoration: none;
}

.author-name:hover {
  text-decoration: underline;
}

.ratings-and-reviews {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.rating-section {
  margin: 0 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
}

.rating-number {
  margin: 0;
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
}

.review-list {
  overflow-y: auto; /* Enable vertical scrolling */
  max-height: calc(100vh - 515px); /* Set maximum height for scrollable area */
  padding-bottom: 40%;
}


.review-item {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
}

.review-header {
  display: flex;
  align-items: flex-start;
  gap: 10px;
}

.review-time {
  font-size: 0.85rem;
  color: #999;
}

.review-text {
  margin-top: 10px;
  text-align: left;
  color: #333;
}

.see-more {
  color: #999;
  cursor: pointer;
  font-weight: bold;
  margin-left: 5px;
}

.divider-line {
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
}

.divider-line-2 {
  height: 1px;
  background-color: #ccc;
  margin: 10px 0;
}

.leave-review-button {
  background-color: #b4b4b4;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.leave-review-button:hover {
  background-color: #606060;
}

.leave-review-container {
  display: flex;
  padding: 12px 0 0 0;
  align-items: center;
  justify-content: center;
  width: 60%;
}

.rating-number-container {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.rating-number-1 {
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: center;

}

.rating-number-2 {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>