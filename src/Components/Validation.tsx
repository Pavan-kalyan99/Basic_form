export interface SignUpValues {
    email: string;
    password: string;
    confirmPassword: string;
  }
  
  export interface LoginValues {
    email: string;
    password: string;
    rememberMe: boolean;
  }
  
  // SignUp
  export const validateSignUp = (values: SignUpValues) => {
    const errors: Partial<SignUpValues> = {};
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password must be at least 6 characters';
    }
  
    if (!values.confirmPassword) {
      errors.confirmPassword = 'Confirm password is required';
    } else if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Passwords must match';
    }
  
    return errors;
  };
  
  // Login validation
  export const validateLogin = (values: LoginValues) => {
    const errors: Partial<LoginValues> = {};
  
    if (!values.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = 'Invalid email address';
    }
  
    if (!values.password) {
      errors.password = 'Password is required';
    }
  
    return errors;
  };
  
  // Password
  export const passwordStrength = (password: string): string => {
    if (password.length < 6) return 'Weak';
    if (/[A-Z]/.test(password) && /\d/.test(password)) return 'Strong';
    return 'Moderate';
  };