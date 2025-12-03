// src/composables/useReserva.js
import { ref, reactive, computed } from 'vue';

// =================================================================
// 1. ESTADO GLOBAL (Afuera de la función para que sea compartido)
// =================================================================

const isModalOpen = ref(false);
const showSuccess = ref(false);
const personType = ref('natural'); 

// Los datos del formulario también afuera para que no se borren si cierras y abres
const form = reactive({
    nombres: '',
    tipoDocumento: '',
    correo: '',
    fechaNacimiento: '',
    numDocumento: '',
    telefono: '',
    cantidadPersonas: '2',
    habitacion: 'Cabana2',
    fechaReserva: ''
});

const errors = reactive({
    nombres: false,
    tipoDocumento: false,
    correo: false,
    fechaNacimiento: false,
    numDocumento: false,
    telefono: false,
    fechaReserva: false
});

// =================================================================
// 2. LA FUNCIÓN (Aquí van los métodos y lógica)
// =================================================================
export function useReserva() {

  // --- COMPUTADAS ---
  const minDate = computed(() => new Date().toISOString().split('T')[0]);

  const labelNombres = computed(() => personType.value === 'juridica' ? 'Razón Social' : 'Nombres y Apellidos');
  const placeholderNombres = computed(() => personType.value === 'juridica' ? 'Ej: Empresa SAS' : 'Ej: Juan Pérez');
  const labelNumDoc = computed(() => personType.value === 'juridica' ? 'NIT' : 'Número de Documento');

  // --- MÉTODOS INTERNOS ---
  const clearErrors = () => {
    Object.keys(errors).forEach(key => errors[key] = false);
  };

  const resetForm = () => {
    Object.keys(form).forEach(key => form[key] = '');
    form.cantidadPersonas = '2';
    form.habitacion = 'Cabana2';
    personType.value = 'natural';
    clearErrors();
  };

  const validateForm = () => {
    let isValid = true;
    clearErrors();

    if (!form.nombres.trim()) { errors.nombres = true; isValid = false; }
    
    if (personType.value === 'natural' && !form.tipoDocumento) { 
      errors.tipoDocumento = true; isValid = false; 
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.correo || !emailRegex.test(form.correo)) { 
      errors.correo = true; isValid = false; 
    }

    if (personType.value === 'natural' && !form.fechaNacimiento) { 
      errors.fechaNacimiento = true; isValid = false; 
    }

    if (!form.numDocumento) { errors.numDocumento = true; isValid = false; }
    if (!form.telefono) { errors.telefono = true; isValid = false; }
    if (!form.fechaReserva) { errors.fechaReserva = true; isValid = false; }

    return isValid;
  };

  // --- MÉTODOS PÚBLICOS ---
  const openModal = () => {
    isModalOpen.value = true;
  };

  const closeModal = () => {
    // Solo cerramos si no estamos mostrando el mensaje de éxito
    // (Opcional: puedes quitar esta condición si prefieres que cierre siempre)
    if (!showSuccess.value) {
      isModalOpen.value = false;
      // Opcional: resetForm(); // Descomenta si quieres limpiar el form al cerrar
    }
  };

  const setPersonType = (type) => {
    personType.value = type;
    clearErrors();
    if (type === 'juridica') {
      form.tipoDocumento = '';
      form.fechaNacimiento = '';
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log("Datos a enviar:", { ...form, tipoPersona: personType.value });
      showSuccess.value = true;
    }
  };

  const closeSuccessMessage = () => {
    showSuccess.value = false;
    isModalOpen.value = false;
    resetForm();
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
    closeSuccessMessage
  };
}