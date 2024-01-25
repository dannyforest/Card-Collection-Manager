<template>
  <div>
    <div v-if="editMode">
      <input type="text" v-model="editableCard.name" />
      <textarea v-model="editableCard.description"></textarea>
      <button @click="saveEdit">Save</button>
      <button @click="cancelEdit">Cancel</button>
    </div>
    <div v-else>
      <h3>{{ card.name }}</h3>
      <p>{{ card.description }}</p>
      <button @click="enableEditMode">Edit</button>
      <button @click="deleteThisCard">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    card: Object,
    index: Number
  },
  data() {
    return {
      editMode: false,
      editableCard: {...this.card}
    };
  },
  methods: {
    enableEditMode() {
      this.editMode = true;
    },
    saveEdit() {
      this.$emit('editCard', this.index, this.editableCard);
      this.editMode = false;
    },
    cancelEdit() {
      this.editableCard = {...this.card};
      this.editMode = false;
    },
    deleteThisCard() {
      this.$emit('deleteCard', this.index);
    }
  }
};
</script>
