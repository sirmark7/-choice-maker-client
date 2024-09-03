<template>
  <div class="create-election">
    <h1>Create Election</h1>
    <form @submit.prevent="createElection">
      <div class="form-group">
        <label for="name">Election Name</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="startDate">Start Date</label>
        <input type="date" id="startDate" v-model="startDate" required />
      </div>
      <div class="form-group">
        <label for="endDate">End Date</label>
        <input type="date" id="endDate" v-model="endDate" required />
      </div>
      <div class="form-group">
        <label for="positions">Select Positions</label>
        <select id="positions" v-model="selectedPositions" multiple required>
          <option v-for="position in positions" :key="position.id" :value="position.id">
            {{ position.name }}
          </option>
        </select>
      </div>
      <button type="submit">Create Election</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      startDate: '',
      endDate: '',
      selectedPositions: [],
      positions: [], // This will be fetched from the backend
    };
  },
  created() {
    this.fetchPositions();
  },
  methods: {
    fetchPositions() {
      // Replace with actual API call to fetch positions
      this.positions = [
        { id: '1', name: 'President' },
        { id: '2', name: 'Vice President' },
        { id: '3', name: 'Secretary' },
        // Add more positions...
      ];
    },
    createElection() {
      const newElection = {
        name: this.name,
        startDate: this.startDate,
        endDate: this.endDate,
        positions: this.selectedPositions, // Array of selected position IDs
      };
      console.log('Election Created:', newElection);
      // Here you would typically send newElection to the backend API
    },
  },
};
</script>

<style scoped>
.create-election {
  padding: 20px;
  width: 60%;
  margin: auto;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ced4da;
  border-radius: 4px;
}

button {
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}
</style>
