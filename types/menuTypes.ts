
export interface MenuItem {
    id: number;
    name: string;
    description: string;
    category: string;
    price: number;
    is_available: boolean;
    is_popular: boolean;
    is_vegetarian: boolean;
    image_url: string;
    dietary_flags: string[];
    prep_time_minutes: number;
    spice_level: number; 
}