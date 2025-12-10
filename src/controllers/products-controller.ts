import { NextFunction, Request, Response } from "express";
import {AppError} from "@/utils/AppError"
import { knex } from "@/database/knex";
import { z } from "zod";

interface Product {
  id?: number;
  name: string;
  price: number;
}

class ProductController {
  async index(request: Request, response: Response, next: NextFunction) {
    try {
        const{name} = request.query
        const products = await knex("products")
        .select()
        .whereLike("name", `%${name ?? ""}%`)
        .orderBy("name")
        

      return response.json(products);
    } catch (error) {
      next(error);
    }
  }

  async create(request: Request, response: Response, next: NextFunction) {
    try {
      const bodySchema = z.object({
        name: z.string().trim().min(6),
        price: z.number().gt(0, { message: "value must be greater than 0" }),
      });

      const { name, price } = bodySchema.parse(request.body);

      await knex<Product>("products").insert({ name, price });

      return response.status(201).json({ name, price });
    } catch (error) {
      next(error);
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    try {
      const id = z
      .string()
      .transform((value) => Number(value))
      .refine((value) => !isNaN(value), {message: "id must be a number"})
      .parse(request.params.id)

      const bodySchema = z.object ({
        name: z.string().trim().min(6),
        price: z.number().gt(0),
      })

      const {name, price} = bodySchema.parse(request.body)

      const product = knex<ProductsRepository>("products").select().where({id}).first()
      const product = knex<ProductRepository>("products")
      .select()
      .where({ id })
      .first()

      if(!product) {
        throw new AppError("product not found")
      }

      await knex<ProductRepository>("products")
      .update({name, price, updated_at: knex.fn.now()})
      .where({id})

      return response.json()
    } catch (error) {
        next(error)
    }
    }

  async remove(request: Request, response: Response, next: NextFunction) {
    try {
        const id = z
      .string()
      .transform((value) => Number(value))
      .refine((value) => !isNaN(value), {message: "id must be a number"})
      .parse(request.params.id)

      const product = await knex<ProductRepository>("products")
      .select()
      .where({id})
      .first()

      if(!product) {
        throw new AppError("product not found")
      }
      await knex<ProductRepository>("products").delete().where({id})

      return response.json()
    } catch (error) {
        next(error)
    }
}



export { ProductController };
