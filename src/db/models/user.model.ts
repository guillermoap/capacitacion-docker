import {
  AllowNull,
  Column,
  IsEmail,
  Model,
  Table,
  Unique
} from "sequelize-typescript";

@Table({
  timestamps: true,
  paranoid: true,
  deletedAt: "deletionDate"
})
export class User extends Model<User> {
  @AllowNull(false)
  @Column
  public name: string;

  @AllowNull(false)
  @Column
  public lastName: string;

  @AllowNull(false)
  @IsEmail
  @Unique
  @Column
  public email: string;

  @AllowNull(false)
  @Column
  public password: string;
}

export default User;
