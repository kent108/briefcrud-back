import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
  ){}
    
    
  async create(createProductDto: CreateProductDto) {
    const newProduct = this.productRepository.create(createProductDto); // Création d'un nouveau produit
    await this.productRepository.save(newProduct); // Sauvegarde de ce nouveau produit
    return newProduct; // Et retourne le nouveau produit créé
  }

  async findAll() {
    const allProduct = await this.productRepository.find(); // Récupération de tous les produits
    return allProduct; // Et retourne tous les produits
  }

  async findOne(id: number) {
    const oneProduct = await this.productRepository.findOneBy({ id: id }); // Récupération d'un produit par son id
    return oneProduct; // Et retourne le produit
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const productToUpdate = await this.findOne(id); // Récupération d'un produit par son id
    const updatedProduct = this.productRepository.merge(productToUpdate, updateProductDto); // Fusion des données du produit à mettre à jour avec les nouvelles données
    await this.productRepository.save(updatedProduct); // Sauvegarde du produit mis à jour
  }

  async remove(id: number) {
    const productToRemove = await this.findOne(id); // Récupération d'un produit par son id
    return this.productRepository.remove(productToRemove); // Et suppression du produit récupéré
  }
}
