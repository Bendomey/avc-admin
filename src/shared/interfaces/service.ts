export interface Service {
  id: string;
  name: string;
  price: number;
  type: string;
  variant: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetServicesInputProps {
  filter?: {};
  skip?: number;
  limit?: number;
}

export interface GetServicesOutputProps {
  services: Service[];
  servicesLength: number;
}

// for adding
// export interface CreateServiceInputProps {
//   name: string;
//   currency?: string;
//   description?: string;
//   image?: string;
// }

// export interface CreateServiceOutputProps {
//   createService: boolean;
// }

// for updating
export interface UpdateServiceInputProps {
  id: string;
  name?: string;
  price?: number;
  description?: string;
  type?: string;
}

export interface UpdateServiceOutputProps {
  updateService: boolean;
}

// for deleting
// export interface DeleteServiceInputProps {
//   id: string;
// }

// export interface DeleteServiceOutputProps {
//   deleteService: boolean;
// }
