import React from 'react';
import Dropzone from 'react-dropzone';
//@ts-ignore
import styles from './index.module.scss';

function UploadImage() {
  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} accept="image/*" />
            <div className={styles.uploadZone}>
              <i className="fa-sharp fa-solid fa-images fa-4x"></i>
              <p> Add product Image.</p>
              Drag your image here or <u> Click here </u> to select
            </div>
          </div>
        </section>
      )}
    </Dropzone>
  );
}

export default UploadImage;
