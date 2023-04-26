export interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

export enum AuthStep {
  signin = 0,
  signup = 1,
  forgotPassword = 2,
  verifyEmail = 3,
  signupForm = 4,
  resetPassword = 5
}
