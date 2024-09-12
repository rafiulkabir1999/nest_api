import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  code: string;

  @Column()
  qty: string;
 
  @Column()
  img: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({type:'timestamp',default:()=>'CURRENT_TIMESTAMP'})
  created_at:Date;

  @UpdateDateColumn({type:'timestamp',default:()=>'CURRENT_TIMESTAMP',onUpdate:'CURRENT_TIMESTAMP'})
  updated_at:Date;
  
}