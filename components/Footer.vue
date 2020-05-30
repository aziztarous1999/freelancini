<template>
  <!-- Footer -->
  <mdb-footer style=" color: #cab184; " class="page-footer font-small pt-4 mt-4">

    <div class="text-center py-3">
      <ul class="list-unstyled list-inline mb-0">
        <li class="list-inline-item">
          <h5 class="mb-1">Register for free</h5>
        </li>
        <li class="list-inline-item">
          <nuxt-link to="/log/login" class="btn blue-gradient rounded-pill">Sign In!</nuxt-link>
        </li>
      </ul>
    </div>

    <div class="footer-copyright text-center py-3" style="color: #cab184;background:white">
      <mdb-container fluid>
        &copy; 2020 Copyright: <a href="#" class="text-primary"> Freelancini.com </a>
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'Footer',
    components: {
      mdbFooter,
      mdbContainer
    }
  }
</script>