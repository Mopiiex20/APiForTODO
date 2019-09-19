import { Injectable, Inject, HttpException, BadRequestException } from '@nestjs/common';
import { todoModel } from './content.entity';


@Injectable()
export class ContentService {
  constructor(
    @Inject('TODO_REPOSITORY') private readonly TODO_REPOSITORY: typeof todoModel) { }

  async findAll(): Promise<any[]> {
    console.log('done');

    return await this.TODO_REPOSITORY.find();
  }

  // async findOne(req): Promise<any> {
  //   let book: any = await this.BOOKS_REPOSITORY.findOne<todoModel>({ where: { _id: req.params.id } });
  //   console.log(book);

  //   return book

  // }


  async update(req): Promise<any> {

    if (req.params.id) {
      console.log(req.body);
      const filter = { _id: req.params.id };
      const userUpdated = await this.TODO_REPOSITORY.findOneAndUpdate(filter,
        req.body,
        { new: true }
      );

      return new HttpException('Add is done', 200);

    } else return new BadRequestException()

  }

  async delete(req): Promise<any> {

    if (req.params.id) {
      console.log(req.params.id);

      await this.TODO_REPOSITORY.deleteOne({ _id: req.params.id })

      return new HttpException('Add is done', 200);

    } else new BadRequestException()

  }

  async findUserTODOs(req): Promise<any> {
    const id = req.params.userid
    console.log(id);
    return await this.TODO_REPOSITORY.find({ userid: id })
  }


  async postTODO(req): Promise<any> {
    if (req.body) {
      console.log(req.body);

      await this.TODO_REPOSITORY.create(req.body).then(() => {
        return new HttpException('Add is done', 201)
      })
    } else new BadRequestException()
  }
}