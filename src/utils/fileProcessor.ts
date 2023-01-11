export const getBase64 = (files: FileList) => {
  return new Promise((resolve) => {
    let fileInfo;
    let baseURL = "";
    // Make new FileReader
    const reader = new FileReader();

    // Convert the file to base64 text
    reader.readAsDataURL(files[0] as File);

    // on reader load somthing...
    reader.onload = () => {
      // Make a fileInfo Object
      console.log("Called", reader);
      baseURL = reader.result as string;
      console.log(baseURL);
      resolve(baseURL);
    };
    console.log(fileInfo);
  });
};
