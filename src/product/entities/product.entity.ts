import { Category } from "src/category/entities/category.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'product' })
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column()
    price: number;

    @Column({ type: 'int' })
    quantity: number;

    @Column({ type: 'int' })
    category_id: number;


    // Relation avec la table category

    @ManyToOne(() => Category, category => category.products, { eager: true })
    @JoinColumn({ name: 'category_id' })
    category: Category;
    
 }
