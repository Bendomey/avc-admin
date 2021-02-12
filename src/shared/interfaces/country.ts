export interface Country {
  id: string;
  name: string;
  currency: string;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface GetCountriesInputProps {
  filter?: {};
  skip?: number;
  limit?: number;
}

export interface GetCountriesOutputProps {
  countries: Country[];
  countriesLength: number;
}

// for adding
export interface CreateCountryInputProps {
  name: string;
  currency?: string;
  description?: string;
  image?: string;
}

export interface CreateCountryOutputProps {
  createCountry: boolean;
}

// for updating
export interface UpdateCountryInputProps {
  id: string;
  name?: string;
  currency?: string;
  description?: string;
  image?: string;
}

export interface UpdateCountryOutputProps {
  updateCountry: boolean;
}

// for deleting
export interface DeleteCountryInputProps {
  id: string;
}

export interface DeleteCountryOutputProps {
  deleteCountry: boolean;
}
