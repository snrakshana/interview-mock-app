<template>
  <div class="user-log-card">
    <div class="user-log-item">{{ formattedDate }}</div>
    <div class="user-log-item">{{ formattedAlterView }}</div>
    <div class="user-log-item">{{ formattedTime }}</div>
    <div class="user-log-item">Live Map</div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "UserLog",
  props: {
    log: {
      type: Object,
    },
  },
  computed: {
    formattedDate() {
      return moment(this.log.date, "YYYY-MM-DD").format("DD / MMM / YYYY");
    },
    formattedTime() {
      return moment(this.log.time, "hh:mm").format("hh : mm a");
    },
    formattedAlterView() {
      if (this.log.alert_view) {
        return "on";
      } else return "off";
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500&display=swap");
.user-log-card {
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 7px 10px;
  margin-bottom: 1%;
  border: 1px solid rgba(black, 0.4);
  border-radius: 6px;
  .user-log-item {
    width: 25%;
    font-family: "Nunito", sans-serif;
    font-size: 13px;
    font-weight: 500;
    text-transform: capitalize;
    &:last-child {
      color: rgb(51, 105, 223);
    }
  }
}
</style>