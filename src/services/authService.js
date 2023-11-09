// authService.js
export const login = (email, password, role, lecturerData) => {
  if (role === 'admin') {
    if (email === 'admin@example.com' && password === 'adminpassword') {
      return { success: true, message: 'Login successful as admin' };
    }
  } else if (role === 'lecturer') {
    const lecturer = lecturerData.find((lecturer) => lecturer.email === email && lecturer.password === password);

    if (lecturer) {
      return { success: true, message: 'Login successful as Lecturer', lecturer: lecturer }; // Include the lecturer data in the response
    }
  }

  return { success: false, message: 'Login failed' };
};
