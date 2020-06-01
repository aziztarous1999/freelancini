<template>
  <div>
    <div>
      <mdb-input
        class="md-sm-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <center>
        <mdb-btn
          outline="primary"
          rounded
          size="sm"
          type="submit"
          class="md-auto rounded-pill"
          >Search</mdb-btn
        >
      </center>
    </div>
    <br />

    <JobList />
  </div>
</template>

<script>
import {
  mdbContainer,
  mdbRow,
  mdbCol,
  mdbInput,
  mdbBtn,
  mdbFormInline
} from "mdbvue";
import JobList from "../../components/JobList";

export default {
  components: {
    mdbInput,
    mdbBtn,
    mdbFormInline,
    mdbContainer,
    mdbRow,
    mdbCol,
    JobList
  }
};
</script>

<style></style>
