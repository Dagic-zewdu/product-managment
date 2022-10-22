import React from 'react';
import Dropzone from 'react-dropzone';

function UploadImage() {
  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} multiple />
            <p>Drag 'n' drop some files here, or click to select file to add product image</p>
          </div>
        </section>
      )}
    </Dropzone>
  );
}

export default UploadImage;
