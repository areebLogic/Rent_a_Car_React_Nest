import { InputType, Field, Int } from "@nestjs/graphql";
import { Max, Min } from 'class-validator';

@InputType()
export class NewCarInput {

    @Field()
    name: string;

    @Field(type => Int)
    @Max(100)
    @Min(10)
    dailyPrice: number;

    @Field(type => Int)
    @Max(1500)
    @Min(700, {message: 'Minimum monthly price is $700.'})
    monthlyPrice: number;

    @Field()
    mileage: string;

    @Field()
    gas: string

    @Field()
    transmission: string;

    @Field()
    thumbnailUrl: string;
}