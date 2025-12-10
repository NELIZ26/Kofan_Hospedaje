import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";

export const useReservaStore = defineStore("reserva", () => {
  const isModalOpen = ref(false);
  const showSuccess = ref(false);
  const personType = ref("natural");

  const form = reactive({
    nombres: "",
    tipoDocumento: "",
    correo: "",
    fechaNacimiento: "",
    numDocumento: "",
    telefono: "",
    cantidadPersonas: "2",
    habitacion: "Cabana2",
    fechaReserva: "",
  });

  const errors = reactive({
    nombres: false,
    tipoDocumento: false,
    correo: false,
    fechaNacimiento: false,
    numDocumento: false,
    telefono: false,
    fechaReserva: false,
  });

  const minDate = computed(() => {
    return new Date().toISOString().split("T")[0];
  });

  const labelNombres = computed(() =>
    personType.value === "juridica" ? "Razón Social" : "Nombres y Apellidos"
  );

  const placeholderNombres = computed(() =>
    personType.value === "juridica" ? "Ej: Empresa SAS" : "Ej: Juan Pérez"
  );

  const labelNumDoc = computed(() =>
    personType.value === "juridica" ? "NIT" : "Número de Documento"
  );

  const resetForm = () => {
    Object.keys(form).forEach((key) => (form[key] = ""));
    form.cantidadPersonas = "2";
    form.habitacion = "Cabana2";
    personType.value = "natural";
    clearErrors();
  };

  const clearErrors = () => {
    Object.keys(errors).forEach((key) => (errors[key] = false));
  };

  const validateForm = () => {
    let isValid = true;
    clearErrors();

    if (!form.nombres.trim()) {
      errors.nombres = true;
      isValid = false;
    }

    if (personType.value === "natural" && !form.tipoDocumento) {
      errors.tipoDocumento = true;
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.correo || !emailRegex.test(form.correo)) {
      errors.correo = true;
      isValid = false;
    }

    if (personType.value === "natural" && !form.fechaNacimiento) {
      errors.fechaNacimiento = true;
      isValid = false;
    }

    if (!form.numDocumento) {
      errors.numDocumento = true;
      isValid = false;
    }

    if (!form.telefono) {
      errors.telefono = true;
      isValid = false;
    }

    if (!form.fechaReserva) {
      errors.fechaReserva = true;
      isValid = false;
    }

    return isValid;
  };

  const openModal = () => {
    isModalOpen.value = true;
  };

  const closeModal = () => {
    isModalOpen.value = false;
  };

  const setPersonType = (type) => {
    personType.value = type;
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Formulario válido:", form);
      showSuccess.value = true;
      resetForm();
    }
  };

  const closeSuccessMessage = () => {
    showSuccess.value = false;
    isModalOpen.value = false;
  };

  return {
    isModalOpen,
    showSuccess,
    personType,
    form,
    errors,
    minDate,
    labelNombres,
    placeholderNombres,
    labelNumDoc,
    openModal,
    closeModal,
    setPersonType,
    handleSubmit,
    closeSuccessMessage,
  };
});
