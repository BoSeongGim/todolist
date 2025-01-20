import {launchImageLibrary} from 'react-native-image-picker';
import s3 from './awsConfig';

// 이미지 선택 함수
export const selectImage = async () => {
  const result = await launchImageLibrary({
    mediaType: 'photo',
  });

  if (result.assets && result.assets.length > 0) {
    return result.assets[0]; // 선택된 파일 정보
  }

  throw new Error('이미지가 선택되지 않았습니다.');
};

// S3 업로드 함수
export const uploadToS3 = async (file) => {
  const fileName = file.fileName || `image_${Date.now()}`;
  const fileUri = file.uri;

  const params = {
    Bucket: 'YOUR_BUCKET_NAME',
    Key: fileName,
    Body: {
      uri: fileUri,
      type: file.type,
    },
    ContentType: file.type,
    ACL: 'public-read',
  };

  try {
    const response = await s3.upload(params).promise();
    console.log('S3 업로드 성공:', response.Location);
    return response.Location;
  } catch (error) {
    console.error('S3 업로드 실패:', error);
    throw new Error('S3 업로드 중 오류 발생');
  }
};
