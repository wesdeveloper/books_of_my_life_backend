import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class User1591752994285 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await await queryRunner.createTable(new Table({
        name: 'Users',
        columns: [
            { name : 'id', type: 'int', isPrimary: true },
            { name : 'firstName', type: 'text' },
            { name : 'lastName', type:'text' },
            { name : 'phone', type:'text' },
            { name : 'email', type:'text' },
        ]
      }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('User');
    }

}
