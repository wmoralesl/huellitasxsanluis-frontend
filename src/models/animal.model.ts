export interface Animal {
    id?: number;
    user_id: number;
    name: string;
    species: string;
    breed?: string;
    age?: number;
    description?: string;
    is_active?: boolean;
    created_at?: Date;
    updated_at?: Date;
    // Agrega más propiedades según necesites
  }