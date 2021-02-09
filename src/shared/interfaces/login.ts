export interface Administrator {
  id: string;
  fullname: string;
  email: string;
  phone: string;
  role: string;
  phoneVerifiedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginInputProps {
  email: string;
  password: string;
}

export interface LoginOutputProps {
  loginAdmin: {
    token: string;
    admin: Administrator;
  };
}
