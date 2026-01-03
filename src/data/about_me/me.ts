export interface Me {
  firstName: string;
  lastName: string;
  fullName: string;
  age: number;
  location: string;
  email: string;
  phoneNumberString: string;
  phoneNumber: number;
  workingTitle: string;
}

export const ME: Me = {
  firstName: "Stian",
  lastName: "Larsen",
  fullName: "Stian Larsen",
  workingTitle: "Full Stack Web Developer",
  age: new Date().getFullYear() - 1997,
  location: "Oslo, Norway",
  email: "stian.larsen@mac.com",
  phoneNumberString: "+47 926 89 781",
  phoneNumber: 92689781,
};
