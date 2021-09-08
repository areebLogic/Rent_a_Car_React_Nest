import { NewCarInput } from './dto/new-car.input';
import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Car } from './entities/car';

@Injectable()
export class CarsService {
  constructor(@InjectRepository(Car) private carRepository: Repository<Car>) {}
  public async getAllCars(): Promise<Car[]> {
    const cars = await this.carRepository.find();
    if (cars) return cars;
    else throw new InternalServerErrorException();
  }

  public async getCars(transmission: string, gas?: string): Promise<Car[]> {
    const cars = await this.carRepository
      .findBy({ transmission, gas })
      .catch((err) => {
        throw new InternalServerErrorException();
      });
    if (!cars)
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Car does not exists.',
        },
        HttpStatus.NOT_FOUND,
      );
    return cars;
  }

  public async getCar(id: string): Promise<Car | string> {
    const car = await this.carRepository
      .findOneBy({ id:id })
      .catch((err) => {
        throw new InternalServerErrorException();
      });
      if (!car)
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Car does not exists.',
        },
        HttpStatus.NOT_FOUND,
      );
    return car;
  }

  public async addCar(newCarData: NewCarInput): Promise<Car> {
    const newCar = this.carRepository.create(newCarData);
    await this.carRepository.save(newCar).catch((err) => {
      new InternalServerErrorException();
    });
    return newCar;
  }

  public async deleteCar(carId: string): Promise<Car | string> {
    const car = await this.carRepository.findOneBy({ id: carId });
    if (!car)
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: 'Car does not exists.',
        },
        HttpStatus.NOT_FOUND,
      );
    await this.carRepository.delete({ id: carId }).catch((err) => {
      throw new InternalServerErrorException();
    });
    return car;
  }
}
