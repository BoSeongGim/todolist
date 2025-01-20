import React from 'react';
import {Button, Alert} from 'react-native';
import {selectImage, uploadToS3} from '../../services/s3Uploader';

const UploadButton = () => {
  const handleUpload = async () => {
    try {
      const image = await selectImage();
      await uploadToS3(image);
      Alert.alert('업로드 완료', '이미지가 성공적으로 업로드되었습니다.');
    } catch (error) {
      Alert.alert('오류 발생', error.message || '이미지 업로드 중 문제가 발생했습니다.');
    }
  };

  return <Button title="이미지 업로드" onPress={handleUpload} />;
};

export default UploadButton;
