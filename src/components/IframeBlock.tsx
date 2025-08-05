export default function IframeBlock({ url, height = 450, width = 500, title }: any) {
  return (
    <div className="w-full overflow-hidden rounded-md">
      <iframe
        src={url}
        height={height}
        width={width}
        title={title || 'Embedded Map'}
        className="w-full border-0"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
