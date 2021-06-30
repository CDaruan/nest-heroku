import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMemberDto } from './dto/create-member.dto';
import { UpdateMemberDto } from './dto/update-member.dto';
import { Member, MemberDocument } from './entities/member.entity';

@Injectable()
export class MembersService {
  constructor(
    @InjectModel(Member.name) private memberModel: Model<MemberDocument>,
  ) {}
  create(createMemberDto: CreateMemberDto) {
    const member = new this.memberModel(createMemberDto);
    return member.save();
  }

  findAll() {
    return this.memberModel.find();
  }

  findOne(id: string) {
    return this.memberModel.findById(id);
  }

  update(id: string, updateMemberDto: UpdateMemberDto) {
    return this.memberModel.findByIdAndUpdate(
      {
        _id: id,
      },
      {
        $set: updateMemberDto,
      },
      {
        new: true,
      },
    );
  }

  remove(id: string) {
    return this.memberModel.deleteOne({ _id: id }).exec();
  }
}
