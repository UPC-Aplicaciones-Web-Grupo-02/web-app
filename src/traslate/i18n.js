import { createI18n } from 'vue-i18n';

const messages = {
  es: {
    reservationHistory: {
      title: 'Historial de scooters alquilados',
      verDetalles: 'Ver Detalles',
      eliminarHistorial: 'Eliminar Historial',
      btnCancelar: 'Cancelar',
      btnBorrarHistorial: 'Borrar Historial'
    },
    reservationDetails: {
      title: 'Reservation Details',
      fechaInicio: 'Fecha de inicio:',
      fechaFin: 'Fecha de fin:',
      tiempo: 'Tiempo:',
      calificacion: 'Calificación:',
      nombrePropietario: 'Nombre del propietario:',
      telefono: 'Teléfono:',
      btnCerrar: 'Cerrar'
    },
    suscription: {
      title: 'Nuestros Planes de Suscripción',
      subtitle: 'En MoviRent contamos con tres planes de suscripción que te brindarán beneficios únicos',

    },
    viewScooter: {
      detalle: 'Ver Detalles',
      buscar: 'Buscar Scooter'
    },
    scooterDetails: {
      recordatorio: 'Recuerda siempre tener los datos del scooter correctos y actualizados para así generar más confianza entre los usuarios',
      nombre: 'Nombre del Scooter',
      marca: 'Marca',
      modelo: 'Modelo',
      url: 'URL de la imagen',
      distrito: 'Distrito',
      celular: 'Numero de teléfono',
      mesage: 'Puedes cambiarlo cuantas veces quieras',
      noRecuperable: 'Tus datos no podrán se recuperados',
      btnEditar: 'Editar',
      btnEliminar: 'Eliminar',
      btnCancelar: 'Cancelar'
    },
    createScooter: {
      title: 'Crear Scooter',
      nombre: 'Nombre es requerido',
      marca: 'Marca es requerida',
      modelo: 'Modelo es requerido',
      url: 'URL de la imagen es requerida',
      precio: 'Precio por hora es requerido',
      distrito: 'Distrito es requerido',
      telefono: 'Teléfono es requerido',
      btnGuardar: 'Guardar',
      btnCancelar: 'Cancelar'
    },
    scooterCard: {
      btnDetalle: 'Ver Detalle'
    },
    scooterAdd: {
      title: 'Agregar Reseña',
      recuerda: 'Recuerda siempre ser respetuoso con los comentarios y opiniones',
      puntuacion: 'Puntuación:',
      comentario: 'Comentario:',
      btnEnviar: 'Enviar',
      btnCancelar: 'Cancelar'
    },
    paymentView: {
      title: 'Medio de pago',
      recuerda: 'Recuerda poner los datos reales o el pago será denegado',
      numTarjeta: 'Número de tarjeta válido es requerido',
      fechaExp: 'Fecha de vencimiento válida es requerida',
      cvv: 'CVV válido es requerido',
      advertencia: 'No habrá devolución una vez realizado',
      btnPagar: 'Pagar',
      btnCancelar: 'Cancelar'
    },
    paymentScooter: {
      title: 'Pago de Alquiler de Scooter',
      subtitle: 'Recuerda poner los datos reales o el pago será denegado',
      numTarjeta: 'Número de tarjeta válido es requerido',
      fechaExp: 'Fecha de vencimiento válida es requerida',
      cvv: 'CVV válido es requerido',
      advertencia: 'No habrá devolución una vez realizado',
      btnPagar: 'Pagar',
      btnCancelar: 'Cancelar'
    },
    userview: {
      title: '¿Tus datos son incorrectos o deseas actualizarlos? ¡Edítalos!',
      titleView: 'Mis datos',
      info: 'Recuerda siempre tener tus datos correctos y actualizados para así generar más confianza entre los usuarios,',
      name: 'Nombres',
      contrasena: 'Contraseña',
      celular: 'Celular',
      email: 'Correo Electrónico',
      dni: 'DNI',
      URL: 'URL de la imagen',
      dirrecion: 'Dirección',

      confMessage: 'Puedes cambiarla cuantas veces quieras',
      confDelete: 'Tus datos no podrán ser recuperados',

      btnHistorial: 'Ver Historial',
      btnGuardar: 'Guardar',
      btnBorrar: 'Borrar',
      btnEliminar: 'Eliminar',
      btnCancelar: 'Cancelar',
      btnEditar: 'Editar',
    },
    movirent: {
      name: 'Nombre del equipo',
      address: 'Dirección',
      marca: 'Marca de Scooter',
      phone: 'Teléfono',
      model: 'Modelo de Scooter',
      imgUrl: 'URL de la imagen',
      price: 'Costo de alquiler',
      tituloResultado: 'Sus Scooter registrados',
      titleGeneral: 'Registro de Scooter',
      nuevoScooter: 'Registrar nuevo Scooter',
      titleCard: 'Mis Scooter',
      redesSociales: 'Nuestras redes sociales',
      soporte: 'Soporte',
      names: 'Quienes Somos',
      question: 'Preguntas Frecuentes',
      policy: 'Políticas de Privacidad',
      description: '© 2024 -Todos los derechos reservados - MoviRent',
      titleQuienesSomos: '¿Quiénes somos?',
      welcome: '¡Bienvenido a MoviRent!'
    },
    buttons: {
      profile: 'Perfil',
      subscription: 'Mi Suscripción',
      reviews: 'Reseñas',
      reservations: 'Reservas',
      scooter: 'Scooter',
      history: 'Historial',
      logout: 'Cerrar Sesión'
    },
    titles: {
      title: '¿Tus datos son incorrectos o deseas actualizarlos? ¡Edítalos!'
    }
  },
  en: {
    reservationHistory: {
      title: 'Rental Scooter History',
      verDetalles: 'View Details',
      eliminarHistorial: 'Delete History',
      btnCancelar: 'Cancel',
      btnBorrarHistorial: 'Delete History'
    },
    reservationDetails: {
      title: 'Reservation Details',
      fechaInicio: 'Start Date:',
      fechaFin: 'End Date:',
      tiempo: 'Time:',
      calificacion: 'Rating:',
      nombrePropietario: 'Owner Name:',
      telefono: 'Phone:',
      btnCerrar: 'Close'
    },
    suscription: {
      title: 'Our Subscription Plans',
      subtitle: 'At MoviRent, we offer three subscription plans that provide unique benefits',
    },
    viewScooter: {
      detalle: 'View Details',
      buscar: 'Search Scooter'
    },
    scooterDetails: {
      recordatorio: 'Always remember to keep the scooter information correct and updated to build more trust among users.',
      nombre: 'Scooter Name',
      marca: 'Brand',
      modelo: 'Model',
      url: 'Image URL',
      distrito: 'District',
      celular: 'Phone Number',
      mesage: 'You can change it as many times as you want.',
      noRecuperable: 'Your data cannot be recovered.',
      btnEditar: 'Edit',
      btnEliminar: 'Delete',
      btnCancelar: 'Cancel'
    },
    createScooter: {
      title: 'Create Scooter',
      nombre: 'Name is required.',
      marca: 'Brand is required.',
      modelo: 'Model is required.',
      url: 'Image URL is required.',
      precio: 'Price per hour is required.',
      distrito: 'District is required.',
      telefono: 'Phone is required.',
      btnGuardar: 'Save',
      btnCancelar: 'Cancel'
    },
    scooterCard: {
      btnDetalle: 'View Detail'
    },
    scooterAdd: {
      title: 'Add Review',
      recuerda: 'Always remember to be respectful in comments and opinions.',
      puntuacion: 'Rating:',
      comentario: 'Comment:',
      btnEnviar: 'Submit',
      btnCancelar: 'Cancel'
    },
    paymentView: {
      title: 'Payment Method',
      recuerda: 'Remember to enter real data or the payment will be denied.',
      numTarjeta: 'Valid card number is required.',
      fechaExp: 'Valid expiration date is required.',
      cvv: 'Valid CVV is required.',
      advertencia: 'There will be no refund once completed.',
      btnPagar: 'Pay',
      btnCancelar: 'Cancel'
    },
    paymentScooter: {
      title: 'Scooter Rental Payment',
      subtitle: 'Remember to enter real data or the payment will be denied.',
      numTarjeta: 'Valid card number is required.',
      fechaExp: 'Valid expiration date is required.',
      cvv: 'Valid CVV is required.',
      advertencia: 'There will be no refund once completed.',
      btnPagar: 'Pay',
      btnCancelar: 'Cancel'
    },
    userview: {
      title: "Is your data incorrect or do you want to update it? Edit it!",
      info:"Always remember to keep your data correct and updated to build more trust among users.",

      name:'Full Name',
      contrasena:'Password',
      celular:'Mobile Number',
      email:'Email Address',
      dni:'DNI',
      URL:'Image URL',
      dirrecion:'Address',

      confMessage:'You can change it as many times as you want.',
      confDelete:'Your data cannot be recovered.',

      btnHistorial:'View History',
      btnGuardar:'Save',
      btnBorrar:'Delete',
      btnEliminar:'Delete',
      btnCancelar:'Cancel',
      btnEditar:'Edit'
    },
    movirent:{
      name:'Team Name',
      address:'Address',
      marca:'Scooter Brand',
      phone:'Phone Number',
      model:'Scooter Model',
      imgUrl:'Image URL',
      price:'Rental Cost',
      tituloResultado:'Your Registered Scooters',
      titleGeneral:'Scooter Registration',
      nuevoScooter:'Register New Scooter',
      titleCard:'My Scooters',
      redesSociales:'Our Social Media',
      soporte:'Support',
      names:'Who We Are',
      question:'Frequently Asked Questions',
      policy:'Privacy Policies',
      description:'© 2024 - All rights reserved - MoviRent',
      titleQuienesSomos:'Who are we?',
      welcome:'Welcome to MoviRent!'
    },
    buttons:{
      profile:'Profile',
      subscription:'My Subscription',
      reviews:'Reviews',
      reservations:'Reservations',
      scooter:'Scooter',
      history:'History',
      logout:'Log Out'
    },
    titles:{
      title:"Is your data incorrect or do you want to update it? Edit it!"
    }
  }
};

const i18n = createI18n({
  locale: 'es',
  fallbackLocale: 'es',
  messages
});

export default i18n;
