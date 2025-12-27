import { Inject, Injectable } from '@nestjs/common';
import { PutObjectCommand, S3Client } from '@aws-sdk/client-s3';
import { S3_PROVIDER } from './s3.provider';

@Injectable()
export class S3Service {
  constructor(
    @Inject(S3_PROVIDER) private readonly s3: S3Client,
  ) {}

  async upload(file: Express.Multer.File, path: string) {
    const key = `${path}/${Date.now()}-${file.originalname}`;

    await this.s3.send(
      new PutObjectCommand({
        Bucket: process.env.AWS_S3_BUCKET!,
        Key: key,
        Body: file.buffer,
        ContentType: file.mimetype,
        ACL: 'public-read',
      }),
    );

    return `${process.env.AWS_S3_ENDPOINT}/${process.env.AWS_S3_BUCKET}/${key}`;
  }
}
