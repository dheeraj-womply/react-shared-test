export interface IBusinessDropdown {
    data: IBusinessDropdownData;
    handleChange: (args: any) => void;
}

export interface IBusinessDropdownData {
    businessDropdown: BusinessLocation[],
    activeLocation: BusinessLocation | undefined
}

export interface Address {
    address1: string;
    address2: string;
    city: string;
    state: string;
    zip: string;
}

export interface Category {
    id: number;
    name: string;
}

export interface Coordinates {
    latitude: number | null;
    longitude: number | null;
}

export interface Analytics {
    trial: boolean;
    is_trial: boolean;
    trial_end_date: string | null;
    claimed_at: string | null;
    claimed_at_month: string | null;
    sales_rep_id: string | null;
}

export interface EmailSettings {
    reputation_alerts: boolean;
    monthly_business_summaries: boolean;
    weekly_business_summaries: boolean;
    weekly_competitor_summaries: boolean;
}

export interface BusinessLocation {
    id: number;
    slug: string;
    name: string;
    business_source: string;
    business_phone: string;
    website_url: string;
    price: number | null;
    address: Address;
    category: Category;
    coordinates: Coordinates;
    analytics: Analytics;
    email_settings: EmailSettings;
}