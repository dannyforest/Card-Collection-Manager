<template>
  <div>
    <h2>My Card Collection</h2>
    <card-item
        v-for="(card, index) in cards"
        :key="card.id"
        :card="card"
        :index="index"
        @deleteCard="deleteCard"
        @editCard="editCard"
    ></card-item>
    <button @click="addCard">Add Card</button>
  </div>
</template>

<script>
import CardItem from './CardItem.vue';

export default {
  name: 'CardCollection',
  components: {
    CardItem
  },
  data() {
    return {
      cards: JSON.parse(localStorage.getItem('cards')) || []
    }
  },
  methods: {
    addCard() {
      // Logic to add a card
      const newCard = { id: Date.now(), name: 'New Card', description: 'Description here' };
      this.cards.push(newCard);
      this.updateLocalStorage();
    },
    editCard(index, updatedCard) {
      // Logic to edit a card
      this.cards.splice(index, 1, updatedCard);
      this.updateLocalStorage();
    },
    deleteCard(index) {
      // Logic to delete a card
      this.cards.splice(index, 1);
      this.updateLocalStorage();
    },
    updateLocalStorage() {
      localStorage.setItem('cards', JSON.stringify(this.cards));
    }
  }
};
</script>
