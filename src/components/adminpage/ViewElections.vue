<template>
  <div class="results-page">
    <h1>Election Results</h1>

    <div v-if="elections.length">
      <div v-for="election in elections" :key="election.id" class="election-result">
        <h2>{{ election.name }}</h2>
        <ul>
          <li v-for="candidate in election.candidates" :key="candidate.id">
            {{ candidate.name }}: {{ candidate.votes }} votes
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <p>No election results available.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      elections: [
        {
          id: 1,
          name: 'School President',
          candidates: [
            { id: 1, name: 'Alice Johnson', votes: 120 },
            { id: 2, name: 'Bob Smith', votes: 90 },
          ],
        },
        // More elections...
      ],
    };
  },
};
</script>

<style scoped>
.results-page {
  padding: 20px;
    width: 60%;
  margin: auto;
}

.election-result {
  margin-bottom: 20px;
  padding: 15px;
  border: 1px solid #ced4da;
  border-radius: 5px;
}

.election-result h2 {
  margin-bottom: 10px;
}

.election-result ul {
  list-style: none;
  padding: 0;
}

.election-result li {
  padding: 8px;
  background-color: #f1f3f5;
  margin-bottom: 5px;
  border-radius: 3px;
}
</style>
