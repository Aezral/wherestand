<template>
  <MDBFooter bg="dark" :text="['center', 'lg-start', 'muted']">
    <section
      class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom"
    >
      <div>
        <a target="_blank" href="https://github.com/Aezral" class="text-reset">
          <MDBIcon iconStyle="fab" icon="github"></MDBIcon>
        </a>
      </div>
    </section>

    <section class="">
      <MDBContainer class="text-center text-md-start mt-5">
        <MDBRow class="mt-3 mb-5">
          <MDBCol md="3" lg="4" xl="3" class="mx-auto mb-4">
            <h6 class="text-uppercase fw-bold mb-4">Aezral</h6>
            <p>Full Stack Developer - Focus on Front-End Development</p>
          </MDBCol>

          <MDBCol md="4" lg="3" xl="3" class="mx-auto mb-md-0 mb-4">
            <!-- Links -->
            <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
            <!-- <p><i class="fas fa-home me-3"></i> New York, NY 10012, US</p> -->
            <p>
              <i class="fas fa-envelope me-3"></i>
              aezral.business@gmail.com
            </p>
            <p>
              <i class="fab fa-discord me-3"></i>
              Aezral#8160
            </p>
            <p>
              <i class="fab fa-telegram me-3"></i>
              @Aezral
            </p>
          </MDBCol>
          <!-- Grid column -->
        </MDBRow>
        <!-- Grid row -->
      </MDBContainer>
    </section>
    <!-- Section: Links  -->
    <!-- Copyright -->
    <div class="text-center p-4" style="background-color: rgba(0, 0, 0, 0.05)">
      <a class="text-reset fw-bold">This site uses cookies to store data.</a>
    </div>
    <!-- Copyright -->
  </MDBFooter>
</template>

<script setup>
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-vue-ui-kit";
</script>

<style scoped></style>
