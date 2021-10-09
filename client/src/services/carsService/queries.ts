import { gql } from '@apollo/client';

export const GET_ALL_CARS = gql`
    query {
        cars {
            id
            name
            dailyPrice
            monthlyPrice
            thumbnailUrl
            gas
            mileage
            transmission
        }
  }
`;
export const GET_CARS = gql`
    query ($transmission: String,$gas:String) {
        getCars(transmission:$transmission,gas:$gas) {
            id
            name
            dailyPrice
            monthlyPrice
            thumbnailUrl
            gas
            mileage
            transmission
        }
    }
`;

export const GET_CAR = gql`
    query ($id: String) {
        getCar(id:$id) {
            id
            name
            dailyPrice
            monthlyPrice
            thumbnailUrl
            gas
            mileage
            transmission
        }
    }
`;

