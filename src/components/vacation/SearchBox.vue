<template>
  <div>
    <!-- <Departures /> -->
    <select
      @change="onDepartureChange($event)"
      class="form-select"
      aria-label="Select departure"
      v-model="model.departure"
    >
      <option
        v-for="item in departures"
        :key="item.id"
        :value="item.id"
        :selected="item.id === 'YYZ'"
      >
        {{ item.name }}
      </option>
    </select>
    <!-- <Destinations /> -->
    <select
      class="form-select"
      aria-label="Select destination"
      v-model="model.destination"
    >
      <option v-for="item in destinations" :key="item.ids" :value="item.ids">
        {{ item.type }} - {{ item.name }}
      </option>
    </select>
    <!-- <Durations /> -->
    <input type="date" id="birthday" name="birthday" />
    <select
      class="form-select"
      aria-label="Select destination"
      v-model="model.duration"
    >
      <option
        v-for="item in durations"
        :key="item.value"
        :value="item.value"
        :selected="item.selected"
      >
        {{ item.name }}
      </option>
    </select>
  </div>
</template>

<script>
// import Departure from "@/components/common/Departure";

export default {
  name: "SearchBox",
  data() {
    return {
      model: {
        departure: null,
        departureDate: null,
        duration: 7,
        destination: null,
        rooms: 1,
        adults: 2,
        child1: null,
        child2: null,
        child3: null,
        child4: null,
      },
      destinations: [],
      departures: [],
      durations: [
        { name: "1 day", value: 1 },
        { name: "2 days", value: 2 },
        { name: "3 days", value: 3 },
        { name: "4 days", value: 4 },
        { name: "5 days", value: 5 },
        { name: "6 days", value: 6 },
        { name: "7 days", value: 7 },
        { name: "8 days", value: 8 },
        { name: "9 days", value: 9 },
      ],
    };
  },
  mounted() {
    this.$http
      .get("http://localhost:2893/api/Resource/GetDepartures")
      .then((response) => {
        this.departures = response.data.data;
      });
  },
  methods: {
    onDepartureChange() {
      this.model.destination = null;
      this.$http
        .get(
          "http://localhost:2893/api/Resource/GetDestinations?id=" +
            this.model.departure
        )
        .then((response) => {
          this.destinations = response.data.data;
        });
    },
  },
};
</script>
