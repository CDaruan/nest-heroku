import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document } from 'mongoose';

export type MemberDocument = Member & Document;

@Schema()
export class Member {
  @Prop()
  numeroCarteirinha: string;

  @Prop()
  nome: string;

  @Prop()
  rg: string;

  @Prop()
  avatarUrl: string;

  @Prop()
  celular: string;

  @Prop()
  cep: string;

  @Prop()
  endereco: string;

  @Prop()
  numero: string;

  @Prop()
  bairro: string;

  @Prop()
  cidade: string;

  @Prop()
  uf: string;

  @Prop()
  nascimento: string;

  @Prop()
  igreja: string;

  @Prop()
  dataIngresso: string;

  @Prop()
  cargo: string;

  @Prop()
  carteirinhaUrl: string;

  @Prop()
  batismoUrl: string;

  @Prop()
  createdAt: string;

  @Prop()
  updatedAt: string;
}

export const MemberSchema = SchemaFactory.createForClass(Member);
