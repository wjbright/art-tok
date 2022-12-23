import { useState } from "react";
import { getBase64 } from "../../utils/fileProcessor";
import { trpc } from "../../utils/trpc";

type Files = FileList | null;
const Upload = () => {
  const [file, setFile] = useState<Files>();
  const [fileCaption, setFileCaption] = useState("");

  const createContentMutation = trpc.content.createContent.useMutation({
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (err) => {
      alert(err.message);
    },
  });

  const handleCreateContent = async () => {
    const fileString = await getBase64(file as FileList);
    createContentMutation.mutateAsync({
      caption: fileCaption,
      file: fileString as string,
    });
  };

  return (
    <div className="p-52 shadow">
      <h3 className=" mb-5 text-2xl font-bold "> Upload Content</h3>
      <input
        className="mb-3 block   border-gray-600"
        type={"file"}
        onChange={(e) => setFile(e.target.files)}
      />
      Caption
      <textarea
        className="mb-3 block w-full border border-gray-600"
        rows={10}
        onChange={(e) => setFileCaption(e.target.value)}
      />
      <button
        className="mb-3 block border border-gray-600 bg-gray-600 px-10 py-5 text-white"
        onClick={() => handleCreateContent()}
      >
        Upload
      </button>
    </div>
  );
};

export default Upload;
