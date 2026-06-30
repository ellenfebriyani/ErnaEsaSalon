Salinexport const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

export const validatePhone = (phone) => {
  const re = /^(\+62|62|0)[0-9]{9,12}$/;
  return re.test(phone);
};

export const validatePassword = (password) => {
  // Min 6 chars, at least 1 uppercase, 1 lowercase, 1 number
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{6,}$/;
  return re.test(password);
};

export const validateBookingDate = (date) => {
  const bookingDate = new Date(date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return bookingDate >= today;
};

export const validateBookingTime = (time) => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  return hour >= 9 && hour < 20; // 9 AM - 8 PM
};