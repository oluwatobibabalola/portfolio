type ImageProps = {
  src: string;
  alt: string;
  caption: string;
};
export const ImageComponent = ({ src, alt, caption }: ImageProps) => {
  return (
    <div className="grid gap-y-4">
      <div className=" rounded-md shadow p-8 bg-[#F7F7F8]">
        <img src={src} alt={alt} className="object-contain" />
      </div>
      <p className="flex items-center justify-center text-xs font-normal leading-6 text-secondary-foreground">
        {caption}
      </p>
    </div>
  );
};
