// import AWS from 'aws-sdk';

// AWS.config.update({
//   accessKeyId: 'YOUR_ACCESS_KEY_ID',
//   secretAccessKey: 'YOUR_SECRET_ACCESS_KEY',
//   region: 'YOUR_REGION', // 예: 'us-east-1'
// });

// const s3 = new AWS.S3();

// export default s3;
//--------------------------------------------------------------------
//import Amplify, { Storage } from 'aws-amplify';
//import awsconfig from '../aws-exports'; // Amplify 설정 파일

import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

// S3에 파일 업로드 예제
export const uploadToS3 = async (file) => {
  try {
    const result = await Storage.put(file.name, file, {
      contentType: file.type,
    });
    console.log('File uploaded successfully:', result);
    return result;
  } catch (error) {
    console.error('Error uploading file to S3:', error);
    throw error;
  }
};

