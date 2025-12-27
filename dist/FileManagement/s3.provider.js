"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.S3Provider = exports.S3_PROVIDER = void 0;
const client_s3_1 = require("@aws-sdk/client-s3");
exports.S3_PROVIDER = 'S3_PROVIDER';
exports.S3Provider = {
    provide: exports.S3_PROVIDER,
    useFactory: () => {
        const { AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_REGION, AWS_S3_ENDPOINT, } = process.env;
        if (!AWS_ACCESS_KEY_ID ||
            !AWS_SECRET_ACCESS_KEY ||
            !AWS_REGION ||
            !AWS_S3_ENDPOINT) {
            throw new Error('S3 env variables not configured');
        }
        return new client_s3_1.S3Client({
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
//# sourceMappingURL=s3.provider.js.map