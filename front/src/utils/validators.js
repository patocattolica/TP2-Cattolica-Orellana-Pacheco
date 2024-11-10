export const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return 'Ingrese un email válido';
  }
  return true;
};

export const validateDNI = (dni) => {
  const dniPattern = /^[0-9]{1,8}$/;
  if (!dniPattern.test(dni)) {
    return 'El DNI debe contener solo números y tener máximo 8 dígitos';
  }
  return true;
};
