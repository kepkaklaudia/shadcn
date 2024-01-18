import { useRef } from "react";
import { DropzoneProps } from "@/libs/types";
import "./styles.css";

export const Dropzone = ({
  filesArray,
  setFilesArray,
  mainLabel,
  loadedLabel,
  emptyLabel,
  loadedTitle,
  emptyTitle,
  deleteTitle,
  deleteAll,
}: DropzoneProps) => {
  const labelRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const files = Array.from(e.target.files as FileList); // Convert FileList to an array of File objects
    setFilesArray(files);
    e.target.value = "";
  };

  const onDragOver = () => labelRef.current?.classList.add("dragover");
  const onDragLeave = () =>
    labelRef.current?.classList.remove("dragover");
  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    labelRef.current?.classList.remove("dragover");
  };

  const filteredArray = (filesArray: File[], index: number) =>
    filesArray.filter((file) => filesArray.indexOf(file) !== index);

  return (
    <>
      <div className="text-left flex flex-col gap-2.5 max-w-[500px] mx-auto my-[25px]">
        <p className="text-sm lg:text-base mb-2">{mainLabel}</p>
        <div
          ref={labelRef}
          onDragOver={onDragOver}
          onDragLeave={onDragLeave}
          onDrop={onDrop}
          className="relative  flex cursor-pointer bg-white border justify-center items-start flex-col px-3 py-2 rounded-md border-solid border-alto hover:bg-alabaster hover:transition-colors hover:duration-[0.5s,background-color] hover:delay-[0.5s] hover:border-black"
        >
          <label className="opacity-80 text-sm m-0">
            {filesArray.length
              ? `${loadedLabel} ${filesArray.length}`
              : `${emptyLabel}`}
          </label>
          <input
            onChange={handleInputChange}
            className="w-full h-full absolute opacity-0 cursor-pointer left-0 top-0 input"
            type="file"
            //role="uploadcare-uploader"
            //data-public-key="your-public-uploadcare-id"
            multiple
            title={filesArray.length ? `${loadedTitle}` : `${emptyTitle}`}
          />
        </div>
      </div>
      {filesArray.length > 0 && (
        <>
          <div className="grid grid-cols-[1fr] gap-2.5 max-w-[500px] mx-auto my-0">
            {filesArray.map((file, index) => {
              return (
                <div
                  className="grid gap-2.5 items-center justify-items-start text-sm grid-cols-[1fr_auto] break-all                "
                  key={file.name}
                >
                  <div>
                    {index + 1}. {file.name}
                  </div>
                  <button
                    title={deleteTitle}
                    onClick={() => {
                      setFilesArray(filteredArray(filesArray, index));
                    }}
                    className="w-3 h-3 opacity-50 border-none delete"
                  ></button>
                </div>
              );
            })}
          </div>
          <button
            className="bg-greyBackground text-sm font-medium m-5 px-2.5 py-[5px] border-none hover:bg-alto hover:transition-colors"
            onClick={() => setFilesArray([])}
          >
            {deleteAll}
          </button>
        </>
      )}
    </>
  );
};
