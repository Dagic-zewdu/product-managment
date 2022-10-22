import React from 'react';
import Dropzone from 'react-dropzone';
import styles from './index.module.scss';

function UploadImage() {
  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} multiple accept="image/*" />
            <div className={styles.uploadZone}>
              <i className="fa-sharp fa-solid fa-images fa-4x"></i>
              <p> Add product images.</p>
              Drag your images here or <u> Click here </u> to select
            </div>
          </div>
        </section>
      )}
    </Dropzone>
  );
}

export default UploadImage;
