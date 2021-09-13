import { NewCarInput } from './dto/new-car.input';
import { Car } from './entities/car';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CarsService } from './cars.service';

@Resolver()
export class CarsResolver {
  constructor(private carsService: CarsService) {}

  @Query((returns) => [Car])
  public async cars(): Promise<Car[]> {
    return this.carsService.getAllCars().catch((err) => {
      throw err;
    });
  }

  @Query((returns) => [Car])
  public async getCars(
    @Args('transmission',{nullable:true}) transmission: string , @Args('gas',{nullable:true}) gas?: string,
  ): Promise<Car[]> {
    return this.carsService.getCars(transmission,gas).catch((err) => {
      throw err;
    });
  }

  @Query((returns) => Car)
  public async getCar(
    @Args('id',{nullable:true}) id: string
  ): Promise<Car | string> {
    return this.carsService.getCar(id).catch((err) => {
      throw err;
    });
  }

  @Mutation((returns) => Car)
  public async addNewCar(
    @Args('newCarData') newCarData: NewCarInput,
  ): Promise<Car> {
    return this.carsService.addCar(newCarData).catch((err) => {
      throw err;
    });
  }
  @Mutation((returns) => Car)
  public async deleteCar(@Args('carId') carId: string): Promise<Car | string> {
    return this.carsService.deleteCar(carId).catch((err) => {
      throw err;
    });
  }
}
