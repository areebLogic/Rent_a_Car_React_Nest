import { GET_ALL_CARS, GET_CARS, GET_CAR } from './queries';
import { apolloClient } from '../graphql';
import { GetCars } from './Requests/GetCars';

class CarService {
  public async getAllCars(): Promise<GetCars[]> {
    const res = await apolloClient
      .query({ query: GET_ALL_CARS })
      .catch((err) => {
        throw err;
      });
    if (res !== undefined) return res.data.cars as GetCars[];
    else return [];
  }

  public async getCars(
    transmission?: string,
    gas?: string
  ): Promise<GetCars[]> {
    const res = await apolloClient
      .query({
        query: GET_CARS,
        variables: {
          transmission: transmission,
          gas: gas,
        },
      })
      .catch((err) => {
        throw err;
      });
    if (res !== undefined) return res.data.getCars as GetCars[];
    else return [];
  }

  public async getCar(id: string): Promise<GetCars> {
    const res = await apolloClient
      .query({
        query: GET_CAR,
        variables: {
          id: id,
        },
      })
      .catch((err) => {
        throw err;
      });
    return res.data.getCar as GetCars;
  }
}

export default new CarService();

