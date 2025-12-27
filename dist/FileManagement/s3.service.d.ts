import { S3Client } from '@aws-sdk/client-s3';
export declare class S3Service {
    private readonly s3;
    constructor(s3: S3Client);
    upload(file: Express.Multer.File, path: string): Promise<string>;
}
