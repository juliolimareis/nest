import { SQL } from 'src/dtos/abstract';
import {
  // IsBoolean,
  IsDate,
  // IsDateString,
  // IsEnum,
  IsNotEmpty,
  // IsOptional,
  // IsString,
  // MaxLength,
} from 'class-validator';
import { Type } from 'class-transformer';

// enum alunos_sexo {
//   M = 'm',
//   F = 'f',
//   O = 'o',
// }

export class Student extends SQL {
  @IsNotEmpty()
  name: string;

  @IsDate()
  @Type(() => Date)
  birthday?: Date;
}
//   @IsNotEmpty()
//   login_id: number;

//   @IsOptional()
//   @IsString()
//   @MaxLength(800)
//   foto?: string;

//   @IsBoolean()
//   autorizar_uso_imagem: boolean;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   matricula?: string;

//   @IsNotEmpty()
//   @IsString()
//   @MaxLength(255)
//   nome: string;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   sobrenome?: string;

//   @IsNotEmpty()
//   @IsString()
//   @MaxLength(255)
//   nome_mae: string;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   nome_pai?: string;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   nome_responsavel?: string;

//   @IsBoolean()
//   alergico: boolean;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   tipo_alergia?: string;

//   @IsBoolean()
//   deficiencia: boolean;

//   @IsBoolean()
//   nee: boolean;

//   @IsOptional()
//   @IsString()
//   qual_deficiencia?: string;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   nacionalidade?: string;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   naturalidade?: string;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   cor_raca?: string;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   tipo_sanguineo?: string;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   cpf?: string;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   rg?: string;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   rg_orgao_emissor?: string;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   rg_data_missao?: string;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   rg_uf?: string;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   estado_civil?: string;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   certidao_nascimento?: string;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   certidao_casamento?: string;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   livro?: string;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   folha?: string;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   termo?: string;

//   @IsDateString()
//   nascimento: Date;

//   @IsOptional()
//   @IsEnum(alunos_sexo)
//   sexo?: alunos_sexo;

//   @IsOptional()
//   @IsString()
//   observacao?: string;

//   @IsBoolean()
//   transporte: boolean;

//   @IsOptional()
//   @IsString()
//   @MaxLength(255)
//   qual_transporte?: string;

//   @IsBoolean()
//   dispositivo_com_acesso_internet: boolean;

//   @IsBoolean()
//   acesso_celular: boolean;

//   @IsBoolean()
//   acesso_computador: boolean;
// }
