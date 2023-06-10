export default function Doc({ docData }: any) {
  return (
    <div className="min-h-[800px] w-[600px] bg-white">
      <input
        className="w-full bg-transparent outline-none p-4"
        placeholder="Title"
        value={docData?.title}
      />
      <textarea
        className="h-full w-full bg-transparent outline-none p-4"
        placeholder="Start typing..."
      ></textarea>
    </div>
  );
}
