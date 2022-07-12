<template>
  <MDBContainer class="px-1">
    <MDBCard class="mb-3 mx-auto" style="max-width: 500px">
      <MDBCardBody>
        <h1>Where stand?</h1>
        <p>YBA Stand Management Tool</p>
        <MDBCardText class="mt-3">
          Add an account to have a registry of the stands you have
        </MDBCardText>
        <MDBRow tag="form" class="mx-auto mt-1" style="max-width: 400px">
          <MDBCol>
            <MDBInput label="User" v-model="user_toadd" wrapperClass="mb-4" />
          </MDBCol>
          <MDBCol>
            <MDBBtn color="dark" v-on:click="agregarcuenta()">Add</MDBBtn>
          </MDBCol>
        </MDBRow>
      </MDBCardBody>
    </MDBCard>

    <MDBRow
      v-for="line of Math.ceil(cuentas.size / 3)"
      :key="line"
      class="mx-auto"
    >
      <MDBCol
        class="col-xxl-4 mb-1"
        v-for="cuenta of Array.from(cuentas.entries()).slice(
          3 * (line - 1),
          line * 3
        )"
        :key="cuenta"
      >
        <MDBCard class="mb-4">
          <MDBCardBody>
            <MDBCardTitle
              ><MDBRow class="mx-auto">
                <MDBCol col="4"> </MDBCol>
                <MDBCol col="4">
                  <MDBCardTitle class="mt-2">{{ cuenta[0] }}</MDBCardTitle>
                </MDBCol>
                <MDBCol col="4" align="left">
                  <MDBBtn
                    floating
                    v-on:click="eliminarcuenta(cuenta[0])"
                    color="light"
                    ><i class="fas fa-times"></i
                  ></MDBBtn>
                </MDBCol> </MDBRow
            ></MDBCardTitle>

            <MDBRow tag="form" class="mx-auto mt-4" style="max-width: 400px">
              <MDBCol col="8">
                <MDBDropdown v-model="selectstand[cuenta]">
                  <MDBDropdownToggle
                    color="light"
                    @click="selectstand[cuenta] = !selectstand[cuenta]"
                  >
                    {{ standlist[standselected[cuenta[0]]] || "Select stand" }}
                  </MDBDropdownToggle>
                  <MDBDropdownMenu aria-labelledby="dropdownMenuButton">
                    <MDBDropdownItem
                      v-for="stand of Object.entries(standlist)"
                      :key="stand"
                      tag="button"
                      v-on:click="
                        seleccionarstand(stand[0], cuenta[0]);
                        selectstand[cuenta] = !selectstand[cuenta];
                      "
                      >{{ stand[1] }}</MDBDropdownItem
                    >
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBCol>
              <MDBCol col="4" align="left">
                <MDBBtn
                  color="dark"
                  v-on:click="agregarstand(standselected[cuenta[0]], cuenta[0])"
                  >Add</MDBBtn
                >
              </MDBCol>
            </MDBRow>

            <MDBCard
              class="mt-5 shadow-3-strong"
              v-for="stand of cuenta[1]"
              :key="stand"
            >
              <MDBCardBody>
                <MDBRow>
                  <MDBCol
                    style="
                      display: flex;
                      align-items: center;
                      justify-content: center;
                    "
                  >
                    <b> {{ standlist[stand] }}</b>
                  </MDBCol>
                  <MDBCol>
                    <MDBBtn
                      v-on:click="eliminarstand(cuenta[0], stand)"
                      floating
                      color="light"
                      ><i class="fas fa-times"></i
                    ></MDBBtn>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script setup>
import { onBeforeMount, ref} from "vue";
import standlist from "./assets/stands.json";

import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdb-vue-ui-kit";

import cookies from "vue-cookies";

const user_toadd = ref("");

const cuentas = ref(new Map());

const selectstand = ref({});

const standselected = ref({});

function eliminarcuenta(cuenta) {
  cuentas.value.delete(cuenta);
  saveinfo();
}

function eliminarstand(cuenta, stand) {
  cuentas.value
    .get(cuenta)
    .splice(cuentas.value.get(cuenta).indexOf(Number(stand)), 1);
  saveinfo();
}

function agregarcuenta() {
  if (!cuentas.value.has(user_toadd.value) && user_toadd.value.length != 0) {
    cuentas.value.set(user_toadd.value, []);
  }
  saveinfo();
}

function seleccionarstand(stand, cuenta) {
  standselected.value[cuenta] = Number(stand[0]);
}

function agregarstand(stand, cuenta) {
  if (!isNaN(Number(stand))) {
    cuentas.value.get(cuenta).push(Number(stand));
    standselected.value[cuenta] = undefined;
    saveinfo();
  }
}

function saveinfo() {
  var obj = Object.fromEntries(cuentas.value);
  const final = JSON.stringify(obj);

  cookies.set("accdata", final, '365d');
}

function loadinfo(){
  let info = cookies.get('accdata');

  info = new Map(Object.entries(info))

  cuentas.value = info;

}

onBeforeMount(()=>{
  loadinfo();
})

// window.onbeforeunload = () => {};
// const {inject} = require('vue')

// const $cookies = inject("$cookies");

// const setcookie = () => {
//   $cookies.set("prueba", "Valor de prueba");
// }
</script>

<style>
#app {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body::-webkit-scrollbar {
  display: none;
}

.dropdown-menu {
  overflow: auto;
  height: 300px !important;
}

.dropdown-menu::-webkit-scrollbar {
  display: none;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
