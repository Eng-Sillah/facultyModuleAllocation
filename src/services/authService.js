// authService.js
export const login = (email, password, role) => {
    if (role === 'admin') {
      if (email === 'admin@example.com' && password === 'adminpassword') {
        return { success: true, message: 'Login successful as admin' };
      }
    } else if (role === 'lecturer') {
      if (email === 'lecturer@example.com' && password === 'lecturerpassword') {
        return { success: true, message: 'Login successful as Lecturer' };
      }
    }
  
    return { success: false, message: 'Login failed' };
  };
  