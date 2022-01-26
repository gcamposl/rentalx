import { Router } from "express";
import { CategoriesRepository } from "../repositories/CategoriesRepository";
import { PostgresCategoryRepository } from "../repositories/PostgresCategoryRepository";
import { CreateCategoryServices } from "../services/CreateCategoryServices";

const categoriesRoutes = Router();
const categoriesRepository = new PostgresCategoryRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryServices(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const all = categoriesRepository.list();

  return response.json(all);
})
export { categoriesRoutes };
