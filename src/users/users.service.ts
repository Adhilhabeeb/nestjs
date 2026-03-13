import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
export interface User {
    name: string
    email: string
    age: number
}
@Injectable()

export class UsersService {

    constructor(
        @InjectModel('User') private userModel: Model<User>
    ) { }

    create(data: User) {

        const user = new this.userModel(data)
        return user.save()
    }

    findAll() {
        return this.userModel.find()
    }

    async findOne(id: string) {
        return this.userModel.findOne({ _id: id }).exec(); // returns a Promise<User>
    }

    update(id: string, data: User) {
        return this.userModel.findByIdAndUpdate(id, data, { new: true })
    }

    delete(id: string) {
        return this.userModel.findByIdAndDelete(id)
    }

}
