import { S3Client } from '@aws-sdk/client-s3';

export const S3_PROVIDER = 'S3_PROVIDER';

export const S3Provider = {
  provide: S3_PROVIDER,
  useFactory: () => {
    const {
      AWS_ACCESS_KEY_ID,
      AWS_SECRET_ACCESS_KEY,
      AWS_REGION,
      AWS_S3_ENDPOINT,
    } = process.env;

    if (
      !AWS_ACCESS_KEY_ID ||
      !AWS_SECRET_ACCESS_KEY ||
      !AWS_REGION ||
      !AWS_S3_ENDPOINT
    ) {
      throw new Error('S3 env variables not configured');
    }

    return new S3Client({
      region: AWS_REGION,
      endpoint: AWS_S3_ENDPOINT,
      forcePathStyle: true,
      credentials: {
        accessKeyId: AWS_ACCESS_KEY_ID,
        secretAccessKey: AWS_SECRET_ACCESS_KEY,
      },
    });
  },
};
