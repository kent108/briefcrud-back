import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'product' })
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', length: 255 })
    name: string;

    @Column({ type: 'int' })
    price: number;

    @Column({ type: 'int' })
    quantity: number;

    @Column({ type: 'int' })
    category_id: number;

    // Relation avec la table category

    
 }
