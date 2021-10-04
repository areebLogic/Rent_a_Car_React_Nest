export interface GetCars {
    __typename: 'Car';
    id: string;
    name: string;
    dailyPrice: number;
    monthlyPrice: number;
    mileage: string;
    gas: string
    transmission: string;
    thumbnailUrl: string;
}
