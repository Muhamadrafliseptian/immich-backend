import { S3Client } from '@aws-sdk/client-s3';
export declare const S3_PROVIDER = "S3_PROVIDER";
export declare const S3Provider: {
    provide: string;
    useFactory: () => S3Client;
};
