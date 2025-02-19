export interface CountryPrediction {
    country_id: string;
    probability: number;
}

export interface Nationality {
    name: string;
    country: CountryPrediction[];
}